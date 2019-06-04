import React from 'react'
import {Table} from 'reactstrap'
import {connect} from 'react-redux'
import './Jedalen_mazanie_pouzivatelov.css'
import {getApi} from '../Api'

class MazaniePouzivatelov extends React.Component {
  state = {users: []}

  async componentDidMount() {
    const users = await getApi().getUsers()
    console.log(users)
    // eslint-disable-next-line
    this.setState({users})
  }

  render() {
    const {users} = this.state

    return (
      <dir>
        <Table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surame</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>TODO BUTTON</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </dir>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
}))(MazaniePouzivatelov)
