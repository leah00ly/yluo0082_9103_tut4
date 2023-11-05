let circles = []; // Create an array to store the big wheels
let backgroundCircles = [];// Create an array to store background circles

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  background(200, 150, 60);
  
  // Initialize a counter to prevent infinite looping
  var protection = 0; 
  
  // Start a loop that continues until there are 100 non-overlapping circles
  while (backgroundCircles.length < 100) {

    let overlapping = false;// Initialize a flag to track overlapping status

    // Create a new circle with random properties
    var circle = {
      x: random(width),
      y: random(height),
      r: random(10, 30),
      color: color(255)
    };

    // Check for overlaps with existing background circles
    for (let i = 0; i < backgroundCircles.length; i++) {
      var other = backgroundCircles[i];
      var d = dist(circle.x, circle.y, other.x, other.y);

      // If there's an overlap, set the overlapping status to true and break the loop
      if (d < circle.r + other.r) {
        overlapping = true;
        break;
      }
    }    

    // If no overlaps are found, add the new circle to backgroundCircles
    if (!overlapping) {
      backgroundCircles.push(circle);
    }

    protection++;
  
    // Break the loop if it exceeds 500 iterations to prevent excessive processing
    if (protection > 500) {
      break;
    }
  }


  let maxRadius = new Circle(0, 0, 50, 16, 3).getBoundaryRadius(); // Get the maximum radius of the shape
  let rows = 10;
  let cols = 10;

   // Use rows and cols for looping conditions
  for (let rowIndex = 0, y = maxRadius; rowIndex < rows; y += maxRadius * 1.9, rowIndex++) {
    // Determine starting x-coordinate for even and odd rows
    let startX = rowIndex % 2 == 0 ? maxRadius : maxRadius + maxRadius;
    for (let colIndex = 0, x = startX; colIndex < cols; x += maxRadius * 2.1, colIndex++) {
      circles.push(new Circle(x, y, 50, 16, 3)); // Add the new circle into the array
    }
  }

}

function draw() {

  // Draw the background circles
  for (let i = 0; i < backgroundCircles.length; i++) {
    fill(backgroundCircles[i].color);
    noStroke();
    circle(backgroundCircles[i].x, backgroundCircles[i].y, backgroundCircles[i].r);
  }

  translate(-200, -100);// Move the origin point for rotation
  rotate(50);// Rotate the canvas to tilt the rows and columns

  // Call the class to draw the wheels
  for (let circle of circles) {
    circle.display();
  }

}

// Create a class of circles for the wheels
class Circle {
  constructor(x, y, r, count, gap) {
    this.x = x;  
    this.y = y;  
    this.r = r;  
    this.count = count;  // Number of concentric circles
    this.gap = gap;  // Gap between concentric circles

    // Generate random colors for different parts of the circles
    this.colorA = color(random(360), 100, 100); 
    this.colorB = color(random(360), 150, 100); 
    this.colorC = color(random(360), 150, 100); 
    this.colorD = color(random(360), 100, 100); 
    this.colorF = color(random(360), 100, 100); 
    this.colorE = color(random(360), 50, 100); 
  }

  getBoundaryRadius() {
    let smallCircleRadius = 1.5;
    // Calculate the boundary radius of the entire set of circles
    return this.r + this.gap * 2 + 5 * this.gap * smallCircleRadius + smallCircleRadius;
  }

  display() {
    let smallCircleRadius = 1.5;
    let smallcircleNumber = 36;
    // Calculate the radius of the outer boundary circle
    let boundaryRadius = this.r + this.gap * 2 + 5 * this.gap * smallCircleRadius + smallCircleRadius;

    // Draw the outer boundary circle (the largest one)
    fill(this.colorE); 
    ellipse(this.x, this.y, boundaryRadius * 2);

    // Draw concentric circles
    for (let i = 0; i < this.count; i++) {
      let radius = this.r - i * this.gap;
      if (i === this.count - 1) {
        fill(255);  // Fill the smallest circle with white
      } else if (i <= this.count / 2) {
        // For the first half of the circles, alternate between colorA and colorB
        if (i % 2 === 1) {
          fill(this.colorA); 
        } else {
          fill(this.colorB); 
        }
      } else if (i >= this.count / 2 + 1 && i < this.count - 1) {
        // For the second half of the circles, alternate between colorC and colorD
        if (i % 2 === 1) {
          fill(this.colorC);  
        } else {
          fill(this.colorD);  
        }
      }
      noStroke();
      ellipse(this.x, this.y, radius * 2);  // Draw the concentric circles
    }

    // Draw small circles
    for (let j = 0; j < 5; j++) {
      // Calculate the radius for each set of small circles
      let outerRadius = this.r + this.gap * 2 + j * this.gap * smallCircleRadius;
      fill(this.colorF);  // Set the fill color for small circles
      for (let i = 0; i < (smallcircleNumber + j * 3); i++) {
        let angle = TWO_PI / (smallcircleNumber + j * 3) * i;
        let smallCircleX = this.x + outerRadius * cos(angle);
        let smallCircleY = this.y + outerRadius * sin(angle);

        ellipse(smallCircleX, smallCircleY, smallCircleRadius * 2);  // Draw each small circle
      }
    }
  }
}
