let n = parseInt(process.argv[2]);
let power = 0;

while (Math.pow(2, power) <= 256 && power <= n) {
    console.log(`2^${power} = ${Math.pow(2, power)}`);
    power++;
}
