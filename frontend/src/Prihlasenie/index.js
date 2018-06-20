import React from 'react'
import {Button, Form, FormGroup, ButtonGroup, Label, Input} from 'reactstrap'
import Pozadie from '../obrazky/pozadie.jpg'
import {loginUser} from './actions'
import {connect} from 'react-redux'
import {updateValue} from '../sharedActions'
import './Prihlasenie.css'

class Prihlasovanie extends React.Component {
  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" alt="pozadie" />
        <Form className="mojForm" style={{position: 'relative'}}>
          <div className="prihlasenie">
            {' '}
            <h3>Prihlasovanie </h3>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">
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
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="heslo" className="mr-sm-2">
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
