import React from 'react'
import {Table} from 'reactstrap'
import {getApi} from '../Api'
import Delete from '../obrazky/delete.png'
import './Jedalen_mazanie_stravnikov.css'

class MazanieStravnikov extends React.Component {
  state = {boarders: []}

  async fetchBoarders() {
    const boarders = await getApi().getAllBoarders()
    this.setState({boarders})
  }

  componentDidMount() {
    this.fetchBoarders()
  }

  render() {
    const {boarders} = this.state

    return (
      <dir>
        <Table className="table">
          <thead>
            <tr>
              <th>Meno</th>
              <th>Priezvisko</th>
              <th>Diéta</th>
              <th>Id používateľa</th>
              <th>Vymazať</th>
            </tr>
          </thead>
          <tbody>
            {boarders.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.surname}</td>
                <td>{b.diet}</td>
                <td>{b.user_id}</td>
                <td>
                  <img
                    src={Delete}
                    className="btndeletestravnici"
                    alt="delete"
                    onClick={async () => {
                      await getApi().removeBoarder(b.id)
                      this.fetchBoarders()
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </dir>
    )
  }
}

export default MazanieStravnikov
