import React from 'react'
import {Button, Form, FormGroup, ButtonGroup, Label, Input} from 'reactstrap'
import Pozadie from '../obrazky/pozadie.jpg'
import {loginUser} from './actions'
import {connect} from 'react-redux'
import {updateValue} from '../sharedActions'
import {nonEmptyField} from './validations'
import './Prihlasenie.css'

class Prihlasovanie extends React.Component {
  loginOnEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.loginUser()
    }
  }

  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" alt="pozadie" />
        <Form className="mojForm" style={{position: 'relative'}}>
          <div className="prihlasenie">
            {' '}
            <h3>
              <span className="chara1">P</span>
              <span className="chara2">r</span>
              <span className="chara3">i</span>
              <span className="chara4">h</span>
              <span className="chara5">l</span>
              <span className="chara6">á</span>
              <span className="chara7">s</span>
              <span className="chara8">e</span>
              <span className="chara9">n</span>
              <span className="chara10">i</span>
              <span className="chara11">e</span>
            </h3>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="prihlasenielabel">
                Email
              </Label>
              <Input
                type="email"
                value={this.props.email}
                onChange={(event) =>
                  this.props.updateValue(
                    ['login', 'email'],
                    event.target.value,
                    'Change login email'
                  )
                }
                placeholder="Email"
                onKeyDown={this.loginOnEnter}
                validate={nonEmptyField}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="heslo" className="prihlasenielabel">
                Heslo
              </Label>
              <Input
                type="password"
                value={this.props.password}
                onChange={(event) =>
                  this.props.updateValue(
                    ['login', 'password'],
                    event.target.value,
                    'Change login password'
                  )
                }
                placeholder="Heslo"
                onKeyDown={this.loginOnEnter}
              />
            </FormGroup>
            <ButtonGroup>
              <Button color="success" onClick={this.props.loginUser}>
                Prihlásiť
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  this.props.history.push('registracia')
                }}
              >
                Registrovať
              </Button>
            </ButtonGroup>
          </div>
        </Form>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    email: state.login.email,
    password: state.login.password,
  }),
  {loginUser, updateValue}
)(Prihlasovanie)
