import React from 'react'
import {
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  Badge,
  Table,
  ModalFooter,
} from 'reactstrap'
import Poz from '../obrazky/pozadie.jpg'
import {connect} from 'react-redux'
import './Jedalen_uvod.css'

const DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok']

class Jedalen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    return (
      <div className="aa">
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="skuska" toggle={this.toggle}>
            Počet objedávok na týždeň
          </ModalHeader>
          <ModalFooter>
            <Table>
              <thead>
                <tr>
                  <th>Dni</th>
                  <th>Počet menu I.</th>
                  <th>Počet menu II.</th>
                </tr>
              </thead>
              <tbody>
                {DAYS.map((day, ind) => (
                  <tr key={day}>
                    <th className="tabulkadni" scope="row">
                      {day}
                    </th>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ModalFooter>
        </Modal>
        <ListGroup className="bb">
          <ListGroupItem tag="a" href="#" onClick={this.toggle}>
            Počet objednávok na nasledujúci týždeň
          </ListGroupItem>
          <ListGroupItem tag="a" href="nastavenie_listka">
            Nastavenie jedálneho lístka
          </ListGroupItem>
          <ListGroupItem tag="a" href="mesacny_prehlad_jedalen">
            Zobraziť objednávky
          </ListGroupItem>
          <ListGroupItem tag="a" href="mazanie_pouzivatelov">
            Mazanie používateľov
          </ListGroupItem>
          <ListGroupItem tag="a" href="mazanie_stravnikov">
            Mazanie stravníkov
          </ListGroupItem>
        </ListGroup>
        <div className="cc">
          <h2>
            Upozornenia: <Badge color="danger">New</Badge>
          </h2>
          <div className="jedalenupozornenia">
            <textarea
              className="jedalentextarea"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <ButtonGroup className="buttons">
            <Button
              color="success"
              onClick={() => {
                this.changeEditMode()
              }}
            >
              Uložiť zmeny
            </Button>
            <Button
              color="primary"
              onClick={() => {
                this.updateComponentValue()
              }}
            >
              Zanechať pôvodný text
            </Button>
          </ButtonGroup>
        </div>
        <img src={Poz} className="jedalenpozadie" alt="pozadie" />
      </div>
    )
  }
}

export default connect()(Jedalen)
