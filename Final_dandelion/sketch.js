let a, b, c, d, e;
// var mov= false;

function setup() {
  createCanvas(600, 500);
  background(10);
}

function draw() {
  //stem
  stroke ("rgb(25,118,25)");
  noFill ();
  strokeWeight(8);
  curve(0, 0, 200, 250, 180, 600, 0, 0);
  curve(0, 0, 350, 200, 280, 600, 0, 0);
  


  translate(200, 250); //moving origin to top of stem
  for (i = 0; i <= 12; i++) {
    push();
    rotate(radians(i*28)); //angle increment forming the circle
    petal();
    pop();
  }
    for (i = 0.75; i <= 12.75; i++) {
    push();
    rotate(radians(i*28)); //angle increment forming the circle
    petal();
    pop();
  }
  
  
  translate(150, -50); //moving origin to top of stem
  for (i = 0; i <= 12; i++) {
    push();
    rotate(radians(i*28));
    petal();
    pop();
  }
    for (i = 0.75; i <= 12.75; i++) {
    push();
    rotate(radians(i*28)); //angle increment forming the circle
    petal();
    pop();
  }
  
  noLoop(); //to stop the petals from forming on top of each other and increasing opacity
}

function petal() {
  
  a= 0;
  b= -10;
  c= 7;
  d= 2;
  e= -15;
  
  //individual petal
  
  //innermost circle
  strokeWeight(1);
  stroke(255,150);
  line(a, a, a, b);
  line(a, b, a-c, b-5);
  line(a, b, a+c, b-5);
  line(a, b, a-d, b-5);
  line(a, b, a+d, b-5);
  
  line(a+10, a-20, a+10, b-20);
  line(a+10, b-20, a-c+15, b-5-20);
  line(a+10, b-20, a+c+15, b-5-20);
  line(a+10, b-20, a-d+15, b-5-20);
  line(a+10, b-20, a+d+15, b-5-20);
  
  line(a-10, a-20, a-10, b-20);
  line(a-10, b-20, a-c-15, b-5-20);
  line(a-10, b-20, a+c-15, b-5-20);
  line(a-10, b-20, a-d-15, b-5-20);
  line(a-10, b-20, a+d-15, b-5-20);
  
  
  //second circle
  line(a-5, a-40, a, b);
  line(a-5, b-40, a-c-5, b-5-40);
  line(a-5, b-40, a+c-5, b-5-40);
  line(a-5, b-40, a-d-5, b-5-40);
  line(a-5, b-40, a+d-5, b-5-40);
  
  line(a+10, a-40, a+10, b-40);
  line(a+10, b-40, a-c+10, b-5-40);
  line(a+10, b-40, a+c+10, b-5-40);
  line(a+10, b-40, a-d+10, b-5-40);
  line(a+10, b-40, a+d+10, b-5-40);
  
  //outer circle
  line(a, a-50, a, b);
  line(a, b-50, a-c, b-10-50);
  line(a, b-50, a+c, b-10-50);
  line(a, b-50, a-d, b-10-50);
  line(a, b-50, a+d, b-10-50);
  
  line(a-10, a-50, a-10, b-50);
  line(a-10, b-50, a-c-15, b-10-50);
  line(a-10, b-50, a+c-15, b-10-50);
  line(a-10, b-50, a-d-15, b-10-50);
  line(a-10, b-50, a+d-15, b-10-50);
  
  line(a+10, a-50, a+10, b-50);
  line(a+10, b-50, a-c+15, b-10-50);
  line(a+10, b-50, a+c+15, b-10-50);
  line(a+10, b-50, a-d+15, b-10-50);
  line(a+10, b-50, a+d+15, b-10-50);


// function mousePressed(){
//   mov=true; // randomise movement of petal so that x++ and y++
// }
  
}