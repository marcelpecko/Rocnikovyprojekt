import React from 'react'
import {Table, Button, Form, Input} from 'reactstrap'
import Pozadie from '../obrazky/pozadie.jpg'
import './Jedalen_nastavenie_cien.css'
import {getApi} from '../Api'

class JedalenNastavenieCien extends React.Component {
  state = {
    prices: {
      normal: '',
      glutenFree: '',
      lactoseFree: '',
      sugarFree: '',
      transport: '',
    },
  }

  render() {
    const {prices} = this.state

    return (
      <div>
        <img src={Pozadie} className="pozadie" alt="pozadie" />
        <Form className="jedalenformularceny" style={{position: 'relative'}}>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Typ diéty</th>
                  <th>Cena jedného obedu v €</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Žiadna</td>
                  <td>
                    <Input
                      value={prices.normal}
                      type="number"
                      className="inputpolozkycien"
                      placeholder="Cena bežnej diéty"
                      onChange={(e) =>
                        this.setState({
                          prices: {...this.state.prices, normal: e.target.value},
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Bezlepková</td>
                  <td>
                    <Input
                      value={prices.glutenFree}
                      type="number"
                      className="inputpolozkycien"
                      placeholder="Cena bezlepkovej diéty"
                      onChange={(e) =>
                        this.setState({
                          prices: {...this.state.prices, glutenFree: e.target.value},
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Bezlaktózová</td>
                  <td>
                    <Input
                      value={prices.lactoseFree}
                      type="number"
                      className="inputpolozkycien"
                      placeholder="Cena bezlaktózovej diéty"
                      onChange={(e) =>
                        this.setState({
                          prices: {...this.state.prices, lactoseFree: e.target.value},
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Diabetická</td>
                  <td>
                    <Input
                      value={prices.sugarFree}
                      type="number"
                      className="inputpolozkycien"
                      placeholder="Cena diabetickej diéty"
                      onChange={(e) =>
                        this.setState({
                          prices: {...this.state.prices, sugarFree: e.target.value},
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Ďalšie služby</th>
                  <th>Cena služby v €</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Doprava</td>
                  <td>
                    <Input
                      value={prices.transport}
                      type="number"
                      className="inputpolozkycien"
                      placeholder="Cena dopravy"
                      onChange={(e) =>
                        this.setState({
                          prices: {...this.state.prices, transport: e.target.value},
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              color="success"
              onClick={() => {
                getApi().savePrices(this.state.prices)
                this.props.history.push('/jedalen')
              }}
            >
              Uložiť
            </Button>
            <Button
              className="btnjedalenceny"
              color="primary"
              onClick={() => {
                this.props.history.push('jedalen')
              }}
              s
            >
              Späť na hlavné menu
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default JedalenNastavenieCien
