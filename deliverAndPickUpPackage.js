/**
 * 택배 배달과 수거하기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/150369
 * @param {number} cap
 * @param {number} n
 * @param {number[]} deliveries
 * @param {number[]} pickups
 * @returns {number}
 */
function solution(cap, n, deliveries, pickups) {
  let deliveryCount = 0;
  let pickupCount = 0;

  let longDist = n;
  let totalDist = 0;

  for (let i = n - 1; i >= 0; i--) {
    deliveryCount += deliveries[i];
    pickupCount += pickups[i];

    while (deliveryCount > cap || pickupCount > cap) {
      totalDist += longDist * 2;
      deliveryCount -= cap;
      pickupCount -= cap;
      longDist = i + 1;
    }
  }

  if (deliveryCount > 0 || pickupCount > 0) {
    totalDist += longDist * 2;
  }
  return totalDist;
}
