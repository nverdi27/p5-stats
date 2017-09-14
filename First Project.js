var img;

function setup() {
  createCanvas(500,500);
  img = createImg('https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi');
  img.hide();
  image(img, 0, 0, width/1, height/1.005);
  //background(180);
}

function draw() {
//image(img, 0, 0, width/1, height/1.005);
 if (mouseIsPressed){ 
//an if statement that says if the mouse is pressed it will fill tan
   fill(232, 160, 109); // try changing one of these to any number between 0 and 255
 }else {  
// otherwise if the mouse isn't pressed it will fill light ice blue 
   fill(212, 246, 252);
// you can set the color you want (R, G, B) http://www.rapidtables.com/web/color/RGB_Color.htm
 }
 ellipse(mouseX, mouseY, 80, 80);
//This makes an ellipse (wherever your mouse is horizontal, vertical, 80 pixels tall, 80 pixels wide)
//try changing the 80s and see what happens
}

