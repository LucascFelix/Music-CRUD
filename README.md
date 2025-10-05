# 🎵 CRUD de Músicas - Angular

Este projeto foi desenvolvido em Angular como forma de prática e aprendizado. O sistema realiza um CRUD de músicas, permitindo cadastrar, ler, editar e apagar registros de forma simples. As funcionalidades incluem: cadastrar músicas, listar músicas cadastradas, editar músicas existentes e excluir músicas. As tecnologias utilizadas são Angular CLI, TypeScript, HTML / CSS e JSON Server (para simular o backend).

Exemplo de db.json (crie um arquivo chamado db.json na raiz do projeto):

{
  "musicas": [
    {
      "id": 1,
      "name": "Bohemian Rhapsody",
      "artista": "Freddie Mercury",
      "banda": "Queen",
      "genero": "Rock",
      "ano": 1975
    },
    {
      "id": 2,
      "name": "Imagine",
      "artista": "John Lennon",
      "banda": "",
      "genero": "Pop",
      "ano": 1971
    },
    {
      "id": 3,
      "name": "Billie Jean",
      "artista": "Michael Jackson",
      "banda": "",
      "genero": "Pop",
      "ano": 1982
    }
  ]
}

Como Executar o Projeto: Abra o terminal na pasta do projeto e instale as dependências executando: npm install. Em seguida, inicie o backend (JSON Server) com: json-server --watch db.json. Por fim, inicie a aplicação Angular com: ng s -o. Após isso, o navegador abrirá automaticamente em http://localhost:4200.

Desenvolvido por Lucas Calori. Projeto desenvolvido apenas para fins de estudo e prática com Angular.

