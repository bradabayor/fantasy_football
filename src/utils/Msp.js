export function fetchAllPlayers() {
  //let headers = new Headers();
  let url = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?team=CLE';

  return fetch(url, {
          method:'GET',
          headers: {
            "Authorization": "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
            "Content-Type": "application/json",
          },
        })
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    return data.cumulativeplayerstats.playerstatsentry;
  })
}