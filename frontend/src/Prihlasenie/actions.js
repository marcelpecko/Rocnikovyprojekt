export const loginUser = () => async (dispatch, getState, {api, logger, history}) => {
  logger.log('Login user')
  const users = await api.getUsers()
  console.log(users, 'aaa')
  for (const user of users) {
    if (user.email === 'aaa@sad') history.push('hlavna')
  }
}
