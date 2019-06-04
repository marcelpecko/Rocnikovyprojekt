import {updateValue} from '../sharedActions'

export const loginUser = () => async (dispatch, getState, {api, logger, history}) => {
  logger.log('Login user')
  const users = await api.getUsers()
  const loginState = getState().login
  const user = users.find(
    (user) => user.email === loginState.email && user.password === loginState.password
  )

  const menu = await api.getMenu()
  dispatch(updateValue(['menu'], menu, 'Set menu in state'))

  if (user) {
    if (user.email === 'admin@admin.sk') {
      history.push('jedalen')
    } else {
      dispatch(updateValue(['user'], user, 'Save user login info'))
      history.push('hlavna')
    }
  }
}
