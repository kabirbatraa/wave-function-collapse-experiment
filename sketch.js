let tileWidth = 10;
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

      let newTileType = floor(random(2));
      // newTileType = 0;

      if (i > 0) {
        remainingPositions = remainingPositions.filter((value) => {
          if (newTileType == 0) {
            return !(tileGrid[i-1][j].rightAllowed() ^ TileT.rightAllowedFilter(value));
            // return tileGrid[i-1][j].rightAllowed() ? TileT.rightAllowedFilter(value) : !TileT.rightAllowedFilter(value);
          }
          else {
            return !(tileGrid[i-1][j].rightAllowed() ^ TileL.rightAllowedFilter(value));
          }
          
        });
      }
      if (j > 0) {
        remainingPositions = remainingPositions.filter((value) => {
          if (newTileType == 0) {
            return !(tileGrid[i][j-1].downAllowed() ^ TileT.downAllowedFilter(value));
            // return tileGrid[i-1][j].rightAllowed() ? TileT.rightAllowedFilter(value) : !TileT.rightAllowedFilter(value);
          }
          else {
            return !(tileGrid[i][j-1].downAllowed() ^ TileL.downAllowedFilter(value));
          }
          
        });
      }
      if (remainingPositions.length == 0) {
        tileGrid[i].push(new TileBlank(i*tileWidth, j*tileWidth));
      }
      else {
        if (newTileType == 0) {
          tileGrid[i].push(new TileT(remainingPositions[floor(random(0, remainingPositions.length))], i*tileWidth, j*tileWidth));
        }
        else {
          tileGrid[i].push(new TileL(remainingPositions[floor(random(0, remainingPositions.length))], i*tileWidth, j*tileWidth));
        }
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
