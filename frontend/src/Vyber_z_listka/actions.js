export const saveMenuChoices = (menuChoices) => async (dispatch, getState, {api, logger}) => {
  logger.log('Save menu choices')
  const {currentBoarderId} = getState()
  await api.saveMenuChoices(currentBoarderId, menuChoices, getState().week)
}
