let currentTime = new Date();
let hour = 0;
let is_morning = true;
let minutes = 0;
let b = 1;
let direction = 1;
let rectangle_height = 100;
let recatangle_width = 10;
let rectangle_x = 0;
let rectangle_y = 0;
let speed_x = 0;
let speed_y = 5;
let stick_set = new Array();
let hour_stick = new Array();
let min_stick = new Array();
let click = false;

function setup() {
    createCanvas(windowWidth, windowHeight);

    hour = currentTime.getHours();
    console.log(hour);
    if(hour >= 12){
        is_morning= false;

    }
    if(hour > 12) {
        hour = hour - 12;
    }
    console.log(hour);
    minutes = currentTime.getMinutes();
    frameRate(30);
    for (i = 0; i < 12; i++){
        hour_stick.push( new Stick(-1) );
    }

    for(i = 0; i < 12; i++){
        hour_stick[i].display();
    }

    


}
  
function draw(){
    if( is_morning ){
        background( 255, 255, 255);
    } else {background( 0, 0, 0 );

    }

    for (i = 0; i < hour; i++) {
        hour_stick[i].move();
        hour_stick[i].display();
    
    }
    if ( click ){
    for (i = 0; i < minutes; i++) {
        min_stick[i].move();
        min_stick[i].display();
    }
}

    if(b >= 254 || b <= 0){
        direction = direction * -1;
    }
    b = b + direction;

}

class Stick {
    constructor(direction) {
      this.x = random(windowWidth);
      this.y = random(windowHeight-rectangle_height);

      
      this.width = 10;
      this.height = 100;
      this.speedX = 0;
      this.speedY = 5 * direction;
      if(direction>=0){
          this.color = color(135,206,250);
      } else{
        this.color = color(255,127,80);

      }
    }
  
    move() {
    
        if(this.y <= windowHeight-this.height){
            if(this.y >= 0){
                this.x = this.x + this.speedX;
                this.y = this.y + this.speedY;
                
            } 
        }
         
    }
  
    display() {
      noStroke();
      fill( this.color );
      rect(this.x, this.y, this.width, this.height);
    }
}
function mousePressed() {
    if (click == false);
    for (i = 0; i < 60; i++){
        min_stick.push( new Stick(1) );
    }

    for(i = 0; i < 60; i++){
        min_stick[i].display();
    }
    click = true;
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
} 