import React from 'react'
import {Table} from 'reactstrap'
import {connect} from 'react-redux'
import {getApi} from '../Api'
import {keyBy} from 'lodash'
import './Mesacny_prehlad_stravnik.css'

class MesacnyPrehladStravnik extends React.Component {
  state = {lunches: [], prices: undefined}

  async componentDidMount() {
    const {currentBoarderId} = this.props

    const menus = await getApi().getMenuChoices()
    const week = (await getApi().getOldMenu()).week
    const prices = await getApi().getPrices()

    const myMenus = menus.filter(
      (menu) => menu.boarder_id === currentBoarderId && menu.week === week
    )

    if (myMenus.length > 0) {
      let lunches = 0
      for (const menu of myMenus) {
        for (const c of menu.choices) {
          lunches += c > 0 ? 1 : 0
        }
      }
      // eslint-disable-next-line
      this.setState({lunches, prices})
    }
  }

  render() {
    const {lunches, prices} = this.state
    const {boarders, currentBoarderId, history} = this.props

    if (!prices) return null
    if (!currentBoarderId) {
      history.push('/hlavna')
      return null
    }

    const lunchPrice = prices[keyBy(boarders, 'id')[currentBoarderId].diet]

    console.log(lunchPrice, lunches, prices)

    return (
      <div>
        <div>
          <Table>
            <thead>
              <tr>
                <th> Počet obedov</th>
                <th> Cena jedného obedu</th>
                <th> Doprava</th>
                <th> Súčet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{lunches}</td>
                <td>{lunchPrice}</td>
                <td>{prices.transport}</td>
                <td>{lunches * parseInt(lunchPrice, 10) + parseInt(prices.transport, 10)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
  currentBoarderId: state.currentBoarderId,
  prices: state.prices,
}))(MesacnyPrehladStravnik)
