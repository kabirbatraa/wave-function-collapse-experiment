class TileBlank {

  static rotationToPaths = [
    []
  ];
  
  constructor(rotation, x, y) {
    this.rotation = rotation;
    this.x = x;
    this.y = y;
  }

  draw() {
    // push();
    // translate(this.x + tileWidth/2, this.y + tileWidth/2);
    // translate(-tileWidth/2, -tileWidth/2);
    // fill("green");
    // rect(0,0,tileWidth,tileWidth);
    // pop();
  }

  getPaths() {
    return [];
  }


}