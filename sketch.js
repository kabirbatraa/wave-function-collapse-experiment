let tileWidth = 50;
let newTile;

let tileGrid;

function setup() {
  createCanvas(500, 500);
  noStroke();
  noFill();
  // newTile = 
  tileGrid = [];
  for (let i = 0; i < width/tileWidth; i++) {
    tileGrid.push([]);
    for (let j = 0; j < width/tileWidth; j++) {
      let remainingPositions = [0, 1, 2, 3];
      if (i > 0) {
        // let prevTileRotation = tileGrid[i-1][j].rotation;
        if (!tileGrid[i-1][j].rightAllowed()) {
          remainingPositions = remainingPositions.filter((value) => (value == 1 || value == 2));
        }
        else {
          remainingPositions = remainingPositions.filter((value) => (value == 0 || value == 3));
        }
        // if (tileGrid[i-1][j].rightAllowed()) {
        //   remainingPositions
        // }
      }
      if (j > 0) {
        // let prevTileRotation = tileGrid[i][j-1].rotation;
        // if (prevTileRotation == 0 || prevTileRotation == 1) {
        if (!tileGrid[i][j-1].downAllowed()) {
          remainingPositions = remainingPositions.filter((value) => (value == 2 || value == 3));
        }
        // else if (prevTileRotation == 2 || prevTileRotation == 3) {
        else {
          remainingPositions = remainingPositions.filter((value) => (value == 0 || value == 1));
        }
      }
      tileGrid[i].push(new Tile(remainingPositions[floor(random(0, remainingPositions.length))], i*tileWidth, j*tileWidth));
      // tileGrid[i].push(new Tile(0, i*tileWidth, j*tileWidth));
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
