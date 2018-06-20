import React from 'react'
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import './Stravnici.css'

class Stravnici extends React.Component {
  render() {
    return (
      <div className="zaklad-stravnici">
        <div>{this.props.boarders.map((b, i) => <div key={i}>{b.name}</div>)}</div>
      </div>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
}))(Stravnici)
