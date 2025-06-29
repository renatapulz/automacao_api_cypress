## Teste de API com Cypress
Este projeto contém uma automação simples de testes de API utilizando o Cypress como ferramenta de validação.

### ✅ Testes implementados
- Login com sucesso: 
Realiza um POST na rota de autenticação e valida o retorno do status 200, além da presença do accessToken no corpo da resposta.

- Listagem de usuários: 
Faz um GET para recuperar os usuários cadastrados, validando o status da resposta, a estrutura do corpo e garantindo que a lista retornada não esteja vazia.

### 🖥️ Tecnologias
Cypress — para execução e validação dos testes de API.

### ▶️ Como executar

1. Clone o repositório:
```bash
git clone https://github.com/renatapulz/automacao_api_cypress.git
```
   
2. Instale as dependências:
```bash
npm install
 ```
   
3. Execute os testes:
```bash
npx cypress open
```
Isso abrirá o Cypress Test Runner, onde você poderá selecionar e rodar os testes disponíveis.

### 🚀 Resultado:
Captura de tela do Cypress Test Runner executando os testes:

<img width="1642" alt="Captura de Tela 2025-06-29 às 17 03 59" src="https://github.com/user-attachments/assets/ac343d23-ff82-4b74-b660-4aa385b5fd40" />
