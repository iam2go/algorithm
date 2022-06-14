/**
 * 332. Reconstruct Itinerary
 * @see https://leetcode.com/problems/reconstruct-itinerary/
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let ticketMap = {};
  let routes = [];

  for (let [from, to] of tickets) {
    const destinations = ticketMap[from] || [];
    ticketMap[from] = destinations.concat(to);
  }

  for (let from in ticketMap) {
    ticketMap[from].sort();
  }

  const travelRoute = (from) => {
    while (ticketMap[from] && ticketMap[from].length > 0) {
      travelRoute(ticketMap[from].shift());
    }
    // dfs 특성상 마지막 경로가 제일 먼저 이곳에 도달하기 때문에 요소 거꾸로 삽입
    routes.unshift(from);
  };

  travelRoute("JFK");
  return routes;
};
