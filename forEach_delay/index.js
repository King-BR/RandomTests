var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 
 * @param {Function} fn 
 * @param {Number} seconds 
 */
function delayLoop(fn, seconds) {
  setTimeout(fn, seconds * 1000);
}

array.map((value, index, arr) => {
  delayLoop(function() {console.log(`${index} seconds has passed`);}, index);
});
