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
    // fill("pink");
    rect(0, tileWidth/3, 2*tileWidth/3, tileWidth/3);
    rect(tileWidth/3, 0, tileWidth/3, 2*tileWidth/3);
    pop();
  }

  getPaths() {
    return TileL.rotationToPaths[this.rotation];
  }

  // rightAllowed() {
  //   if (this.rotation == 0 || this.rotation == 3) {
  //     return false;
  //   }
  //   else if (this.rotation == 1 || this.rotation == 2) {
  //     return true;
  //   }
  // }

  // downAllowed() {
  //   if (this.rotation == 0 || this.rotation == 1) {
  //     return false;
  //   }
  //   else if (this.rotation == 2 || this.rotation == 3) {
  //     return true;
  //   }
  // }

  // // if there is a path from the right, then rotation = 0 and 3 are allowed
  // static rightAllowedFilter(value) {
  //   return value == 0 || value == 3;
  // }

  // static downAllowedFilter(value) {
  //   return value == 0 || value == 1;
  // }

}