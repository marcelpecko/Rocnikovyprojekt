import React from 'react'
import {Button, Badge, Label, Col, ButtonGroup} from 'reactstrap'
import UserIcon from 'react-icons/lib/fa/user'
import './Hlavna_stranka.css'

export default class Prihlasovanie extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="zaklad">
          <UserIcon className="pouzivatelfotka" />
          <div className="zaklad-pouzivatel">
            {/**
            <group row>
              <Label for="name" sm={2}>
                Meno:
              </Label>
              <Col sm={3}>
                <Label for="name">Marcel Pecko</Label>
              </Col>
            </group>
            <group row>
              <Label for="mail" sm={2}>
                Mail:
              </Label>
              <Col sm={3}>
                <Label for="mail">marcelpecko97@gmail.com</Label>
              </Col>
            </group>
            <group row>
              <Label for="tel" sm={2}>
                Telefon:
              </Label>
              <Col sm={3}>
                <Label for="tel">0908805510</Label>
              </Col>
            </group>
            */}
          </div>
          <ButtonGroup>
            <Button
              color="info"
              className="nastav"
              onClick={() => {
                this.props.history.push('pouzivatel')
              }}
            >
              Nastav profil
            </Button>

            <Button
              color="warning"
              onClick={() => {
                this.props.history.push('stravnik')
              }}
            >
              +
            </Button>
          </ButtonGroup>
          <br />
          <br />
          <h5>Moji stravníci: </h5>
          <div className="zaklad-stravnici">
            <br />{' '}
            <Button
              onClick={() => {
                this.props.history.push('vyber')
              }}
            >
              Pridaj stravníka
            </Button>
          </div>
        </div>
        <div className="upozornenia-tabulka">
          <div className="upozornenia">
            <h2>
              Upozornenia: <Badge color="danger">New</Badge>
            </h2>
            <div classsName="upozornenia-text">
              <br />
              Nový jedálny lístok je už zverejnený
              <br /> Jedáleň bude dňa 19.4.2017 zatvorená z dôvodu riaditeľského volna.
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
