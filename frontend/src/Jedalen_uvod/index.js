import React from 'react'
import {
  Button,
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
import {updateValue} from '../sharedActions'
import {getApi} from '../Api'
import './Jedalen_uvod.css'

const DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok']

class Jedalen extends React.Component {
  state = {
    modal: false,
    menus: [],
  }

  toggle = async () => {
    const menus = await getApi().getMenuChoices()
    this.setState((prevState) => ({
      modal: !prevState.modal,
      menus,
    }))

    console.log(this.state)
  }

  async componentDidMount() {
    this.props.updateValue(['notice'], await getApi().getNotice(), 'Set notice value')
  }

  render() {
    const {notice, updateValue, week} = this.props
    if (notice === undefined) return null

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="jedalennasledtyzdenokno" toggle={this.toggle}>
            Počet objedávok na týždeň <br /> {week}
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
                    <td>
                      {
                        this.state.menus.filter(
                          (menu) => menu.week === week && menu.choices[ind] === '1'
                        ).length
                      }
                    </td>
                    <td>
                      {
                        this.state.menus.filter(
                          (menu) => menu.week === week && menu.choices[ind] === '2'
                        ).length
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ModalFooter>
        </Modal>
        <ListGroup className="bb">
          <ListGroupItem className="navigationitem" onClick={this.toggle}>
            Počet objednávok na nasledujúci týždeň
          </ListGroupItem>
          <ListGroupItem
            className="navigationitem"
            onClick={() => this.props.history.push('/nastavenie_listka')}
          >
            Nastavenie jedálneho lístka
          </ListGroupItem>
          <ListGroupItem
            className="navigationitem"
            onClick={() => this.props.history.push('/ceny')}
          >
            Nastavenie cien
          </ListGroupItem>
          <ListGroupItem
            className="navigationitem"
            onClick={() => this.props.history.push('/mesacny_prehlad_jedalen')}
          >
            Zobraziť objednávky
          </ListGroupItem>
          <ListGroupItem
            className="navigationitem"
            onClick={() => this.props.history.push('/mazanie_pouzivatelov')}
          >
            Mazanie používateľov
          </ListGroupItem>
          <ListGroupItem
            className="navigationitem"
            onClick={() => this.props.history.push('/mazanie_stravnikov')}
          >
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
              value={notice}
              onChange={(e) => {
                updateValue(['notice'], e.target.value, 'Set notice value')
              }}
            />
          </div>
          <Button
            className="jedalenbtnupozornenia"
            color="success"
            onClick={() => getApi().saveNotice(notice)}
          >
            Uložiť upozornenia
          </Button>
        </div>
        <img src={Poz} className="jedalenpozadie" alt="pozadie" />
      </div>
    )
  }
}

export default connect(
  (state) => ({notice: state.notice, week: state.week}),
  {updateValue}
)(Jedalen)
