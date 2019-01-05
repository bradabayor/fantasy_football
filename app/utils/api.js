module.exports = {
  fetchPlayers: function () {
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
      console.log('fetch complete');
      return data;
    })
  }
}