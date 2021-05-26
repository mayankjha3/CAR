canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car2.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
background_imgTag = new Image(); 
background_imgTag.onload = uploadBackground; 
background_imgTag.src = background_image;   

car1_imgTag = new Image(); 
car1_imgTag.onload = uploadCar1;  
car1_imgTag.src = car1_image;  

car2_imgTag = new Image(); 
car2_imgTag.onload = uploadCar2;  
car2_imgTag.src = car2_image;   
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
    }
    
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
car1_up();
console.log("up");
}
if(keyPressed == '40')
{
car1_down();
console.log("down");
}
if(keyPressed == '37')
{
car1_left();
console.log("left");
}
if(keyPressed == '39')
{
car1_right();
console.log("right");
}



if(keyPressed == '87')
{
car2_up();
console.log("w");
}
if(keyPressed == '83')
{
car2_down();
console.log("s");
}
if(keyPressed == '65')
{
car2_left();
console.log("a");
}
if(keyPressed == '68')
{
car2_right();
console.log("d");
}

}
function car1_up(){
    if(car1_y>=0){
        car1_y = car1_y-10;
        console.log("when up arrow is pressed, X = "+car1_x+ "and Y = "+ car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_down(){
    if( car1_y<=500){
        car1_y = car1_y+10;
        console.log("when down arrow is pressed, X = "+car1_x+ "and Y = "+ car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_left(){
    if(car1_x>=0){
        car1_x = car1_x-10;
        console.log("when left arrow is pressed, X = "+car1_x+ "and Y = "+ car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
        
    }
}
function car1_right(){
    if(car1_x<=500){
        car1_x = car1_x+10;
        console.log("when right arrow is pressed, X = "+car1_x+ "and Y = "+ car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
if(car1_x>700){
console.log("car1 Won");
document.getElementById("game_status").innerHTML = "Car 1  WON!!";
}





function car2_up(){
    if(car2_y>=0){
        car2_y = car2_y-10;
        console.log("when w is pressed, X = "+car2_x+ "and Y = "+ car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_down(){
    if( car2_y<=500){
        car2_y = car2_y+10;
        console.log("when down s is pressed, X = "+car2_x+ "and Y = "+ car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x = car2_x-10;
        console.log("when a is pressed, X = "+car2_x+ "and Y = "+ car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
        
    }
}
function car2_right(){
    if(car2_x<=500){
        car2_x = car2_x+10;
        console.log("when d is pressed, X = "+car2_x+ "and Y = "+ car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
if(car2_x>700){
console.log("car2 Won");
document.getElementById("game_status").innerHTML = "Car 2  WON!!";
}