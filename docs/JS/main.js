var scorePlayer = 0;
var scoreBot = 0;

const cellSize = 100;
const lineWidth = 2;

var board = [[],[],[]];

const x = "X";
const o = "O";

var turn = x;
var playerSymbol;
if (Math.random() >= 0.5) {
    playerSymbol = x;
} else {
    playerSymbol = o;
}
document.getElementById("gameAnnouncement").innerHTML = "You are playing with: " + playerSymbol;

var xImg = new Image();
var oImg = new Image();
xImg.src = "./images/x.png";
oImg.src = "./images/o.png";




//document.getElementById("cell1-1").appendChild(oImg);

const canvas = document.getElementById("gameField");
const ctx = canvas.getContext("2d");

function switchTurn () {
    if (turn == x) {
        turn = o;
    } else {
        turn = x;
    }
}


ctx.strokeStyle = "#00ffff";
ctx.lineWidth = lineWidth;
ctx.moveTo(0, cellSize);
ctx.lineTo(cellSize * 3 + lineWidth * 2, cellSize);



function draw () {
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            if (board[i][k] == x) {
                document.getElementById("cell" + (i+1) + "-" + (k+1)).appendChild(xImg);
            } else if (board[i][k] == o) {
                document.getElementById("cell" + (i + 1) + "-" + (k + 1)).innerHTML = oImg;
            }
        }
    }
}

function reset () {
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {

            document.getElementById("cell" + (i + 1) + "-" + (k + 1)).innerHTML = "";

        }
    }
}
