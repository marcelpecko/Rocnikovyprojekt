import React from 'react'
import {Button, Label, Input, Table, ButtonGroup} from 'reactstrap'
import './zobrazenie.css'
import Pozadie from '../../obrazky/pozadie.jpg'
import {connect} from 'react-redux'

const DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok']

class Zobrazenie extends React.Component {
  render() {
    if (this.props.menu.length === 0) return 'Nie je zverejnené menu na aktuálny týždeň!'
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <div className="jtabulkaJedlo">
          <Table>
            <thead className="jvrch">
              <tr>
                <th className="jtabulkadni">Týždeň: {this.props.week}</th>
                <th> {this.props.week}</th>
                <th />
                <th>Odhlasujem</th>
              </tr>
            </thead>
            <tbody>
              {DAYS.map((day, ind) => (
                <tr key={day}>
                  <th className="jtabulkadni" scope="row">
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
          <ButtonGroup className="jvyberzlistkabuttony">
            <Button color="success" onClick={() => this.props.history.push('/nastavenie_listka')}>
              Nahrať iný jedálny lístok
            </Button>
            <Button color="primary" onClick={() => this.props.history.push('/jedalen')}>
              Späť na hlavnú stránku
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({menu: state.menu, week: state.week}))(Zobrazenie)
