
class TileCross {

  static rotationToPaths = [
    [left, up, right, down],
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
    fill("#98fb98");
    rect(0, tileWidth/3, tileWidth, tileWidth/3);
    rect(tileWidth/3, 0, tileWidth/3, tileWidth);
    pop();
  }

  getPaths() {
    return TileCross.rotationToPaths[this.rotation];
  }

}