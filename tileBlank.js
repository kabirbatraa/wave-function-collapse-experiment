class TileBlank {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
  //   push();
  //   translate(this.x + tileWidth/2, this.y + tileWidth/2);
  //   rotate(this.rotation * PI/2);
  //   translate(-tileWidth/2, -tileWidth/2);
  //   rect(0,0,tileWidth,tileWidth);
  //   fill("green");
  //   rect(0, tileWidth/3, tileWidth, tileWidth/3);
  //   rect(tileWidth/3, 0, tileWidth/3, 2*tileWidth/3);
  //   pop();
  }

  getPaths() {
    return [];
  }

  // rightAllowed() {
  //   // if (this.rotation == 3) {
  //   //   return false;
  //   // }
  //   // else {
  //   //   return true;
  //   // }
  //   return false;
  // }

  // downAllowed() {
  //   // if (this.rotation == 0) {
  //   //   return false;
  //   // }
  //   // else {
  //   //   return true;
  //   // }
  //   return false;
  // }


}