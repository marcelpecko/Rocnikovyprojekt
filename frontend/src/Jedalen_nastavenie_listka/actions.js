import {updateValue} from '../sharedActions'

export const setMenu = (menu, week) => async (dispatch, getState, {api, logger}) => {
  logger.log('Set menu in backend')
  await api.setMenu(menu, week)
  dispatch(updateValue(['menu'], menu, 'Set menu in state'))
}
