import React from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import {connect} from 'react-redux'
import './Mesacny_prehlad_stravnik.css'

class MesacnyPrehladStravnik extends React.Component {
  render() {
    return (
      <div>
        <div>Ahoj</div>
      </div>
    )
  }
}

export default connect((state) => ({
  boarders: state.boarders,
}))(MesacnyPrehladStravnik)
