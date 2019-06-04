import React from 'react'
import {Button, Label, Input, Table, ButtonGroup} from 'reactstrap'
import './Vyber_z_listka.css'
import Pozadie from '../obrazky/pozadie.jpg'
import {connect} from 'react-redux'

const DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok']

class VyberZListka extends React.Component {
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
                <th> {this.props.menu[5][0]}</th>
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
                    <Label check>
                      <Input type="radio" name={`radio${ind}`} />
                      {this.props.menu[ind][0]}
                    </Label>
                  </td>
                  <td>
                    <Label check>
                      <Input type="radio" name={`radio${ind}`} />
                      {this.props.menu[ind][1]}
                    </Label>
                  </td>
                  <td>
                    <Label check>
                      <Input type="radio" name={`radio${ind}`} />
                      Odhlasujem
                    </Label>
                  </td>
                </tr>
              ))}
            </tbody>{' '}
          </Table>
          <ButtonGroup className="vyberzlistkabuttony">
            <Button color="success">Uložiť</Button>
            <Button color="primary">Odhlasit na celý týždeň</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({menu: state.menu}))(VyberZListka)
