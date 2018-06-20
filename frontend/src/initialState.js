const state = {
  register: {
    name: '',
    surname: '',
    email: '',
    password: '',
    passwordRepeat: '',
  },
  login: {
    email: '',
    password: '',
  },
  user: undefined,
  boarder: {
    name: '',
    surname: '',
    diet: '',
  },
  boarders: [],
}

export default () => state
