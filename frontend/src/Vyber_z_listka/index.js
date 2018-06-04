import React from 'react'
import {Button, Form, FormGroup, Label, Input, Table, ImageUploader} from 'reactstrap'

export default class Prihlasovanie extends React.Component {
  render() {
    return (
      <div>
        <div className="dieta">
          <h3> Stravník: </h3>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Týždeň</th>
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
                  <Input type="radio" name="radio2" /> Pizza
                </Label>
              </td>
              <td>
                <Label check>
                  <Input type="radio" name="radio2" /> Mexice soté
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
                  <Input type="radio" name="radio3" /> Pizza
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
                  <Input type="radio" name="radio4" /> Pizza
                </Label>
              </td>
              <td>
                <Label check>
                  <Input type="radio" name="radio4" /> Mexice soté
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
                  <Input type="radio" name="radio5" /> Pizza
                </Label>
              </td>
              <td>
                <Label check>
                  <Input type="radio" name="radio5" /> Mexice soté
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
        <Button>Uložiť</Button> <Button>Odhlasit na celý týždeň</Button>
      </div>
    )
  }
}
