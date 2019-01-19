export function getRedditFeed(feedtype) {
  //let headers = new Headers();
  let url =
    "https://www.reddit.com/r/49ers+AZCardinals+Browns+CHIBears+Chargers+Colts+DenverBroncos+GreenBayPackers+Jaguars+KansasCityChiefs+NYGiants+Patriots+Redskins+Saints+Seahawks+StLouisRams+Tennesseetitans+Texans+bengals+buccaneers+buffalobills+cowboys+detroitlions+eagles+falcons+fantasyfootball+miamidolphins+minnesotavikings+nfl+nyjets+oaklandraiders+panthers+ravens+steelers/new.json?";

  return fetch(url, {
    method: "GET"
  })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      return data.data.children;
    });
}
