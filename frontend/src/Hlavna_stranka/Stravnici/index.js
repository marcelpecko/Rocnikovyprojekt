import React from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import {connect} from 'react-redux'
import {updateValue} from '../../sharedActions'
import './Stravnici.css'

class Stravnici extends React.Component {
  render() {
    return (
      <div className="zaklad-stravnici">
        <div>
          {this.props.boarders.map((b, i) => (
            <div key={i} className="jedenstravnik">
              <span className="stravnikInfoMeno">
                {b.name} <tab />
                {b.surname}
              </span>
              <br />
              Diéta: <span className="stravnikInfo">{b.diet}</span>
              <ButtonGroup className="stravnikbutton">
                <Button
                  color="primary"
                  onClick={() => {
                    this.props.updateValue(['currentBoarderId'], b.id, 'Set current boarder id')
                    this.props.history.push('obed')
                  }}
                >
                  Objenaný obed
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    this.props.updateValue(['currentBoarderId'], b.id, 'Set current boarder id')
                    this.props.history.push('mesacny_prehlad_stravnik')
                  }}
                >
                  Mesačný výpis
                </Button>
                <Button
                  color="info"
                  onClick={() => {
                    this.props.updateValue(['currentBoarderId'], b.id, 'Set current boarder id')
                    this.props.history.push('vyber')
                  }}
                >
                  Objednaj obed
                </Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    boarders: state.boarders,
  }),
  {updateValue}
)(Stravnici)
