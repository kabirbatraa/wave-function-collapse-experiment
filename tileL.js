class TileL {

  static rotationToPaths = [
    [left, up],
    [up, right],
    [right, down],
    [down, left]
  ];

  constructor(rotation, x, y) {
    this.rotation = rotation;
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    translate(this.x + tileWidth/2, this.y + tileWidth/2);
    rotate(this.rotation * PI/2);
    translate(-tileWidth/2, -tileWidth/2);
    // rect(0,0,tileWidth,tileWidth);
    fill("pink");
    rect(0, tileWidth/3, 2*tileWidth/3, tileWidth/3);
    rect(tileWidth/3, 0, tileWidth/3, 2*tileWidth/3);
    pop();
  }

  getPaths() {
    return TileL.rotationToPaths[this.rotation];
  }

}