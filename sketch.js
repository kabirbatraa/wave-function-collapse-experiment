let tileWidth = 50;
let newTile;

let tileGrid;
let alreadyQueued;

// let row = 0;
// let col = 0;

let right = 0;
let down = 1;
let left = 2;
let up = 3;

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let queue = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // randomSeed(0);

  noStroke();
  fill(0);

  tileGrid = [];
  alreadyQueued = [];
  for (let i = 0; i < width/tileWidth; i++) {
    tileGrid.push([]);
    alreadyQueued.push([]);
    for (let j = 0; j < height/tileWidth; j++) {
      tileGrid[i].push(false);
      alreadyQueued[i].push(false);
    }
  }

  // let col = floor(tileGrid.length / 2);
  let col = floor(random(tileGrid.length));
  // let row = floor(tileGrid[0].length / 2);
  let row = floor(random(tileGrid[0].length));
  queue.push([col, row]);
}

function draw() {
  background("black");
  
  if (queue.length > 0) {
    // pair = queue.splice(floor(random(queue.length)), 1);
    pair = queue.splice(0, 1);
    [col, row] = pair[0]; // splice returns an array of elements
    
    tileGrid[col][row] = generateNewTile(col, row);
    for (let i = 0; i < 4; i++) {
      if (0 <= col+dx[i] && col+dx[i] < tileGrid.length
      && 0 <= row+dy[i] && row+dy[i] < tileGrid[0].length
      && tileGrid[col+dx[i]][row+dy[i]] == false
      && alreadyQueued[col+dx[i]][row+dy[i]] != true) {
        // fill("red");
        // rect((col+dx[i])*tileWidth, (row+dy[i])*tileWidth, tileWidth, tileWidth);
        // tileGrid[col+dx[i]][row+dy[i]] = true
        alreadyQueued[col+dx[i]][row+dy[i]] = true;
        queue.push([col+dx[i], row+dy[i]]);
      }
    }
  }

  // while (true) {
  //   if (col < tileGrid.length) {
  //     if (row < tileGrid[col].length) {
  //       tileGrid[col][row] = generateNewTile(col, row);
  //       row++;
  //       break;
  //     }
  //     else {
  //       row = 0;
  //       col++;
  //     }
  //   }
  // }

  
  // if (col >= 0) {
  //   if (row >= 0) {
  //     tileGrid[col][row] = generateNewTile(col, row);
  //     row--;
  //   }
  //   else {
  //     row = tileGrid[0].length - 1;
  //     col--;
  //   }
  // }

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

  let remainingRotations = [0, 1, 2, 3];

  let newTileType = floor(random(2)) ? TileT : TileL;
  // newTileType = TileT;
  if (i > 0 && tileGrid[i-1][j] != false) {
    let previousTilePath = tileGrid[i-1][j].getPaths().includes(right);
    remainingRotations = remainingRotations.filter((value) => {
      let newTilePath = newTileType.rotationToPaths[value].includes(left);
      return previousTilePath == newTilePath;
    });
  }
  
  if (j > 0 && tileGrid[i][j-1] != false) {
    let previousTilePath = tileGrid[i][j-1].getPaths().includes(down);
    remainingRotations = remainingRotations.filter((value) => {
      let newTilePath = newTileType.rotationToPaths[value].includes(up);
      return previousTilePath == newTilePath;
    });
  }

  if (i < tileGrid.length-1 && tileGrid[i+1][j] != false) {
    let previousTilePath = tileGrid[i+1][j].getPaths().includes(left);
    remainingRotations = remainingRotations.filter((value) => {
      let newTilePath = newTileType.rotationToPaths[value].includes(right);
      return previousTilePath == newTilePath;
    });
  }

  if (j < tileGrid[i].length-1 && tileGrid[i][j+1] != false) {
    let previousTilePath = tileGrid[i][j+1].getPaths().includes(up);
    remainingRotations = remainingRotations.filter((value) => {
      let newTilePath = newTileType.rotationToPaths[value].includes(down);
      return previousTilePath == newTilePath;
    });
  }




  // return new newTileType(0, i*tileWidth, j*tileWidth);
  if (remainingRotations.length == 0) {
    return new TileBlank(i*tileWidth, j*tileWidth);
  }
  else {
    return new newTileType(remainingRotations[floor(random(0, remainingRotations.length))], i*tileWidth, j*tileWidth);
  }
}