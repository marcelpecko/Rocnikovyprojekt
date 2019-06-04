import React from 'react'
import {Table} from 'reactstrap'
import {connect} from 'react-redux'
import './Jedalen_mesacny_prehlad.css'

class MesacnyPrehlad extends React.Component {
  render() {
    return (
      <dir>
        <Table className="table">
          <thead>
            <tr>
              <th>Dieťa</th>
              <th>Mesiac</th>
              <th>Týždeň</th>
              <th>Deň</th>
              <th>Obed</th>
            </tr>
          </thead>
        </Table>
      </dir>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
}))(MesacnyPrehlad)
