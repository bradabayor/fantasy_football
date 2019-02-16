export function fetchCumulativePlayerStats(position) {
  //let headers = new Headers();
  let url =
    "https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?position=" +
    position;
  if (position === "All") {
    url =
      "https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?";
  }
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    //.then(function(res) { return res.json(); })
    .then(res => res.text())
    .then(text => console.log(text))
    //.then(function(data) { return data.cumulativeplayerstats.playerstatsentry; });
}

export function fetchSinglePlayerStats(player) {
  //let headers = new Headers();
  let url =
    "https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?player=" +
    player;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      return data.cumulativeplayerstats.playerstatsentry["0"];
    });
}

export function fetchPlayerInfoByID(playerID) {
  let url =
    "https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/active_players.json?player=" +
    playerID;

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      return data.activeplayers.playerentry[0];
    });
}

export function fetchFeedUpdates(playerID) {
  let url =
    "https://api.mysportsfeeds.com/v1.2/pull/nfl/current/latest_updates.json";

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      return data.latestupdates.feedentry;
    });
}
