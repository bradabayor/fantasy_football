var React = require('react');
var api = require('../utils/api');

function PlayerGrid (props) {
  return (
    <ul className="player-grid">
      {props.players.map(function (player) {
        return (
          <li key={player.player.ID}>
             {player.player.FirstName} {player.player.LastName} {player.player.Position} {player.team.City}
          </li>
        )
      })}
    </ul>
  )
}

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: null
    };
    this.updatePlayers = this.updatePlayers.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.updatePlayers}>Update</button>
        {!this.state.players
         ? <p>LOADING</p>
         : <PlayerGrid players={this.state.players} />}
      </div>
    )
  }

  componentDidMount() {
    this.updatePlayers();
  }

  updatePlayers() {
    this.setState(function() {
      return {
        players : null
      }
    });

    this.fetchPlayers()
      .then(function(players) {
        this.setState(function() {
          return {
            players : players,
          }
        })
      }.bind(this));

      console.log('done');
  }

  fetchPlayers() {
    let url = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?team=CLE';
    let username = '69177b5b-d299-4f3b-90fc-02cd12';
    let password = 'Pompey123';

    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    //headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

    return fetch(url, {
            method:'GET',
            headers: {
              "Authorization": "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
              "Content-Type": "application/json",
            },
            //mode: 'no-cors',
            //credentials: 'username:password'
          })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      return data.cumulativeplayerstats.playerstatsentry;
    })
  }
}

module.exports = PlayerList