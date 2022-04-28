let tileWidth = 50;
let newTile;

let tileGrid;

function setup() {
  createCanvas(500, 500);
  noStroke();
  fill(0);
  // newTile = 
  tileGrid = [];
  for (let i = 0; i < width/tileWidth; i++) {
    tileGrid.push([]);
    for (let j = 0; j < width/tileWidth; j++) {
      let remainingPositions = [0, 1, 2, 3];
      if (i > 0) {
        if (tileGrid[i-1][j].rightAllowed()) {
          remainingPositions = remainingPositions.filter((value) => TileT.rightAllowedFilter(value));
        }
        else {
          remainingPositions = remainingPositions.filter((value) => !TileT.rightAllowedFilter(value));
        }
      }
      if (j > 0) {
        if (tileGrid[i][j-1].downAllowed()) {
          remainingPositions = remainingPositions.filter((value) => TileT.downAllowedFilter(value));
        }
        else {
          remainingPositions = remainingPositions.filter((value) => !TileT.downAllowedFilter(value));
        }
      }
      if (remainingPositions.length == 0) {
        tileGrid[i].push(new TileBlank(i*tileWidth, j*tileWidth));
      }
      else {
        tileGrid[i].push(new TileT(remainingPositions[floor(random(0, remainingPositions.length))], i*tileWidth, j*tileWidth));
      }
      // tileGrid[i].push(new TileT(0, i*tileWidth, j*tileWidth));
    }
  }
}

function draw() {
  background(220);
  // newTile.draw();
  for (let i = 0; i < width/tileWidth; i++) {
    // tileGrid.push([]);
    for (let j = 0; j < width/tileWidth; j++) {
      // tileGrid[i].push(new Tile(floor(random(0, 4)), i*tileWidth, j*tileWidth));
      tileGrid[i][j].draw();
    }
  }
}
