export function calculateFantasyPoints(player) {
  let points = 0.0;


  if (player.player.Position === "QB" || player.player.Position === "RB" || player.player.Position === "WR" || player.player.Position === "TE") {
      points = ((player.stats.PassYards['#text'] / 25) + (player.stats.PassTD['#text'] * 4) - (player.stats.PassInt['#text'] * 2) +
                (player.stats.RushYards['#text'] / 10) + (player.stats.RushTD['#text'] * 6) +
                (player.stats.RecYards['#text'] / 10) + (player.stats.RecTD['#text'] * 6)).toFixed(2)
  }

  return points;
}