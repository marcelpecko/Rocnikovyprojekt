export const registerUser = () => (dispatch, getState, {api}) => {
  const state = getState()
  api.registerUser(state.register)
}
