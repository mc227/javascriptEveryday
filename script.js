/*
data-structures(map)
*/ 

// ES6
const map = new Map();
// const map = new WeakMap();

// key - value map structure 

map.set('map key', 'map value');
map.set(1, 'another value');
console.log(map.size);
const mapVal = map.get('map key');
console.log(mapVal);
console.log(typeof mapVal);
console.log(map)
// iterate over the map
for (let [key, value] of map) {
  console.log(`key "${key}" has a value of "${value}"`);
}