
describe("Teste API's", () => {

    it('Login com sucesso e retorno do accessToken', () => {
        cy.request({
          method: 'POST',
          url: 'https://dummyjson.com/auth/login',
          body: {
            username: 'emilys',
            password: 'emilyspass'
          }
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('accessToken')
          cy.log('AccessToken:', response.body.accessToken)
        })
    })

    it('Listagem de todos os usuários', () => {
        cy.request({
          method: 'GET',
          url: 'https://dummyjson.com/users?limit=10'
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('users')
          expect(response.body.users).to.be.an('array').and.not.be.empty
          cy.log('users:', JSON.stringify(response.body.users, null, 2))
        })
    })

})