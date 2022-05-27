import 'dotenv/config'

import { DbAddUser } from '../data/usecases/db-add-user'
import { MongoUserRepository } from '../infra/db/mongodb/repositories/mongo-user-repository'
import { AxiosHttpClient } from '../infra/http/axios-http-client'
import { AddUserController } from '../presentation/controllers/add-user'

import convertXmlToJson from 'xml-js'
import mongoose from 'mongoose'

interface ResponseDataTypes {
  _id: string
  fullName: string
  email: string
  address: string
  addressNumber: number
  phoneNumber: string
}

let page: number = 1
let interval: any

const run = async (): Promise<void> => {
  try {
    const axiosHttpClient = new AxiosHttpClient()

    const repo = new MongoUserRepository()
    const addUserService = new DbAddUser(repo)
    const controller = new AddUserController(addUserService)

    const authorization = 'Basic ' + Buffer.from(`${process.env.DESAFIO_USER}:${process.env.DESAFIO_PASSWORD}`).toString('base64')

    const users = await axiosHttpClient.request({
      url: `${process.env.DESAFIO_BASE_URL}/users?page=${page}&limit=5`,
      method: 'get',
      headers: {
        authorization
      }
    })

    const result = convertXmlToJson.xml2json(users.body, { compact: true, ignoreInstruction: true })
    const { data: { usersList } } = JSON.parse(result)

    const item = usersList.item ? usersList.item : null

    if (item) {
      for (const resultUser of item) {
        let resultAddress
        let itemAddress

        if (resultUser.id) {
          const address = await axiosHttpClient.request({
            url: `${process.env.DESAFIO_BASE_URL}/users/${resultUser.id._text}/address`,
            method: 'get',
            headers: {
              authorization
            }
          })
          resultAddress = convertXmlToJson.xml2json(address.body, { compact: true, ignoreInstruction: true })
          const { data: dataAddress } = JSON.parse(resultAddress)
          itemAddress = dataAddress.item
        }

        let resultContacts
        let itemContact

        if (resultUser.id) {
          const contact = await axiosHttpClient.request({
            url: `${process.env.DESAFIO_BASE_URL}/users/${resultUser.id._text}/contacts`,
            method: 'get',
            headers: {
              authorization
            }
          })

          resultContacts = convertXmlToJson.xml2json(contact.body, { compact: true, ignoreInstruction: true })
          const { data: dataContact } = JSON.parse(resultContacts)
          itemContact = dataContact.item
        }

        const address: any = Array.isArray(itemAddress) ? itemAddress.shift() : itemAddress

        const objectToSave: ResponseDataTypes = {
          _id: resultUser.id._text,
          fullName: `${resultUser.firstName._text} ${resultUser.lastName._text}`,
          email: resultUser.email._text,
          address: address.street._text,
          addressNumber: address.number._text,
          phoneNumber: itemContact.phoneNumber._text
        }

        const httpResponse = await controller.handle({
          body: objectToSave
        })

        console.log(httpResponse)
      }
    } else {
      console.log('Finish')
      clearInterval(interval)
    }

    page = page + 1
  } catch (error) {
    console.log(error)
  }
}

(async () => {
  console.log('Connecting to a database...')
  console.log('Waiting...')

  await mongoose.connect(`${process.env.MONGODB_URL}`, {
    autoCreate: true,
    authSource: 'admin'
  })

  console.log('Connected to a database!')

  await run()
  interval = setInterval(async () => {
    await run()
  }, 90000)
})()
