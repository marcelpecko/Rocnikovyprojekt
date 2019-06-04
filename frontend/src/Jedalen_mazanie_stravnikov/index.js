import React from 'react'
import {Table} from 'reactstrap'
import {getApi} from '../Api'
import './Jedalen_mazanie_stravnikov.css'

class MazanieStravnikov extends React.Component {
  state = {boarders: []}

  async componentDidMount() {
    const boarders = await getApi().getAllBoarders()
    // eslint-disable-next-line
    this.setState({boarders})
  }

  render() {
    const {boarders} = this.state

    return (
      <dir>
        <Table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surame</th>
              <th>Diéta</th>
              <th>Id pouívateľa</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {boarders.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.surname}</td>
                <td>{b.diet}</td>
                <td>{b.user_id}</td>
                <td>TODO BUTTON</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </dir>
    )
  }
}

export default MazanieStravnikov
