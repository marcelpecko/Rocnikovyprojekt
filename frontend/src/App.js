import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users').then((res) => res.json()).then((users) => this.setState({users}))
    console.log(this.state)
  }

  render() {
    console.log('pica', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Users: {this.state.users.map((u, i) => <div key={i}>{u.s}</div>)}
        </p>
      </div>
    )
  }
}

export default App
