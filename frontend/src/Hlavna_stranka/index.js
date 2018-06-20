import React from 'react'
import {Button, Badge, Label, ButtonGroup, FormGroup} from 'reactstrap'
import UserIcon from 'react-icons/lib/fa/user'
import {connect} from 'react-redux'
import Stravnici from './Stravnici'
import './Hlavna_stranka.css'

class HlavnaStranka extends React.Component {
  render() {
    if (!this.props.user) {
      this.props.history.push('/')
      return null
    }
    const {name, surname, email} = this.props.user
    return (
      <div className="flex">
        <div className="zaklad">
          <UserIcon className="pouzivatelfotka" />
          <div className="zaklad-pouzivatel">
            <FormGroup>
              <Label for="name">
                Meno: <span className="userInfo">{name}</span>
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="surname">Priezvisko: {surname}</Label>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email: {email}</Label>
            </FormGroup>
          </div>
          <ButtonGroup>
            <Button
              color="info"
              className="nastav"
              onClick={() => {
                this.props.history.push('pouzivatel')
              }}
            >
              Nastav profil
            </Button>

            <Button
              color="warning"
              onClick={() => {
                this.props.history.push('stravnik')
              }}
            >
              +
            </Button>
          </ButtonGroup>
          <br />
          <br />
          <h5>Moji stravníci: </h5>
          <Stravnici />
        </div>
        <div className="upozornenia-tabulka">
          <div className="upozornenia">
            <h2>
              Upozornenia: <Badge color="danger">New</Badge>
            </h2>
            <div className="upozornenia-text">
              <br />
              Nový jedálny lístok je už zverejnený
              <br /> Jedáleň bude dňa 19.4.2017 zatvorená z dôvodu riaditeľského volna.
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  user: state.user,
}))(HlavnaStranka)
