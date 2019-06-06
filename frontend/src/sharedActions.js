export const updateValue = (path, data, type) => ({
  type: type || `Update data on path: ${JSON.stringify(path)}`,
  payload: data,
  path,
  reducer: (state, data) => data,
})

export const loadBoarders = (user) => async (dispatch, getState, {api, logger}) => {
  dispatch(updateValue(['boarders'], await api.getBoarders(user), 'Set boarders'))
}
