import {updateValue} from '../sharedActions'

export const addBoarder = () => async (dispatch, getState, {api, logger, history}) => {
  logger.log('Add boarder')
  const {user, boarder} = getState()
  await api.addBoarder(user, boarder)
  dispatch(updateValue(['boarders'], await api.getBoarders(user)), 'Set boarders')
}
