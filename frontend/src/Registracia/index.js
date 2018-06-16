import React from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import Pozadie from '../obrazky/pozadie.jpg'
import {connect} from 'react-redux'
import {updateValue} from '../actions'
import './Registracia.css'

class Registracia extends React.Component {
  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <Form
          className="mojForm"
          style={{position: 'relative'}}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="toggle">
            <div className="toggle-header">
              <h3> Registrácia </h3>
              <div className="toggle-registracia">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="registracia_meno" className="mr-sm-2">
                    Meno
                  </Label>
                  <Input
                    type="text"
                    id="registracia_meno"
                    placeholder="Meno"
                    value={this.props.name}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'name'],
                        event.target.value,
                        'Change name'
                      )
                    }
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="registracia_priezvisko" className="mr-sm-2">
                    Priezvisko
                  </Label>
                  <Input
                    type="text"
                    id="registracia_priezvisko"
                    placeholder="Priezvisko"
                    value={this.props.surname}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'surname'],
                        event.target.value,
                        'Change surname'
                      )
                    }
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="email" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={this.props.email}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'email'],
                        event.target.value,
                        'Change email'
                      )
                    }
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="heslo_registracia" className="mr-sm-2">
                    Heslo
                  </Label>
                  <Input
                    type="password"
                    id="heslo_registracia"
                    placeholder="Heslo"
                    value={this.props.password}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'password'],
                        event.target.value,
                        'Change password'
                      )
                    }
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label className="mr-sm-2">Zopakuj heslo</Label>
                  <Input
                    type="password"
                    placeholder="Heslo"
                    value={this.props.passwordRepeat}
                    onChange={(event) =>
                      this.props.updateValue(
                        ['register', 'passwordRepeat'],
                        event.target.value,
                        'Change password repeat'
                      )
                    }
                  />
                </FormGroup>
                <Button color="primary">Registrovať</Button>
              </div>
            </div>
          </div>
        </Form>
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
  {updateValue}
)(Registracia)
