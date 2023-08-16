// Raindrop class
class Raindrop {
  float x, y, speed;

  Raindrop(float x, float y) {
    this.x = x;
    this.y = y;
    this.speed = random(5, 10);
  }

  void fall() {
    y += speed;
    if (y > height) {
      y = 0;
      x = random(width);
    }
  }

  void display() {
    stroke(150, 200, 255);
    line(x, y, x, y + 10);
  }
}

Raindrop[] raindrops = new Raindrop[500];

void setup() {
  size(800, 600);
  for (int i = 0; i < raindrops.length; i++) {
    raindrops[i] = new Raindrop(random(width), random(height));
  }
}

void draw() {
  // Set semi-transparent gray background
  background(128, 128, 128, 100);

  for (Raindrop raindrop : raindrops) {
    raindrop.fall();
    raindrop.display();
  }

  fill(255);
  textSize(18);
  text("Drag the mouse to create rain!", 10, 30);
}

void mouseDragged() {
  for (int i = 0; i < raindrops.length; i++) {
    raindrops[i] = new Raindrop(random(width), random(height));
  }
}
