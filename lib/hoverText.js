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
                text(this.text, this.x, this.y);
                break;
            case "White":
                fill(255);
                text(this.text, this.x, this.y);
                break;
            case "Black and Alpha":
                fill(0, 0, 0, 180);
                text(this.text, this.x, this.y);
                break;
            case "White and Alpha":
                fill(255, 255, 255, 180);
                text(this.text, this.x, this.y);
                break;
            default:
                console.log("yo mama");
                break;
        }

    }

    recordData(data, newData) {
        switch (this.text) {
            case "Black":
                newData.push(0);
                break;
            case "White":
                newData.push(1);
                break;
            case "Black and Alpha":
                newData.push(2);
                break;
            case "White and Alpha":
                newData.push(3);
                break;
            default:
                newData.push(-1);
                break;

        }
        console.log(newData);
        data.push(newData);
    
    }
   




        clicked(px, data, newData) {
            let wHalf = this.w / 2
            let xMin = this.x1 - wHalf;
            let xMax = this.x1 + wHalf;
            if (this.mouseIsOver(px) === true) {
                console.log(this.text);
                this.recordData(data, newData);
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
                rect(this.x1, this.y1, this.w, this.h, 20);
                return true;
            }

            return false;


        }


    }