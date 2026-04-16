class Brush {
  constructor(x, y, radius = 50) {
    this.radius = radius;
    this.body = Bodies.circle(x, y, radius);
  }

  display() {
    noStroke();
    fill(255, 0, 0);
    circle(this.body.position.x, this.body.position.y, this.radius * 2);
  }
}
