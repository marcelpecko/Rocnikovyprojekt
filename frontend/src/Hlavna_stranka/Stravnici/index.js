import React from 'react'
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import './Stravnici.css'

class Stravnici extends React.Component {
  render() {
    return (
      <div className="zaklad-stravnici">
        <div>
          {this.props.boarders.map((b, i) => (
            <div key={i}>
              <span className="stravnikInfo">
                {b.name} <tab />
                {b.surname}
              </span>
              <br />
              Diéta: <span className="stravnikInfo">{b.diet}</span>
              <Button
                color="info"
                onClick={() => {
                  this.props.history.push('vyber')
                }}
              >
                Objednaj obed
              </Button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
}))(Stravnici)
