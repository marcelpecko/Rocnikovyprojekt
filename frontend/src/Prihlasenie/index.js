import React from 'react'
import {Button, Form, FormGroup, ButtonGroup, Label, Input} from 'reactstrap'
import Pozadie from '../obrazky/pozadie.jpg'
import {loginUser} from './actions'
import {connect} from 'react-redux'
import './Prihlasenie.css'

class Prihlasovanie extends React.Component {
  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <Form className="mojForm" style={{position: 'relative'}}>
          <div className="prihlasenie">
            {' '}
            <h3>Prihlasovanie </h3>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">
                Email
              </Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="heslo" className="mr-sm-2">
                Heslo
              </Label>
              <Input type="password" name="password" id="heslo" placeholder="Heslo" />
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
  null,
  {loginUser}
)(Prihlasovanie)
