
class TileT {

  static rotationToPaths = [
    [left, up, right],
    [up, right, down],
    [right, down, left],
    [down, left, up]
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
    // fill("cyan");
    rect(0, tileWidth/3, tileWidth, tileWidth/3);
    rect(tileWidth/3, 0, tileWidth/3, 2*tileWidth/3);
    pop();
  }

  getPaths() {
    return TileT.rotationToPaths[this.rotation];
  }

  // rightAllowed() {
  //   if (this.rotation == 3) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }

  // downAllowed() {
  //   if (this.rotation == 0) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }

  // // if there is a path from the right, then any tile except rotation = 1 is allowed
  // static rightAllowedFilter(value) {
  //   return value != 1;
  // }

  // static downAllowedFilter(value) {
  //   return value != 2;
  // }


}