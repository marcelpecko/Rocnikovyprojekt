import {updateValue} from '../sharedActions'

export const loginUser = () => async (dispatch, getState, {api, logger, history}) => {
  logger.log('Login user')
  const users = await api.getUsers()
  const loginState = getState().login
  const user = users.find(
    (user) => user.email === loginState.email && user.password === loginState.password
  )
  if (user) {
    dispatch(updateValue(['user'], user, 'Save user login info'))
    history.push('hlavna')
  }
}
