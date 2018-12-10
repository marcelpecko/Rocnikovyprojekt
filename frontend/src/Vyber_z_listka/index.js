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
                <th> od 12.11.2018 do 16.11.2018</th>
                <th />
                <th>Odhlasujem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Pondelok</th>
                <td>
                  <Label check>
                    <Input type="radio" name="radio1" /> 60g/70g Gurmánske kuracie kúsky , 100g/120g
                    ryža (1)
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio1" /> 190g/210g Bryndzové halušky (1,3,7)
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
                    <Input type="radio" name="radio2" /> 180g/210g Bravčové mexické rizoto, syr
                    ,kyslá uhorka (1,3)
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio2" /> 190g/210g Šošovicový prívarok ,vajíčko na
                    tvrdo, chlieb (1,7)
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
                    <Input type="radio" name="radio3" /> 60g/70g Hovädzie rezance na španielsky
                    spôsob, 200g tarhoňa (1,7)
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio3" /> 200g/220g Domáce palacinky s marmeládou
                    a grankom, šľahačka (1,3,7)
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
                    <Input type="radio" name="radio4" /> 80g/90g Szegedínsky guláš ,160g varená
                    knedľa (1,7)
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio4" /> 180g/200g Quessadila meditarián,(kukuričná
                    placka plnená gril.zeleninou a fetou ) (1,3,7)
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
                    <Input type="radio" name="radio5" /> 60g/70g Pečená špikovaná krkovička ,,200g
                    zemiaková kaša, kys.obloha (1,7)
                  </Label>
                </td>
                <td>
                  <Label check>
                    <Input type="radio" name="radio5" /> 170g/200g Špagety so syrovou omáčkou (1,7)
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
