export function fetchCumulativePlayerStats(position) {
  //let headers = new Headers();
  let url = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?position=' + position;
  if (position === "All") { url = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?'; }
  console.log(position)
  return fetch(url, {
          method:'GET',
          headers: {
            "Authorization": "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log("API -> fetchCumulativePlayerStats -> Position: " + position);
    console.log(data.cumulativeplayerstats.playerstatsentry);
    return data.cumulativeplayerstats.playerstatsentry;
  })
}

export function fetchPlayerInfoByID(playerID) {
  let url = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/active_players.json?player=' + playerID;

  return fetch(url, {
    method:'GET',
    headers: {
      "Authorization": "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log("fetchPlayerInfoByID - COMPLETE");
    console.log(data.activeplayers.playerentry[0]);
    return data.activeplayers.playerentry[0];
  })
}