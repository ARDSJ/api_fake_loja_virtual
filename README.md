# Api Rest **Fake** Loja Virtual

##Instalação

Para rodar os serviços, é necessário ter instalado a versão mais recente do **node** e do **npm**.

Na raiz do projeto, temos um arquivo chamado **package.json**, contendo todas as dependências do projeto. Para realizar a instalação, é necessario executar o comando **npm install** na raiz do projeto, onde se encontra package file.

##**server_api.js**
Disponibiliza acesso para as apis.

##**server_img.js**
Disponibiliza acesso aos arquivos estáticos encontrados dentro do diretório **/static**.

##Inicializando os serviços

Na raiz do projeto, executar os comandos abaixo:

```bash
node server_api.js &
node server_img.js &
```

O **server_img.js** está configurado para trabalhar na porta 4000, enquanto o **server_img.js** na porta 5000.

##Tecnologias utilizadas

* faker
* ip
* json-server
* node-static
* sleep
