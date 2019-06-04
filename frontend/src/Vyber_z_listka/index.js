import React from 'react'
import {Button, Label, Input, Table, ButtonGroup} from 'reactstrap'
import './Vyber_z_listka.css'
import Pozadie from '../obrazky/pozadie.jpg'
import {connect} from 'react-redux'
import {saveMenuChoices} from './actions'

const DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok']

class VyberZListka extends React.Component {
  state = {chosenOptions: [null, null, null, null, null]}

  updateCheckbox = (ind, val) => () => {
    this.setState((state) => ({
      chosenOptions: state.chosenOptions.map((op, i) => (i === ind ? val : op)),
    }))
  }

  render() {
    if (this.props.menu.length === 0) return 'Nie je zverejnené menu na aktuálny týždeň!'
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <div className="tabulkaJedlo">
          <div className="dieta">
            <h3> Stravník: </h3>
          </div>
          <Table>
            <thead>
              <tr>
                <th className="tabulkadni">Týždeň:</th>
                <th> {this.props.week}</th>
                <th />
                <th>Odhlasujem</th>
              </tr>
            </thead>
            <tbody>
              {DAYS.map((day, ind) => (
                <tr key={day}>
                  <th className="tabulkadni" scope="row">
                    {day}
                  </th>
                  <td>
                    <Label onClick={this.updateCheckbox(ind, 1)}>
                      <Input
                        type="radio"
                        name={`radio${ind}`}
                        checked={this.state.chosenOptions[ind] === 1}
                      />
                      {this.props.menu[ind][0]}
                    </Label>
                  </td>
                  <td>
                    <Label onClick={this.updateCheckbox(ind, 2)}>
                      <Input
                        type="radio"
                        name={`radio${ind}`}
                        checked={this.state.chosenOptions[ind] === 2}
                      />
                      {this.props.menu[ind][1]}
                    </Label>
                  </td>
                  <td>
                    <Label onClick={this.updateCheckbox(ind, 0)}>
                      <Input
                        type="radio"
                        name={`radio${ind}`}
                        checked={this.state.chosenOptions[ind] === 0}
                      />
                      Odhlasujem
                    </Label>
                  </td>
                </tr>
              ))}
            </tbody>{' '}
          </Table>
          <ButtonGroup className="vyberzlistkabuttony">
            <Button
              color="success"
              onClick={() => this.props.saveMenuChoices(this.state.chosenOptions)}
            >
              Uložiť
            </Button>
            <Button
              color="primary"
              onClick={() => {
                this.setState({chosenOptions: [0, 0, 0, 0, 0]})
              }}
            >
              Odhlasit na celý týždeň
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({menu: state.menu}),
  {saveMenuChoices}
)(VyberZListka)
