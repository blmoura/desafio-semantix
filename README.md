# Desafio Semantix

Primeiramente, pra executar o projeto, precisamos instalar o MongoDB, e pra isso rodando o comando **docker-compose up -d** na pasta raiz do projeto (desafio-semantix).

Dentro de cada projeto, precisamos instalar as dependencias, rodando o comando **npm install**

## Arquitetura, Patterns e Bibliotecas para garantir padrão no codigo

- Clean Architecture
- SOLID
- Adapters
- Factories
- Message Commit Linter
- ESLint, Husky, Lint Staged
- Docker

## Primeiro desafio: 01-automacao-conversao

Para executar o script, basta executar o comando **npm start**

### Descricao de funcionalidade

Pra esse desafio, foi realizada a consulta a API disponibilizada pela LinkApi, e pra cada usuario retornado pela API, foi feita uma transformacao dos dados pro formato solicitado no desafio e salvo no MongoDB na Collections Users.

Essa consulta foi feita pra todas as paginas. Cada consulta esta trazendo 5 itens, e tem um intervalo de 1 minuto e meio pra fazer uma nova requisicao pras outras paginas, por causa do rate limiter da API.

Todos os dados de retorno da API, vao ser salvos no MongoDB.

## Segundo desafio: managment-gofile-ts

Para executar o script, basta executar o comando **npm run dev.**

### Descricao de funcionalidade

Pra esse desafio, foi criada uma API, onde é possivel realizar a criacao de uma pasta no GoFile e os dados da pasta são salvos na Collection Folders dentro do MongoDb.

Se tratando de **Pastas** ainda, existe uma API onde é possivel deletar uma pasta do GoFile e da collection de **Folders.**

Foi criada uma API para upload de arquivos. Essa rota recebe dados do tipo **multipart/form-data** e salva os dados na Collections Files.

**Não consegui realizar a integração com o GoFile pra fazer o upload dos arquivos pra ferramenta, unico ponto que ficou pendente.**