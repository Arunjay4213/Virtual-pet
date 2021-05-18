//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;


	//load images here
  function preload(){
    dog = loadImage("images/dog.png");
    happydog = loadImage("images/happydog.png");
  }

function setup() {
database = firebase.database()
	createCanvas(500, 500);
  dog = createSprite(400,125,100,100);
  dog.addImage(dog.png)

foodStock=database.ref('Food';)
foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
if(keyWentDown)(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();

  text(foodStock);
  textSize(4);
  stroke(4);  
  //add styles here


  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){
    database.ref('/').update({
      food:x
    })
  }
}



