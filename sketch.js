let r, g, b, r1, g1, b1;
// let body = document.getElementById("grad");
let data = [];
let css = document.querySelector("h3");

let body = document.getElementById("grad");
let black, white, ba, wa;

let button;


function setup() {
  let intro = createP("Hello, select which you prefer to see depending on the color of the background. Once done, click download to get the spreadsheet for the model to be trained!");
  intro.style('font-family', 'Livvic', 'sans-serif');
  intro.style('margin-bottom', '25px');
  intro.class('no-copy');
  createCanvas(1280, 500);
  background('rgba(0, 0, 0, 0.05)');
  black = new hoverText("Black", 50, height / 2, 115, 228, 160, 70);
  white = new hoverText("White", 250, height / 2, 320, 228, 160, 70, 20);
  ba = new hoverText("Black and Alpha", 450, height / 2, 625, 228, 370, 90, 20);
  wa = new hoverText("White and Alpha", 850, height / 2, 1035, 228, 390, 90, 20);
  button = createButton('Download!');
  button.style('background-color', 'rgba(76, 175, 80, 50)');
  button.class('no-copy');
  button.size(100, 50);
  button.mouseOver(onTop).mouseOut(outside);
  button.mousePressed(function () {
    download_csv(data);
  });




  // loadFont(urlF, succ(), ugh());
  pickColor();

  // body.style.background = 'linear-gradient(to right, black , yellow)';
}

// function succ() {
//   console.log("Succ!");
// }
// function ugh() {
//   console.log("yikes");
// }


function mousePressed() {
  let newData = [Math.round(r), Math.round(g), Math.round(b), Math.round(r1), Math.round(g1), Math.round(b1)];
  black.clicked(mouseX, data, newData);
  white.clicked(mouseX, data, newData);
  ba.clicked(mouseX, data, newData);
  wa.clicked(mouseX, data, newData);
  pickColor();

}

function pickColor() {
  if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
    r = random(255);
    g = random(255);
    b = random(255);
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);

    body.style.background = 'linear-gradient(to right, rgb(' + r + ', ' + g + ', ' + b + ') , rgb(' + r1 + ', ' + g1 + ', ' + b1 + '))';
    css.textContent = body.style.background + ";";

  }



}





function onTop() {
  this.style('background-color', 'rgb(255,255,255)');
}

function outside() {
  this.style('background-color', 'rgba(76, 175, 80, 50)');
}

function draw() {
  // noLoop();
  clear();
  background('rgba(0, 0, 0, 0.05)');
  fill(0);
  textSize(40);
  textFont('Pacifico');

  black.displayText();
  black.mouseIsOver(mouseX);

  white.displayText();
  white.mouseIsOver(mouseX);

  ba.displayText();
  ba.mouseIsOver(mouseX);

  wa.displayText();
  wa.mouseIsOver(mouseX);


}



