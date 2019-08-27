class hoverText {
    constructor(text, x, y, x1, y1, w, h) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
        this.w = w;
        this.h = h;
    }




    displayText() {
        textSize(40);
        textFont('Pacifico');
        switch (this.text) {
            case "Black":
                fill(0);
                noStroke();
                text(this.text, this.x, this.y);
                break;
            case "White":
                fill(255);
                noStroke();
                text(this.text, this.x, this.y);
                break;
            case "Black and Alpha":
                fill(0, 0, 0, 180);
                noStroke();
                text(this.text, this.x, this.y);
                break;
            case "White and Alpha":
                fill(255, 255, 255, 180);
                noStroke();
                text(this.text, this.x, this.y);
                break;
            default:
                console.log("yo mama");
                break;
        }

    }

    recordData(newData) {
        let targets;
        switch (this.text) {
            case "Black":
                targets = [1, 0, 0, 0];
                brain.train(newData, targets);
                // which = 0;
                break;
            case "White":
                targets = [0, 1, 0, 0];
                brain.train(newData, targets);
                // which = 1;
                break;
            case "Black and Alpha":
                targets = [0, 0, 1, 0];
                brain.train(newData, targets);
                // which = 2;
                break;
            case "White and Alpha":
                targets = [0, 0, 0, 1];
                brain.train(newData, targets);
              
                break;
            default:
                break;

        }
    
    }
   




        clicked(px, newData) {
            let wHalf = this.w / 2
            let xMin = this.x1 - wHalf;
            let xMax = this.x1 + wHalf;
            if (this.mouseIsOver(px) === true) {
                console.log(this.text);
                this.recordData(newData);
            }

        }





        mouseIsOver(px) {
            // console.log(px + ', ' + py);
            let wHalf = this.w / 2
            let xMin = this.x1 - wHalf;
            let xMax = this.x1 + wHalf;


            rectMode(CENTER);

            //Here I gave up trying to make a hover zone around, instead am going to split it based on x values
            // if ((py > yMin && py < yMax)) {
            //     // console.log("part 1");
            //     // if ((dist(px, py, this.x1, this.y1) <= wHalf)) {
            //         console.log('printing in y');
            //         noFill();
            //         rect(this.x1, this.y1, this.w, this.h, 20);
            //         return;
            //     // }
            // }
            if ((px > xMin && px < xMax) && (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0)) {

                noFill();
                stroke(0);
                rect(this.x1, this.y1, this.w, this.h, 20);
                return true;
            }

            return false;


        }


    }