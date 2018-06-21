import React from 'react'
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'
import {connect} from 'react-redux'
import Pozadie from '../obrazky/pozadie.jpg'
import {updateValue} from '../sharedActions'
import {addBoarder} from './actions'
import './Nastavenie_profilu_stravnik.css'

class ProfilStravnik extends React.Component {
  render() {
    const {name, surname, diet} = this.props.boarder
    return (
      <div className="nastavenieInformaciiStravnik">
        <Form>
          <h3>Osobné údaje </h3>
          <FormGroup row>
            <Label for="name" sm={2}>
              Meno:
            </Label>
            <Col sm={3}>
              <Input
                type="name"
                value={name}
                onChange={(event) =>
                  this.props.updateValue(
                    ['boarder', 'name'],
                    event.target.value,
                    'Change boarder name'
                  )
                }
                placeholder="Meno"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Priezvisko:
            </Label>
            <Col sm={3}>
              <Input
                type="surname"
                value={surname}
                onChange={(event) =>
                  this.props.updateValue(
                    ['boarder', 'surname'],
                    event.target.value,
                    'Change boarder surname'
                  )
                }
                placeholder="Priezvisko"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="text" sm={2}>
              Diéta:
            </Label>
            <Col sm={3}>
              <Input
                type="text"
                value={diet}
                onChange={(event) =>
                  this.props.updateValue(
                    ['boarder', 'diet'],
                    event.target.value,
                    'Change boarder diet'
                  )
                }
                placeholder="Diéta"
              />
            </Col>
          </FormGroup>
          <Button
            color="success"
            onClick={(e) => {
              this.props.addBoarder()
              this.props.history.push('hlavna')
            }}
          >
            Uložiť
          </Button>
          <Button color="danger" onClick={(e) => this.props.history.push('hlavna')}>
            Zrušiť
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect(
  (state) => ({boarder: state.boarder}),
  {updateValue, addBoarder}
)(ProfilStravnik)
