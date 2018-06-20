const POST = 'POST'
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
      body: JSON.stringify(registerInfo),
      headers: JSON_HEADER,
    })
  }

  getUsers() {
    return this.request('/users').then((res) => res.json())
  }

  request(url, options) {
    this.logger.log(`Request: ${url}`, options)
    return fetch(url, options)
  }
}

export default Api
