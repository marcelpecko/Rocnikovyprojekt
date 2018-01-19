import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Pozadie from './Obrazky/fantasy_plate-wallpaper-1920x1080.jpg'

export default class Prihlasovanie extends React.Component {
  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <Form className="mojForm" style={{ position: 'relative' }}>
          <div id="prihlasenie">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="heslo" className="mr-sm-2">Heslo</Label>
              <Input type="password" name="password" id="heslo" placeholder="Heslo" />
            </FormGroup>
            <Button>Prihlásiť</Button>
          </div>
          <div id="registracia">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="registracia_meno" className="mr-sm-2">Meno</Label>
              <Input type="text" name="email" id="registracia_meno" placeholder="Meno" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="registracia_priezvisko" className="mr-sm-2">Priezvisko</Label>
              <Input type="text" name="email" id="registracia_priezvisko" placeholder="Priezvisko" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="heslo_registracia" className="mr-sm-2">Heslo</Label>
              <Input type="password" name="password" id="heslo_registracia" placeholder="Heslo" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="heslo_registracia_znovu" className="mr-sm-2">Zopakuj heslo</Label>
              <Input type="password" name="password" id="heslo_registracia_znova" placeholder="Heslo" />
            </FormGroup>
          </div>
        </Form>
      </div>
    )
  }
}
