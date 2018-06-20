import React from 'react'
import {Button, Form, FormGroup, Label, Input, Table, ImageUploader, ButtonGroup} from 'reactstrap'
import './Vyber_z_listka.css'
import Pozadie from '../obrazky/pozadie.jpg'

export default class Prihlasovanie extends React.Component {
  render() {
    return (
      <div>
        <img src={Pozadie} className="pozadie" />
        <div className="tabulkaJedlo">
          <div className="dieta">
            <h3> Stravník: Marcel Pecko </h3>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Týždeň:</th>
                <th />
                <th />
                <th>Odhlasujem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Pondelok</th>
                <td>
                  <Label check>
                    <Input type="radio" name="radio1" /> Pizza
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio1" /> Mexice soté
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio1" /> Odhlasujem
                  </Label>
                </td>
              </tr>
              <tr>
                <th scope="row">Utorok</th>
                <td>
                  <Label check>
                    <Input type="radio" name="radio2" /> Špagety
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio2" /> Vyprážaný syr
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio2" /> Odhlasujem
                  </Label>
                </td>
              </tr>
              <tr>
                <th scope="row">Streda</th>
                <td>
                  <Label check>
                    <Input type="radio" name="radio3" /> Tortila
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio3" /> Mexice soté
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio3" /> Odhlasujem
                  </Label>
                </td>
              </tr>
              <tr>
                <th scope="row">Štvrtok</th>
                <td>
                  <Label check>
                    <Input type="radio" name="radio4" /> Karfiól
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio4" /> Pizza
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio4" /> Odhlasujem
                  </Label>
                </td>
              </tr>
              <tr>
                <th scope="row">Piatok</th>
                <td>
                  <Label check>
                    <Input type="radio" name="radio5" /> Šalát
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio5" /> Cestoviny
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio5" /> Odhlasujem
                  </Label>
                </td>
              </tr>
            </tbody>
          </Table>
          <ButtonGroup className="dvabuttony">
            <Button color="success">Uložiť</Button>
            <Button color="primary">Odhlasit na celý týždeň</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}
