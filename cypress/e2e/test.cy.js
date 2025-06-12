
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
})