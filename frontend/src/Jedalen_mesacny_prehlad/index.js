import React from 'react'
import {Table} from 'reactstrap'
import './Jedalen_mesacny_prehlad.css'
import {getApi} from '../Api'
import {flatten, keyBy} from 'lodash'

const DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok']

class MesacnyPrehlad extends React.Component {
  state = {data: [], boarders: {}}

  async componentDidMount() {
    const data = await getApi().getMenuChoices()
    const boarders = await getApi().getAllBoarders()
    // eslint-disable-next-line
    this.setState({data, boarders: keyBy(boarders, (b) => b.id)})
  }

  render() {
    const {boarders, data} = this.state
    return (
      <dir>
        <Table className="table">
          <thead>
            <tr>
              <th>Dieťa</th>
              <th>Týždeň</th>
              <th>Deň</th>
              <th>Obed</th>
            </tr>
          </thead>
          <tbody>
            {flatten(
              data.map((entry) =>
                DAYS.map((day, ind) => (
                  <tr key={entry.id}>
                    <td>{boarders[entry.boarder_id].name}</td>
                    <td>{entry.week}</td>
                    <td>{day}</td>
                    <td>{entry.choices[ind]}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </Table>
      </dir>
    )
  }
}

export default MesacnyPrehlad
