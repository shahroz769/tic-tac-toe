let playerOne = "O"
let playerTwo = "X"
let mark = "o"
let xMark = 2
let oMark = 1
let image1 = document.getElementById("box1")
let image2 = document.getElementById("box2")
let image3 = document.getElementById("box3")
let image4 = document.getElementById("box4")
let image5 = document.getElementById("box5")
let image6 = document.getElementById("box6")
let image7 = document.getElementById("box7")
let image8 = document.getElementById("box8")
let image9 = document.getElementById("box9")
let xCounter = document.getElementById('xCounter') 
let oCounter = document.getElementById('oCounter') 
let tiesCounter = document.getElementById('tiesCounter')
let xCountNum = +xCounter.textContent
let oCountNum = +oCounter.textContent
let tiesCountNum = +tiesCounter.textContent

// function to go to game start page
function newgamevsplayer() {
    document.getElementById('menucontent').style.display = "none"
    document.getElementById('gamecontent').style.display = "flex"
}

function xTurn() {
    document.getElementById('xTurn').style.backgroundColor = "var(--clr-white-100--)"
    document.getElementById('yTurn').style.backgroundColor = "var(--clr-black-100--)"
    document.getElementById('firstturn').textContent = "REMEMBER: X GOES FIRST"
    document.getElementById('turnImg').src = "./assets/icon-x.svg"
    document.getElementById('firstturn').style.visibility = "initial"
    playerOne = "X"
    playerTwo = "O"
    mark = "x"
    xMark = 1
    oMark = 2
    document.getElementById('xSpan').textContent = "(P1)"
    document.getElementById('oSpan').textContent = "(P2)"
}

function yTurn() {
    document.getElementById('yTurn').style.backgroundColor = "var(--clr-white-100--)"
    document.getElementById('xTurn').style.backgroundColor = "var(--clr-black-100--)"
    document.getElementById('firstturn').textContent = "REMEMBER: O GOES FIRST"
    document.getElementById('turnImg').src = "./assets/icon-o.svg"
    document.getElementById('firstturn').style.visibility = "initial"
    playerOne = "O"
    playerTwo = "X"
    mark = "o"
    xMark = 2
    oMark = 1
    document.getElementById('xSpan').textContent = "(P2)"
    document.getElementById('oSpan').textContent = "(P1)"
}

// function to draw mark
function drawMark(boxNumber) {
    switch (boxNumber) {
        case 1:
            if (image1.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box1").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 2:
            if (image2.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box2").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 3:
            if (image3.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box3").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 4:
            if (image4.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box4").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 5:
            if (image5.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box5").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 6:
            if (image6.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box6").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 7:
            if (image7.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box7").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 8:
            if (image8.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box8").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
        case 9:
            if (image9.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box9").src = "./assets/icon-" + mark + ".svg"
                if (mark == "x") {
                    mark = "o"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                } else {
                    mark = "x"
                    document.getElementById('turnImg').src = "./assets/icon-" + mark + ".svg"
                }
            }
            break;
    }
}
// function to check win or draw
function winOrDraw() {
    if (image1.src.includes("icon-x") && image2.src.includes("icon-x") && image3.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image4.src.includes("icon-x") && image5.src.includes("icon-x") && image6.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image7.src.includes("icon-x") && image8.src.includes("icon-x") && image9.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image1.src.includes("icon-x") && image4.src.includes("icon-x") && image7.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image2.src.includes("icon-x") && image5.src.includes("icon-x") && image8.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image3.src.includes("icon-x") && image6.src.includes("icon-x") && image9.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image1.src.includes("icon-x") && image5.src.includes("icon-x") && image9.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image3.src.includes("icon-x") && image5.src.includes("icon-x") && image7.src.includes("icon-x")) {
        document.getElementById('winImg').src = "./assets/icon-x.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image1.src.includes("icon-o") && image2.src.includes("icon-o") && image3.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image4.src.includes("icon-o") && image5.src.includes("icon-o") && image6.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image7.src.includes("icon-o") && image8.src.includes("icon-o") && image9.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image1.src.includes("icon-o") && image4.src.includes("icon-o") && image7.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image2.src.includes("icon-o") && image5.src.includes("icon-o") && image8.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image3.src.includes("icon-o") && image6.src.includes("icon-o") && image9.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image1.src.includes("icon-o") && image5.src.includes("icon-o") && image9.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image3.src.includes("icon-o") && image5.src.includes("icon-o") && image7.src.includes("icon-o")) {
        document.getElementById('winImg').src = "./assets/icon-o.svg"
        document.getElementById('winPopup').style.display = "flex"
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image1.src.includes("icon") && image2.src.includes("icon") && image3.src.includes("icon") && image4.src.includes("icon") && image5.src.includes("icon") && image6.src.includes("icon") && image7.src.includes("icon") && image8.src.includes("icon") && image9.src.includes("icon")) {
        tiesCountNum = tiesCountNum + 1
        document.getElementById('tiesCounter').textContent = tiesCountNum
        document.getElementById('drawPopup').style.display = "flex"
    }
}


// Function to quit game and go back to first page
function quitGame() {
    document.getElementById('winPopup').style.display = "none"
    document.getElementById('drawPopup').style.display = "none"
    document.getElementById('gamecontent').style.display = "none"
    document.getElementById('menucontent').style.display = "flex"
    xCountNum = 0
    oCountNum = 0
    tiesCountNum = 0
    document.getElementById('xCounter').textContent = xCountNum
    document.getElementById('oCounter').textContent = oCountNum
    document.getElementById('tiesCounter').textContent = tiesCountNum
    image1.src = ""
    image2.src = ""
    image3.src = ""
    image4.src = ""
    image5.src = ""
    image6.src = ""
    image7.src = ""
    image8.src = ""
    image9.src = ""
}

function restartPopup() {
    document.getElementById('restartWindow').style.display = "flex"
}

function cancelRestart() {
    document.getElementById('restartWindow').style.display = "none"
}

function yesRestart() {
    document.getElementById('restartWindow').style.display = "none"
    image1.src = ""
    image2.src = ""
    image3.src = ""
    image4.src = ""
    image5.src = ""
    image6.src = ""
    image7.src = ""
    image8.src = ""
    image9.src = ""
}

// Function to restart game and go back to play page
function restartGame() {
    document.getElementById('winPopup').style.display = "none"
    document.getElementById('drawPopup').style.display = "none"
    image1.src = ""
    image2.src = ""
    image3.src = ""
    image4.src = ""
    image5.src = ""
    image6.src = ""
    image7.src = ""
    image8.src = ""
    image9.src = ""
}

// Function to advance to next round
function nextRound() {
    document.getElementById('winPopup').style.display = "none"
    document.getElementById('drawPopup').style.display = "none"
    image1.src = ""
    image2.src = ""
    image3.src = ""
    image4.src = ""
    image5.src = ""
    image6.src = ""
    image7.src = ""
    image8.src = ""
    image9.src = ""
}