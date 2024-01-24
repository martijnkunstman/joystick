function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let time = 0;
let enemyx = 0;
let enemyy = 0;

let enemies = [];

function enemy() {
  //console.log(time)
  if (time == 0) {
    enemyx = getRandomInt(0, window.innerWidth);
    enemyy = getRandomInt(0, window.innerHeight);
    enemies.push([enemyx, enemyy]);
  }

  for (let i = 0; i < enemies.length; i++) {
    enemyx= enemies[i][0];
    enemyy= enemies[i][1];
    let xdiff = x - enemyx;
    let ydiff = y - enemyy;
    let normalize = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    let xnorm = xdiff / normalize;
    let ynorm = ydiff / normalize;
    enemyx = enemyx + xnorm;
    enemyy = enemyy + ynorm;
    enemies[i][0] = enemyx;
    enemies[i][1] = enemyy;
    

    ctx.beginPath();
    ctx.arc(enemyx, enemyy, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = "blue";

    let closeBy = 40;
    if (
      x + closeBy > enemyx &&
      x - closeBy < enemyx &&
      y + closeBy > enemyy &&
      y - closeBy < enemyy
    ) {
      ctx.fillStyle = "yellow";
    }
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000033";
    ctx.stroke();
  }

  time = time + 1;
  if (time == 1000) {
    if (enemies.length > 10) {
      enemies.shift();
    }
    time = 0;
  }
}
