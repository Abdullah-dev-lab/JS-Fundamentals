function add(x, y) {
  return x + y;
}

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);

console.log(add(x,y));