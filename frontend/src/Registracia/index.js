import React from 'react'
import {Button, Form, FormGroup, Label, Input, ButtonGroup} from 'reactstrap'
import Pozadie from '../obrazky/pozadie.jpg'
import {connect} from 'react-redux'
import {updateValue} from '../sharedActions'
import {registerUser} from './actions'
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {nonEmptyField, passwordValidation} from './validations'
import './Registracia.css'

class Registracia extends React.Component {
  render() {
    const passwordName = 'password'
    const passwordRepeatName = 'passwordRepeat'
    return (
      <div>
        <img src={Pozadie} className="pozadie" />

        <AvForm
          className="mojForm"
          style={{position: 'relative'}}
          onValidSubmit={(e) => {
            this.props.registerUser()
            this.props.history.push('hlavna')
          }}
        >
          <div className="toggle">
            <div className="toggle-header">
              <h4> Registrácia </h4>
              <div className="toggle-registracia">
                <FormGroup>
                  <Label for="registracia_meno" className="mr-sm-2">
                    Meno
                  </Label>
                  <AvField
                    type="text"
                    name="registracia_meno"
                    placeholder="Meno"
                    value={this.props.name}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'name'],
                        event.target.value,
                        'Change name'
                      )
                    }
                    validate={nonEmptyField}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="registracia_priezvisko" className="mr-sm-2">
                    Priezvisko
                  </Label>
                  <AvField
                    type="text"
                    name="registracia_priezvisko"
                    placeholder="Priezvisko"
                    value={this.props.surname}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'surname'],
                        event.target.value,
                        'Change surname'
                      )
                    }
                    validate={nonEmptyField}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email" className="mr-sm-2">
                    Email
                  </Label>
                  <AvField
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.props.email}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'email'],
                        event.target.value,
                        'Change email'
                      )
                    }
                    validate={{email: true}}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="heslo_registracia" className="mr-sm-2">
                    Heslo
                  </Label>
                  <AvField
                    type="password"
                    name={passwordName}
                    placeholder="Heslo"
                    value={this.props.password}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'password'],
                        event.target.value,
                        'Change password'
                      )
                    }
                    validate={passwordValidation}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="mr-sm-2">Zopakuj heslo</Label>
                  <AvField
                    type="password"
                    name={passwordRepeatName}
                    placeholder="Zopakuj heslo"
                    value={this.props.passwordRepeat}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'passwordRepeat'],
                        event.target.value,
                        'Change password repeat'
                      )
                    }
                    validate={{
                      ...passwordValidation,
                      match: {value: passwordName, errorMessage: 'Heslá sa nezhodujú!!'},
                    }}
                  />
                </FormGroup>
                <ButtonGroup className="btnreg">
                  <Button color="primary">Registrovať</Button>
                  <Button
                    color="warning"
                    onClick={() => {
                      this.props.history.push('hlavna')
                    }}
                  >
                    Späť
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </AvForm>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      name: state.register.name,
      surname: state.register.surname,
      email: state.register.email,
      password: state.register.password,
      passwordrepeat: state.register.passwordrepeat,
    }
  },
  {updateValue, registerUser}
)(Registracia)
