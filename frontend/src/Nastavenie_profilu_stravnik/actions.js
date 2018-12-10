import {updateValue, loadBoarders} from '../sharedActions'

export const addBoarder = () => async (dispatch, getState, {api, logger, history}) => {
  logger.log('Add boarder')
  const {user, boarder} = getState()
  await api.addBoarder(user, boarder)
  dispatch(loadBoarders(user))
}
