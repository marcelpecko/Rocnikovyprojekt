import React from 'react'
import {Button, Label, Input, Table} from 'reactstrap'
import './Objednany_obed_stravnik.css'
import Pozadie from '../obrazky/pozadie.jpg'
import {getApi} from '../Api'
import {connect} from 'react-redux'
import {keyBy} from 'lodash'

const DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok']

class ObjednanyObed extends React.Component {
  state = {chosenOptions: [null, null, null, null, null], oldMenu: undefined}

  async componentDidMount() {
    const {currentBoarderId, boarders} = this.props

    if (!boarders || !currentBoarderId) return

    const oldMenu = await getApi().getOldMenu()
    const menus = await getApi().getMenuChoices()
    const chosenOptions = menus.find(
      (menu) => menu.week === oldMenu.week && menu.boarder_id === currentBoarderId
    ).choices

    // eslint-disable-next-line
    this.setState({chosenOptions, oldMenu})
  }

  render() {
    const {boarders, currentBoarderId} = this.props

    if (!boarders || !currentBoarderId) {
      this.props.history.push('/hlavna')
      return null
    }

    if (!this.state.oldMenu) return null

    const boarder = keyBy(boarders, 'id')[currentBoarderId]
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <div className="ObjednaneMenuStravnik">
          <div className="dieta">
            <h3> Stravník: {`${boarder.name} ${boarder.surname}`}</h3>
          </div>
          <Table>
            <thead>
              <tr>
                <th className="TabulkaDniObjednaneMenu">Týždeň:</th>
                <th> {this.state.oldMenu.week}</th>
                <th />
                <th>Odhlasujem</th>
              </tr>
            </thead>
            <tbody>
              {DAYS.map((day, ind) => (
                <tr key={day}>
                  <th className="TabulkaDniObjednaneMenu" scope="row">
                    {day}
                  </th>
                  <td>
                    <Label>
                      <Input
                        type="radio"
                        disabled
                        name={`radio${ind}`}
                        checked={this.state.chosenOptions[ind] === '1'}
                      />
                      {this.state.oldMenu.menu[ind][0]}
                    </Label>
                  </td>
                  <td>
                    <Label>
                      <Input
                        type="radio"
                        disabled
                        name={`radio${ind}`}
                        checked={this.state.chosenOptions[ind] === '2'}
                      />
                      {this.state.oldMenu.menu[ind][1]}
                    </Label>
                  </td>
                  <td>
                    <Label>
                      <Input
                        type="radio"
                        disabled
                        name={`radio${ind}`}
                        checked={this.state.chosenOptions[ind] === '0'}
                      />
                      Odhlasujem
                    </Label>
                  </td>
                </tr>
              ))}
            </tbody>{' '}
          </Table>
          <Button
            color="success"
            onClick={() => {
              this.props.history.push('hlavna')
            }}
          >
            Späť na hlavnú stránku
          </Button>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
  currentBoarderId: state.currentBoarderId,
}))(ObjednanyObed)
