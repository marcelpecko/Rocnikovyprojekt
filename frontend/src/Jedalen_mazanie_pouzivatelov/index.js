import React from 'react'
import {Table} from 'reactstrap'
import {connect} from 'react-redux'
import './Jedalen_mazanie_pouzivatelov.css'
import Delete from '../obrazky/delete.png'
import {getApi} from '../Api'

class MazaniePouzivatelov extends React.Component {
  state = {users: []}

  fetchUsers = async () => {
    const users = await getApi().getUsers()
    this.setState({users})
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const {users} = this.state

    return (
      <dir>
        <Table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Meno</th>
              <th>Priezvisko</th>
              <th>Email</th>
              <th>Vymazať</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>
                  {' '}
                  <img
                    src={Delete}
                    className="btndeletepouzivatelia"
                    alt="delete"
                    onClick={async () => {
                      await getApi().removeUser(user.id)
                      this.fetchUsers()
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

export default connect((state) => ({
  boarders: state.boarders,
}))(MazaniePouzivatelov)
