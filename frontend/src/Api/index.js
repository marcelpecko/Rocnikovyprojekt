const POST = 'POST'
const GET = 'GET'
const DELETE = 'DELETE'
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
    }).then((res) => res.json())
  }

  getAllBoarders() {
    return this.request('/boarders', {
      method: GET,
    }).then((res) => res.json())
  }

  setMenu(menu, week) {
    this.request('/menu', {
      method: POST,
      body: JSON.stringify({menu, week}),
      headers: JSON_HEADER,
    })
  }

  getMenu() {
    return this.request('/menu', {
      method: GET,
    }).then((res) => res.json())
  }

  saveMenuChoices(boarderId, menuChoices, week) {
    return this.request('/menuChoices', {
      method: POST,
      body: JSON.stringify({boarderId, menuChoices, week}),
      headers: JSON_HEADER,
    })
  }

  getMenuChoices() {
    return this.request('/menuChoices', {
      method: GET,
    }).then((res) => res.json())
  }

  saveNotice(notice) {
    return this.request('/notice', {
      method: POST,
      body: JSON.stringify({notice}),
      headers: JSON_HEADER,
    })
  }

  getNotice() {
    return this.request('/notice', {
      method: GET,
    }).then((res) => res.text())
  }

  removeUser(userId) {
    return this.request(`/users/${userId}`, {
      method: DELETE,
    })
  }

  removeBoarder(boarderId) {
    return this.request(`/boarders/${boarderId}`, {
      method: DELETE,
    })
  }

  getOldMenu() {
    return this.request('/oldMenu', {
      method: GET,
    }).then((res) => res.json())
  }

  savePrices(prices) {
    return this.request('/prices', {
      method: POST,
      body: JSON.stringify({prices}),
      headers: JSON_HEADER,
    })
  }

  getPrices() {
    return this.request('/prices', {
      method: GET,
    }).then((res) => res.json())
  }

  request(url, options) {
    this.logger.log(`Request: ${url}`, options)
    return fetch(url, options)
  }
}

let api
export const getApi = () => api
export default (logger) => {
  api = new Api(logger)
  return api
}
