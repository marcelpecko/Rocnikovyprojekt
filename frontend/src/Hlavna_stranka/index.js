import React from 'react'
import {Button, Badge, Label, ButtonGroup, FormGroup} from 'reactstrap'
import UserIcon from 'react-icons/lib/fa/user'
import {connect} from 'react-redux'
import Stravnici from './Stravnici'
import {getApi} from '../Api'
import {loadBoarders as _loadBoarders, updateValue} from '../sharedActions'
import './Hlavna_stranka.css'

class HlavnaStranka extends React.Component {
  async componentDidMount() {
    const {user, updateValue, loadBoarders} = this.props

    if (user) loadBoarders(user)
    updateValue(['notice'], await getApi().getNotice(), 'Set notice value')
  }

  render() {
    const {notice} = this.props

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
              <Label for="surname">
                Priezvisko: <span className="userInfo">{surname}</span>
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="email">
                Email: <span className="userInfo">{email}</span>
              </Label>
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
          <h4>Moji stravníci: </h4>
          <Stravnici history={this.props.history} />
        </div>
        <div className="upozornenia-tabulka">
          <div className="upozornenia">
            <h2>
              Upozornenia: <Badge color="danger">New</Badge>
            </h2>
            <div className="upozornenia-text">{notice}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    user: state.user,
    notice: state.notice,
  }),
  {loadBoarders: _loadBoarders, updateValue}
)(HlavnaStranka)
