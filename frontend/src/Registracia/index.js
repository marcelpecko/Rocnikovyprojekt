import React from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import Pozadie from '../obrazky/pozadie.jpg'
import {withRouter} from 'react-router-dom'
import './Registracia.css'

class Registracia extends React.Component {
  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <Form className="mojForm" style={{position: 'relative'}}>
          <div className="toggle">
            <div className="toggle-header">
              <h3> Registrácia </h3>
              <div className="toggle-registracia">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="registracia_meno" className="mr-sm-2">
                    Meno
                  </Label>
                  <Input type="text" name="email" id="registracia_meno" placeholder="Meno" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="registracia_priezvisko" className="mr-sm-2">
                    Priezvisko
                  </Label>
                  <Input
                    type="text"
                    name="email"
                    id="registracia_priezvisko"
                    placeholder="Priezvisko"
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="email" className="mr-sm-2">
                    Email
                  </Label>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="heslo_registracia" className="mr-sm-2">
                    Heslo
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="heslo_registracia"
                    placeholder="Heslo"
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="heslo_registracia_znovu" className="mr-sm-2">
                    Zopakuj heslo
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="heslo_registracia_znova"
                    placeholder="Heslo"
                  />
                </FormGroup>
                <Button color="primary" onClick={this.fileUploadHandler}>
                  Registrovať
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

export default Registracia
