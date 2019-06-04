import React from 'react'
import {Table} from 'reactstrap'
import {connect} from 'react-redux'
import './Jedalen_mazanie_stravnikov.css'

class MazanieStravnikov extends React.Component {
  render() {
    return (
      <dir>
        <Table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surame</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
        </Table>
      </dir>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
}))(MazanieStravnikov)
