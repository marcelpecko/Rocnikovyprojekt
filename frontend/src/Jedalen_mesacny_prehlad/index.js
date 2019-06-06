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
              <th>Pondelok</th>
              <th>Utorok</th>
              <th>Streda</th>
              <th>Štvrtok</th>
              <th>Piatok</th>
            </tr>
          </thead>
          <tbody>
            {data.map((
              entry // tu bolo flatten ale vzmazal som to
            ) => (
              <tr key={entry.id}>
                <td>
                  {`${boarders[entry.boarder_id].name} ${boarders[entry.boarder_id].surname}`}
                </td>
                <td>{entry.week}</td>
                <td>{entry.choices[0]}</td>
                <td>{entry.choices[1]}</td>
                <td>{entry.choices[2]}</td>
                <td>{entry.choices[3]}</td>
                <td>{entry.choices[4]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </dir>
    )
  }
}

export default MesacnyPrehlad
