export const fetchPlayerStats = async (
  statType = "seasonStats",
  season = "2018",
  position = "QB"
) => {
  const response = await fetch(
    `http://api.fantasy.nfl.com/v1/players/stats?statType=${statType}&season=${season}&position=${position}&format=json`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchPlayerDetailsMSP = async player => {
  const response = await fetch(
    `https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/active_players.json?player=${player}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Basic NjkxNzdiNWItZDI5OS00ZjNiLTkwZmMtMDJjZDEyOlBvbXBleTEyMw==",
        "Content-Type": "application/json; charset=UTF-8"
      }
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};
