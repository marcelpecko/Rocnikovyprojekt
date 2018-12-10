const POST = 'POST'
const GET = 'GET'
const JSON_HEADER = new Headers({
  'Content-Type': 'application/json',
})

class Api {
  constructor(logger) {
    this.logger = logger
  }

  registerUser(registerInfo) {
    this.request('/register', {
      method: POST,
      // TODO: do not send passwordRepeat
      body: JSON.stringify(registerInfo),
      headers: JSON_HEADER,
    })
  }

  getUsers() {
    return this.request('/users').then((res) => res.json())
  }

  addBoarder(user, boarder) {
    this.request('/boarder', {
      method: POST,
      body: JSON.stringify({user, boarder}),
      headers: JSON_HEADER,
    })
  }

  getBoarders(user) {
    return this.request(`/boarders?email=${user.email}`, {
      method: GET,
      headers: JSON_HEADER,
    }).then((res) => res.json())
  }

  request(url, options) {
    this.logger.log(`Request: ${url}`, options)
    return fetch(url, options)
  }
}

export default Api
