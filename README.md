# Este é um projeto de teste para implantação no firebase hosting.

## Conteúdo

Formulário de cadastro de usuários e de produtos diversos.

## Como usar:

### Cadastro de usuários

```
{
    "nome": "Nome do usuário",
    "email": "
    "senha": "senha"
}
```
### Cadastro de produtos

{
    "nome": "Nome do produto",
    "preco": "Preço do produto",
    "descricao": "Descrição do produto"
}



### . Passo a passo para a implantação do projeto no firebase hosting

0. Crie um projeto no firebase.
 No terminal digite:
1. instalar firebase : npm install -g firebase-tools
2. firebase login.
3. firebase init.
  Selecione "hosting : configure files for firebase hosting and ...." .
  Selecione o projeto que deseja inicializar(que foi criado no firebase hosting).
  Escreva o diretório da compilação no caso dei o nome de out .
  é por fim escreva 'No' para ás duas últimas opções.
4. execute npm run build.
5. Finalmente execute firebase deploy — only hosting no terminal.


OBS: Este é um jeito de fazer deploy do projeto no firebase hosting da forma mais simples.

