# Conhecimento BackEnd
Conhecimento BackEnd do curso de Vue JS da COD3R

### Executando o projeto em ambiente local

Inicialmente entramos no diretorio **backend**  e fazemos uma copia do nosso .env pelo comando: 

```sh
cd backend
cv .env_file .env
```
**OBS:** Lembre de colocar os dados de acordo como especificado no arquivo *.env_file*


Com o docker instalado rode o comando:

```sh
docker-compose up -d --build
```
Esse comando cria os containers **mongo**, **node_service** e **db_postgres**, dentro do container do **node_service** temos os diretórios *backend* e *frontend* para cada um deles precisamos instalar as dependências, mas para isso precisamos acessar o container pelo comando.

```sh 
docker exec -it node_service zsh
```
Observe que esse comando termina com zsh, pois é esse shell que está sendo usado para este container. Agora vamos fazer a instalação pelos comandos.

```sh 
sudo chown nodeuser:noderuser -R backend
sudo chown nodeuser:noderuser -R frontend
cd /backend
npm install
cd ..
cd /frontend
npm install
```
Pronto, temos nosso front e back que estão com suas dependências devidamente instaladas,agora vamos levantar o sistema, mas antes precisamos rodar nossas migrations para gerar nossas tabelas no banco de dados. 

```sh 
docker exec -it node_service zsh
cd backend
knex migrate:latest
```
Feito isso, agora temos com inicializar nosso backend pelo comando.

```sh 
docker exec -it node_service zsh
cd backend
npm start
```
como saída temos.

```sh
consign v0.1.6 Initialized in /usr/src/app/backend
+ ./config/passport.js
+ ./config/middlewares.js
+ ./api/validation.js
+ ./api/article.js
+ ./api/auth.js
+ ./api/category.js
+ ./api/queries.js
+ ./api/stat.js
+ ./api/user.js
+ ./schedule/statsSchedule.js
+ ./config/routes.js
Backend executando...
```
Podemos agora inicializar nosso FrontEnd pelo comando.

```sh 
docker exec -it node_service zsh
cd frontend
npm run serve -- --port=8080
```
