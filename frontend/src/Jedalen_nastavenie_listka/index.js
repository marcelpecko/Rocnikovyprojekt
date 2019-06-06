import React from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import './Jedalen_nastavenie_listka.css'
import Pozadie from '../obrazky/pozadie.jpg'
import {setMenu} from './actions'
import {updateValue} from '../sharedActions'
import {connect} from 'react-redux'

class NastavenieListka extends React.Component {
  state = {area: ''}

  updateMenu = () => {
    const menu = []
    let input = this.state.area
    for (let i = 0; i < 5; i++) {
      const inds = [input.indexOf('I.'), input.indexOf('II.'), input.indexOf('Desiata')]
      menu.push([input.substring(inds[0], inds[1]), input.substring(inds[1], inds[2])])
      input = input.substr(inds[2] + 1)
    }

    input = this.state.area
    const inds2 = [input.indexOf('od'), input.indexOf('Pondelok')]
    const week = input.substring(inds2[0], inds2[1])
    this.props.updateValue(['week'], week, 'Set week in state')

    this.props.setMenu(menu, week)

    this.props.history.push('/zobrazenie')
  }

  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <div
          className="jedalennastavenielsitkahlavna"
          value={this.state.area}
          onChange={(e) => this.setState({area: e.target.value})}
        >
          <h3> Aktuálne nahratý týždeň {this.props.week}</h3>
          <textarea className="jedalennastavenielistkaarea" />
          <ButtonGroup className="buttonyjedalenlistok">
            <Button color="success" onClick={this.updateMenu}>
              Aktualizovať jedálny lístok
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

export default connect(
  (state) => ({week: state.week}),
  {setMenu, updateValue}
)(NastavenieListka)
