let tileWidth = 50;
let newTile;

let tileGrid;

let row = 0;
let col = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);

  tileGrid = [];
  for (let i = 0; i < width/tileWidth; i++) {
    tileGrid.push([]);
    for (let j = 0; j < height/tileWidth; j++) {
      tileGrid[i].push(false);
    }
  }
}

function draw() {
  background("black");

  if (col < tileGrid.length) {
    if (row < tileGrid[col].length) {
      tileGrid[col][row] = generateNewTile(col, row);
      row++;
    }
    else {
      row = 0;
      col++;
    }
  }

  for (let i = 0; i < width/tileWidth; i++) {
    // tileGrid.push([]);
    for (let j = 0; j < height/tileWidth; j++) {
      // tileGrid[i].push(new Tile(floor(random(0, 4)), i*tileWidth, j*tileWidth));
      if (tileGrid[i][j] != false) {
        tileGrid[i][j].draw();
      }
    }
  }
}

function generateNewTile(i, j) {

  let remainingPositions = [0, 1, 2, 3];

  let newTileType = floor(random(2)) ? TileT : TileL;
  // newTileType = TileT;

  if (i > 0) {
    remainingPositions = remainingPositions.filter((value) => {
      return !(tileGrid[i-1][j].rightAllowed() ^ newTileType.rightAllowedFilter(value));
    });
  }
  if (j > 0) {
    remainingPositions = remainingPositions.filter((value) => {
      return !(tileGrid[i][j-1].downAllowed() ^ newTileType.downAllowedFilter(value));
    });
  }
  if (remainingPositions.length == 0) {
    return new TileBlank(i*tileWidth, j*tileWidth);
  }
  else {
    return new newTileType(remainingPositions[floor(random(0, remainingPositions.length))], i*tileWidth, j*tileWidth);
  }
}