var React = require('react');
var PlayerList = require('./PlayerList');

class App extends React.Component {
  render() {
    return (
      <div>
        <PlayerList />
      </div>
    )
  }
}

module.exports = App;