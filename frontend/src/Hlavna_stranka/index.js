import React from 'react'
import {Button, Badge} from 'reactstrap'
import axios from 'axios'
import UserIcon from 'react-icons/lib/fa/user'

export default class Prihlasovanie extends React.Component {
  render() {
    return (
      <div>
        <div className="zaklad">
          <div className="zaklad-pouzivatel">
            <UserIcon className="pouzivatelfotka" />
            Marcel Pecko
            <br /> mail> marcelpecko97@gmail.com
            <br /> tel> 0908805510
          </div>
          Moji stravníci:
          <br /> <Button>Pridaj stravníka</Button>
          <div className="zaklad-stravnici">
            <div>stravnik1</div>
          </div>
        </div>
        <div className="upozornenia-tabulka">
          <div className="upozornenia">
            <h2>
              Upozornenia: <Badge color="danger">New</Badge>
            </h2>
            <div classsName="upozornenia-text">
              <br />
              Nový jedálny lístok je už zverejnený
              <br /> Jedáleň bude dňa 19.4.2017 zatvorená z dôvodu riaditeľského volna.
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
