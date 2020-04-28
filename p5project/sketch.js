let testVaruable; // declare a global variable 

let lookX = 0; //initialize variable with value of 0 (sets data type)

function setup() { //setup function runs one time at beginning of program execution 
  createCanvas(400, 400); // setting the size of our sketch 
}

function draw() {//draw function runs over and over after the setup function has finished 
    background(127); //turn every pixel white 
  fill(255,90,200); //change color of inside of drawn shapes
  strokeWeight(5);
  stroke(105, 200, 255); //change color of outline of drawn shapes
  
  
//drawing eyes
  ellipse(100, 100, 80, 40); //draw an ellipse centered on (100, 100) with a width of 80px and height of 40px 
  ellipse(300, 100, 80, 40); //darw an ellipse centered on (100, 100) with a width of 80px and height of 40px 

  //draw nose
  triangle(200, 180, 210, 190, 190, 190); // triangle function uses 3 coords to make a triangle
  
  
  //width and height are system variables that have values equal to the width and height of our sketch
  arc(width / 2, 230, 300, 100, 0, PI, CHORD); //arc draws a section of an elliptical curve using radians
   
  
 //making moving pupils
  fill(0); //set fill to black
  noStroke(); //set stroke to none
  
  lookX =map(mouseX, 0, width, -20, 20, true);
  
  ellipse(100, 100, 20, 20); // draw an ellipse centered on (100, 100) with a width of 80px and height of 40px
  ellipse(300, 100, 20, 20); //draw an ellipse centered on (100, 100) with a width of 80px and height of 40px 
  
  //console.log lets us view the values of variables in the console
  console.log(mouseX + ", " + mouseY); //mouseX and mouse Y are system variables that show mouse position
}