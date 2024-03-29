let r, g, b, r1, g1, b1;
// let body = document.getElementById("grad");
let data = [];
let css = document.querySelector("h3");

let body = document.getElementById("grad");
let black, white, ba, wa;

let which = 0;
let brain;
let inputs;

function setup() {
  brain = new NeuralNetwork(6, 6, 4);
  // let intro = createP("Hello, please upload the CSV file you've recieved from the trainer or click on Train to test the neural network with pre-determined logic!");
  // intro.style('font-family', 'Livvic', 'sans-serif');
  // intro.style('margin-bottom', '50px');
  // intro.class('no-copy');

  createCanvas(1280, 500);
  background('rgba(0, 0, 0, 0.05)');
  black = new hoverText("Black", 50, height / 2, 115, 228, 160, 70);
  white = new hoverText("White", 250, height / 2, 320, 228, 160, 70, 20);
  ba = new hoverText("Black and Alpha", 450, height / 2, 625, 228, 370, 90, 20);
  wa = new hoverText("White and Alpha", 850, height / 2, 1035, 228, 390, 90, 20);
  // button = createButton('Download!');
  // button.style('background-color', 'rgba(76, 175, 80, 50)');
  // button.class('no-copy');
  // button.size(100, 50);
  // button.mouseOver(onTop).mouseOut(outside);
  // button.mousePressed(function () {
  //   download_csv(data);
  // });




  pickColor();


}



function mousePressed() {
  inputs = [Math.round(r), Math.round(g), Math.round(b), Math.round(r1), Math.round(g1), Math.round(b1)];
  black.clicked(mouseX, data, inputs);
  white.clicked(mouseX, data, inputs);
  ba.clicked(mouseX, data, inputs);
  wa.clicked(mouseX, data, inputs);
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
    let sumColor = r + g + b + r1 + g1 + b1;
    body.style.background = 'linear-gradient(to right, rgb(' + r + ', ' + g + ', ' + b + ') , rgb(' + r1 + ', ' + g1 + ', ' + b1 + '))';
    css.textContent = body.style.background + "; sum is " + sumColor;

  }



}



function onTop() {
  this.style('background-color', 'rgb(255,255,255)');
}

function outside() {
  this.style('background-color', 'rgba(76, 175, 80, 50)');
}


//predicts which color is best with the information given to the Neural network
function colorPredictor(r, g, b, r1, b1, g1) {
  inputs = [Math.round(r) / 255, Math.round(g) / 255, Math.round(b) / 255, Math.round(r1) / 255, Math.round(g1) / 255, Math.round(b1) / 255];
  let outputs = brain.predict(inputs);
  if (outputs[0] > outputs[1] && outputs[0] > outputs[2] && outputs[0] > outputs[3]) {
    return 0;
  } else if (outputs[1] > outputs[0] && outputs[1] > outputs[2] && outputs[1] > outputs[3]) {
    return 1;
  } else if (outputs[2] > outputs[0] && outputs[2] > outputs[1] && outputs[2] > outputs[3]) {
    return 2;
  } else {
    return 3;
  }
  // console.log(outputs);

}


//trains using predetermined logic
function trainPredictor() {
  
  for (let i = 0; i < 10000; i++) {
    r = random(255);
    g = random(255);
    b = random(255);
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    let sumColor = r + g + b + r1 + g1 + b1;
    inputs = [Math.round(r) / 255, Math.round(g) / 255, Math.round(b) / 255, Math.round(r1) / 255, Math.round(g1) / 255, Math.round(b1) / 255];
    if (sumColor < 700) {
      brain.train(inputs, [0, 1, 0, 0]);
    } else if (sumColor > 700 && sumColor < 900) {
      brain.train(inputs, [0, 0, 0, 1]);
    } else if (sumColor > 1000 && sumColor < 1200) {
      brain.train(inputs, [0, 0, 1, 0]);
    } else {
      brain.train(inputs, [1, 0, 0, 0]);
    }

  }


}

//trains using data created from trainer page
function trainData(tData) {
  let result;
  data = tData;
  data.pop();
  for (let i = 1; i < tData.length - 1; i++) {
    inputs = [tData[i][0], tData[i][1], tData[i][2], tData[i][3], tData[i][4], tData[i][5]];
    console.log(inputs);
    let output = tData[i][6];
    console.log(output);
    switch (output) {
      case 0:
        result = [1, 0, 0, 0];
        brain.train(inputs, result);
        break;
      case 1:
        result = [0, 1, 0, 0];
        brain.train(inputs, result);
        break;
      case 2:
        result = [0, 0, 1, 0];
        brain.train(inputs, result);
        break;
      case 3:
        result = [0, 0, 0, 1];
        brain.train(inputs, result);
        break;
      default:
        break;

    }


  }

}


function downloadData(){
  download_csv(data);
}


//draws circle of what the computer thinks is the answer
function drawPicked() {
  if (which === 0) {
    fill(0);
    noStroke();
    ellipse(120, 350, 60);

  } else if (which === 1) {
    fill(255);
    noStroke();
    ellipse(325, 350, 60);

  } else if (which === 2) {
    fill(0, 0, 0, 180);
    noStroke();
    ellipse(620, 350, 60);

  } else {
    fill(255, 255, 255, 180);
    noStroke();
    ellipse(1030, 350, 60);

  }

}



function draw() {
  // noLoop();
  clear();
  background('rgba(0, 0, 0, 0.05)');
  fill(0);
  textSize(40);
  textFont('Pacifico');
  which = colorPredictor(r, g, b, r1, b1, g1);

  drawPicked();



  black.displayText();
  black.mouseIsOver(mouseX);

  white.displayText();
  white.mouseIsOver(mouseX);

  ba.displayText();
  ba.mouseIsOver(mouseX);

  wa.displayText();
  wa.mouseIsOver(mouseX);




}



