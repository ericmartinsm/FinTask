# Fintask Desafio para Desenvolvedor Front-End Jr




## `Objetivo`
Desenvolver uma aplicação Front-End utilizando os frameworks VueJs e Semantic Ui consumindo a API pública do Giphy. 

### `Requisitos`

- [x] Listar gifs através de uma busca;
- [x] Visualizar os detalhes de um gif;
- [x] Scroll infinito de gifs
- [x] Salvar os gifs capazes de matar o Senhor do Mal; 
- [x] Editar os dados de um gif salvo; 
- [x] Deletar um gif.

## `A Aplicação e Como utilizar`
### `Utilizando npm`
Para rodar o ambiente de desenvolvimento utilizando o **npm**, basta executar os comandos abaixo na raiz do projeto.

```bash
user@finxi:~$ npm install
user@finxi:~$ npm install -g @vue/cli
user@finxi:~$ npm run serve
``` 
Ao rodar o primeiro comando o npm irá instalar todas as dependências necessárias que o projeto precisa para funcionar. O segundo irá instalar o cli (command language interface) que será responsável por levantar um serviço que possibilitará rodar a aplicação. O terceiro comando é syntax sugar para o seguinte comando do vue-cli `vue-cli-service serve` .

### `Utilizando docker-compose`
Para rodar o ambiente de desenvolvimento utilizando o **docker**, basta executar os comandos abaixo na raiz do projeto. 

```bash
user@finxi:~$ docker-compose build
user@finxi:~$ docker-compose up
```
E para **parar** o ambiente de desenvolvimento:
```bash
user@finxi:~$ docker-compose down
```
Dessa maneira será criado um container com base no arquivo **DockerFile** que se encontra na raiz do projeto. O console ficará atrelado ao container onde se poderá ver todos os logs do mesmo até que o usuário decida sair utilizando o comando `Ctrl + c`.

### `Utilizando a aplicação`

Para utilizar a aplicação basta acessar `http://localhost:8080/`. 

<a href="https://imgur.com/Vh84j4F"><img src="https://i.imgur.com/Vh84j4F.png" title="source: imgur.com" /></a>

Ao entrar na aplicação será possivel ver o campo de pesquisa, insira o termo de pesquisa e pressione enter ou clique na lupa, para executar a pesquisa.

<a href="https://imgur.com/1fsWaW6"><img src="https://i.imgur.com/1fsWaW6.png" title="source: imgur.com" /></a>

Para adicionar um gif à sua carteira basta clicar no ícone de `+`.

<a href="https://imgur.com/oL44VMD"><img src="https://i.imgur.com/oL44VMD.png" title="source: imgur.com" /></a>

Para visualizar a sua carteira basta clicar no botão do carrinho.

<a href="https://imgur.com/jG0rGEC"><img src="https://i.imgur.com/jG0rGEC.png" title="source: imgur.com" /></a>

Para editar as informações do gif de sua carteira basta clicar no botão lápis.

<a href="https://imgur.com/hd61s1v"><img src="https://i.imgur.com/hd61s1v.png" title="source: imgur.com" /></a>

Para deletar o gif de sua carteira basta clicar no Icone de `-` .

<a href="https://imgur.com/albe3rw"><img src="https://i.imgur.com/albe3rw.png" title="source: imgur.com" /></a>

Para carregar mais gifs role a página até o final.
