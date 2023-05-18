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
    let tl = gsap.timeline({ defaults: { duration: 1 } })
    tl
        .to('#menucontent', { x: -75, opacity: 0, duration: .4 })
        .fromTo('#gamecontent', { x: 75, opacity: 0 }, { x: 0, opacity: 1, duration: .4 })
    setTimeout(function () {
        document.getElementById('menucontent').style.display = "none"
    }, 401)
    setTimeout(function () {
        document.getElementById('gamecontent').style.display = "flex"
    }, 401)
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

// function to draw mark outline
function drawOutline(boxNumber) {
    switch (boxNumber) {
        case 1:
            if (image1.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box1").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 2:
            if (image2.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box2").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 3:
            if (image3.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box3").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 4:
            if (image4.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box4").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 5:
            if (image5.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box5").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 6:
            if (image6.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box6").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 7:
            if (image7.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box7").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 8:
            if (image8.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box8").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
        case 9:
            if (image9.src.includes("assets")) {
                return;
            } else {
                document.getElementById("box9").src = "./assets/icon-" + mark + "-outline.svg"
            }
            break;
    }
}

// function to remove mark outline
function removeOutline(boxNumber) {
    switch (boxNumber) {
        case 1:
            if (image1.src.includes("outline")) {
                document.getElementById("box1").src = ""
            } else {
                return;
            }
            break;
        case 2:
            if (image2.src.includes("outline")) {
                document.getElementById("box2").src = ""
            } else {
                return;
            }
            break;
        case 3:
            if (image3.src.includes("outline")) {
                document.getElementById("box3").src = ""
            } else {
                return;
            }
            break;
        case 4:
            if (image4.src.includes("outline")) {
                document.getElementById("box4").src = ""
            } else {
                return;
            }
            break;
        case 5:
            if (image5.src.includes("outline")) {
                document.getElementById("box5").src = ""
            } else {
                return;
            }
            break;
        case 6:
            if (image6.src.includes("outline")) {
                document.getElementById("box6").src = ""
            } else {
                return;
            }
            break;
        case 7:
            if (image7.src.includes("outline")) {
                document.getElementById("box7").src = ""
            } else {
                return;
            }
            break;
        case 8:
            if (image8.src.includes("outline")) {
                document.getElementById("box8").src = ""
            } else {
                return;
            }
            break;
        case 9:
            if (image9.src.includes("outline")) {
                document.getElementById("box9").src = ""
            } else {
                return;
            }
            break;
    }
}

// function to draw mark
function drawMark(boxNumber) {
    switch (boxNumber) {
        case 1:
            if (!image1.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box1").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box1', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image2.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box2").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box2', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image3.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box3").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box3', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image4.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box4").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box4', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image5.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box5").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box5', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image6.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box6").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box6', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image7.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box7").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box7', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image8.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box8").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box8', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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
            if (!image9.src.includes("outline")) {
                return;
            } else {
                document.getElementById("box9").src = "./assets/icon-" + mark + ".svg"
                gsap.fromTo('#box9', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power4.out" })
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

function winPopup() {
    document.getElementById('winPopup').style.display = "flex"
    gsap.fromTo('.takes-round, .restart-window', { y: -75, opacity: 0 }, { y: 0, opacity: 1, duration: .5 })
}

function tiePopup() {
    document.getElementById('drawPopup').style.display = "flex"
    gsap.fromTo('.takes-round, .restart-window', { y: -75, opacity: 0 }, { y: 0, opacity: 1, duration: .5 })
}

// function to check win or draw
function winOrDraw() {
    let mainGame = document.querySelector('.main-game')
    if (image1.src.includes("icon-x") && image2.src.includes("icon-x") && image3.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            gsap.fromTo('.box1, .box2, .box3', { 'clip-path': 'circle(0% at 0% 50%)' }, { 'clip-path': 'circle(112% at 0% 50%)', duration: .5, stagger: .4 })
            document.getElementById("box1").src = "./assets/icon-x-dark.png"
            document.getElementById("box2").src = "./assets/icon-x-dark.png"
            document.getElementById("box3").src = "./assets/icon-x-dark.png"
            document.querySelector('.box1').style.backgroundColor = "#18a09b"
            document.querySelector('.box2').style.backgroundColor = "#18a09b"
            document.querySelector('.box3').style.backgroundColor = "#18a09b"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image4.src.includes("icon-x") && image5.src.includes("icon-x") && image6.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            gsap.fromTo('.box4, .box5, .box6', { 'clip-path': 'circle(0% at 0% 50%)' }, { 'clip-path': 'circle(112% at 0% 50%)', duration: .5, stagger: .4 })
            document.querySelector('.box4').style.backgroundColor = "#18a09b"
            document.querySelector('.box5').style.backgroundColor = "#18a09b"
            document.querySelector('.box6').style.backgroundColor = "#18a09b"
            document.getElementById("box4").src = "./assets/icon-x-dark.png"
            document.getElementById("box5").src = "./assets/icon-x-dark.png"
            document.getElementById("box6").src = "./assets/icon-x-dark.png"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image7.src.includes("icon-x") && image8.src.includes("icon-x") && image9.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box7").src = "./assets/icon-x-dark.png"
            document.getElementById("box8").src = "./assets/icon-x-dark.png"
            document.getElementById("box9").src = "./assets/icon-x-dark.png"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
            gsap.fromTo('.box7, .box8, .box9', { 'clip-path': 'circle(0% at 0% 50%)' }, { 'clip-path': 'circle(112% at 0% 50%)', duration: .5, stagger: .4 })
            document.querySelector('.box7').style.backgroundColor = "#18a09b"
            document.querySelector('.box8').style.backgroundColor = "#18a09b"
            document.querySelector('.box9').style.backgroundColor = "#18a09b"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image1.src.includes("icon-x") && image4.src.includes("icon-x") && image7.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box1").src = "./assets/icon-x-dark.png"
            document.getElementById("box4").src = "./assets/icon-x-dark.png"
            document.getElementById("box7").src = "./assets/icon-x-dark.png"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
            gsap.fromTo('.box1, .box4, .box7', { 'clip-path': 'circle(0% at 50% 0%)' }, { 'clip-path': 'circle(112% at 50% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box1').style.backgroundColor = "#18a09b"
            document.querySelector('.box4').style.backgroundColor = "#18a09b"
            document.querySelector('.box7').style.backgroundColor = "#18a09b"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image2.src.includes("icon-x") && image5.src.includes("icon-x") && image8.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box2").src = "./assets/icon-x-dark.png"
            document.getElementById("box5").src = "./assets/icon-x-dark.png"
            document.getElementById("box8").src = "./assets/icon-x-dark.png"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
            gsap.fromTo('.box2, .box5, .box8', { 'clip-path': 'circle(0% at 50% 0%)' }, { 'clip-path': 'circle(112% at 50% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box2').style.backgroundColor = "#18a09b"
            document.querySelector('.box5').style.backgroundColor = "#18a09b"
            document.querySelector('.box8').style.backgroundColor = "#18a09b"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image3.src.includes("icon-x") && image6.src.includes("icon-x") && image9.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box3").src = "./assets/icon-x-dark.png"
            document.getElementById("box6").src = "./assets/icon-x-dark.png"
            document.getElementById("box9").src = "./assets/icon-x-dark.png"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
            gsap.fromTo('.box3, .box6, .box9', { 'clip-path': 'circle(0% at 50% 0%)' }, { 'clip-path': 'circle(112% at 50% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box3').style.backgroundColor = "#18a09b"
            document.querySelector('.box6').style.backgroundColor = "#18a09b"
            document.querySelector('.box9').style.backgroundColor = "#18a09b"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image1.src.includes("icon-x") && image5.src.includes("icon-x") && image9.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box1").src = "./assets/icon-x-dark.png"
            document.getElementById("box5").src = "./assets/icon-x-dark.png"
            document.getElementById("box9").src = "./assets/icon-x-dark.png"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
            gsap.fromTo('.box1, .box5, .box9', { 'clip-path': 'circle(0.0% at 0% 0%)' }, { 'clip-path': 'circle(142% at 0% 0%)', stagger: .4 })
            document.querySelector('.box1').style.backgroundColor = "#18a09b"
            document.querySelector('.box5').style.backgroundColor = "#18a09b"
            document.querySelector('.box9').style.backgroundColor = "#18a09b"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image3.src.includes("icon-x") && image5.src.includes("icon-x") && image7.src.includes("icon-x")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box3").src = "./assets/icon-x-dark.png"
            document.getElementById("box5").src = "./assets/icon-x-dark.png"
            document.getElementById("box7").src = "./assets/icon-x-dark.png"
            document.getElementById('winImg').src = "./assets/icon-x.svg"
            gsap.fromTo('.box3, .box5, .box7', { 'clip-path': 'circle(0% at 100% 0%)' }, { 'clip-path': 'circle(142% at 100% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box3').style.backgroundColor = "#18a09b"
            document.querySelector('.box5').style.backgroundColor = "#18a09b"
            document.querySelector('.box7').style.backgroundColor = "#18a09b"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#31C3BD"
        document.getElementById('playerWinText').textContent = "PLAYER " + xMark + " WINS!"
        xCountNum = xCountNum + 1
        document.getElementById('xCounter').textContent = xCountNum
    } else if (image1.src.includes("icon-o") && image2.src.includes("icon-o") && image3.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box1").src = "./assets/icon-o-dark.png"
            document.getElementById("box2").src = "./assets/icon-o-dark.png"
            document.getElementById("box3").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box1, .box2, .box3', { 'clip-path': 'circle(0% at 0% 50%)' }, { 'clip-path': 'circle(112% at 0% 50%)', duration: .5, stagger: .4 })
            document.querySelector('.box1').style.backgroundColor = "#FFC860"
            document.querySelector('.box2').style.backgroundColor = "#FFC860"
            document.querySelector('.box3').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image4.src.includes("icon-o") && image5.src.includes("icon-o") && image6.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box4").src = "./assets/icon-o-dark.png"
            document.getElementById("box5").src = "./assets/icon-o-dark.png"
            document.getElementById("box6").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box4, .box5, .box6', { 'clip-path': 'circle(0% at 0% 50%)' }, { 'clip-path': 'circle(112% at 0% 50%)', duration: .5, stagger: .4 })
            document.querySelector('.box4').style.backgroundColor = "#FFC860"
            document.querySelector('.box5').style.backgroundColor = "#FFC860"
            document.querySelector('.box6').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image7.src.includes("icon-o") && image8.src.includes("icon-o") && image9.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box7").src = "./assets/icon-o-dark.png"
            document.getElementById("box8").src = "./assets/icon-o-dark.png"
            document.getElementById("box9").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box7, .box8, .box9', { 'clip-path': 'circle(0% at 0% 50%)' }, { 'clip-path': 'circle(112% at 0% 50%)', duration: .5, stagger: .4 })
            document.querySelector('.box7').style.backgroundColor = "#FFC860"
            document.querySelector('.box8').style.backgroundColor = "#FFC860"
            document.querySelector('.box9').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image1.src.includes("icon-o") && image4.src.includes("icon-o") && image7.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box1").src = "./assets/icon-o-dark.png"
            document.getElementById("box4").src = "./assets/icon-o-dark.png"
            document.getElementById("box7").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box1, .box4, .box7', { 'clip-path': 'circle(0% at 50% 0%)' }, { 'clip-path': 'circle(112% at 50% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box1').style.backgroundColor = "#FFC860"
            document.querySelector('.box4').style.backgroundColor = "#FFC860"
            document.querySelector('.box7').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image2.src.includes("icon-o") && image5.src.includes("icon-o") && image8.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box2").src = "./assets/icon-o-dark.png"
            document.getElementById("box5").src = "./assets/icon-o-dark.png"
            document.getElementById("box8").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box2, .box5, .box8', { 'clip-path': 'circle(0% at 50% 0%)' }, { 'clip-path': 'circle(112% at 50% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box2').style.backgroundColor = "#FFC860"
            document.querySelector('.box5').style.backgroundColor = "#FFC860"
            document.querySelector('.box8').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image3.src.includes("icon-o") && image6.src.includes("icon-o") && image9.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box3").src = "./assets/icon-o-dark.png"
            document.getElementById("box6").src = "./assets/icon-o-dark.png"
            document.getElementById("box9").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box3, .box6, .box9', { 'clip-path': 'circle(0% at 50% 0%)' }, { 'clip-path': 'circle(112% at 50% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box3').style.backgroundColor = "#FFC860"
            document.querySelector('.box6').style.backgroundColor = "#FFC860"
            document.querySelector('.box9').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image1.src.includes("icon-o") && image5.src.includes("icon-o") && image9.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box1").src = "./assets/icon-o-dark.png"
            document.getElementById("box5").src = "./assets/icon-o-dark.png"
            document.getElementById("box9").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box1, .box5, .box9', { 'clip-path': 'circle(0.0% at 0% 0%)' }, { 'clip-path': 'circle(142% at 0% 0%)', stagger: .4 })
            document.querySelector('.box1').style.backgroundColor = "#FFC860"
            document.querySelector('.box5').style.backgroundColor = "#FFC860"
            document.querySelector('.box9').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image3.src.includes("icon-o") && image5.src.includes("icon-o") && image7.src.includes("icon-o")) {
        mainGame.style.pointerEvents = 'none'
        setTimeout(function () {
            document.getElementById("box3").src = "./assets/icon-o-dark.png"
            document.getElementById("box5").src = "./assets/icon-o-dark.png"
            document.getElementById("box7").src = "./assets/icon-o-dark.png"
            document.getElementById('winImg').src = "./assets/icon-o.svg"
            gsap.fromTo('.box3, .box5, .box7', { 'clip-path': 'circle(0% at 100% 0%)' }, { 'clip-path': 'circle(142% at 100% 0%)', duration: .5, stagger: .4 })
            document.querySelector('.box3').style.backgroundColor = "#FFC860"
            document.querySelector('.box5').style.backgroundColor = "#FFC860"
            document.querySelector('.box7').style.backgroundColor = "#FFC860"
        }, 500)
        setTimeout(winPopup, 2000)
        document.getElementById('winText').style.color = "#F2B137"
        document.getElementById('playerWinText').textContent = "PLAYER " + oMark + " WINS!"
        oCountNum = oCountNum + 1
        document.getElementById('oCounter').textContent = oCountNum
    } else if (image1.src.includes("icon") && image2.src.includes("icon") && image3.src.includes("icon") && image4.src.includes("icon") && image5.src.includes("icon") && image6.src.includes("icon") && image7.src.includes("icon") && image8.src.includes("icon") && image9.src.includes("icon")) {
        tiesCountNum = tiesCountNum + 1
        document.getElementById('tiesCounter').textContent = tiesCountNum
        setTimeout(tiePopup, 500)
    }
}

// Function to quit game and go back to first page
function quitGame() {
    document.querySelector('.main-game').style.pointerEvents = ""
    gsap.to('#menucontent', { x: 0, opacity: 1, duration: .4 })
    document.getElementById('winPopup').style.display = "none"
    document.getElementById('drawPopup').style.display = "none"
    document.getElementById('gamecontent').style.display = "none"
    document.getElementById('menucontent').style.display = "flex"
    document.getElementById('restartWindow').style.display = "none"
    document.querySelector('.box1').style.backgroundColor = "#1F3641"
    document.querySelector('.box2').style.backgroundColor = "#1F3641"
    document.querySelector('.box3').style.backgroundColor = "#1F3641"
    document.querySelector('.box4').style.backgroundColor = "#1F3641"
    document.querySelector('.box5').style.backgroundColor = "#1F3641"
    document.querySelector('.box6').style.backgroundColor = "#1F3641"
    document.querySelector('.box7').style.backgroundColor = "#1F3641"
    document.querySelector('.box8').style.backgroundColor = "#1F3641"
    document.querySelector('.box9').style.backgroundColor = "#1F3641"
    document.getElementById('xCounter').textContent = 0
    document.getElementById('oCounter').textContent = 0
    document.getElementById('tiesCounter').textContent = 0
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
function restartPopup() {
    document.getElementById('restartWindow').style.display = "flex"
    gsap.fromTo('.takes-round, .restart-window', { y: -75, opacity: 0 }, { y: 0, opacity: 1, duration: .5 })
}

function cancelRestart() {
    document.querySelector('.main-game').style.pointerEvents = ""
    gsap.to('.takes-round, .restart-window', { y: 75, opacity: 0, duration: .5 })
    setTimeout(() => {
        document.getElementById('restartWindow').style.display = "none"
    }, 300);
}

function yesRestart() {
    document.querySelector('.main-game').style.pointerEvents = ""
    gsap.to('.takes-round, .restart-window', { y: 75, opacity: 0, duration: .5 })
    setTimeout(() => {
        document.getElementById('restartWindow').style.display = "none"
    }, 300);
    document.querySelector('.box1').style.backgroundColor = "#1F3641"
    document.querySelector('.box2').style.backgroundColor = "#1F3641"
    document.querySelector('.box3').style.backgroundColor = "#1F3641"
    document.querySelector('.box4').style.backgroundColor = "#1F3641"
    document.querySelector('.box5').style.backgroundColor = "#1F3641"
    document.querySelector('.box6').style.backgroundColor = "#1F3641"
    document.querySelector('.box7').style.backgroundColor = "#1F3641"
    document.querySelector('.box8').style.backgroundColor = "#1F3641"
    document.querySelector('.box9').style.backgroundColor = "#1F3641"
    document.getElementById('xCounter').textContent = 0
    document.getElementById('oCounter').textContent = 0
    document.getElementById('tiesCounter').textContent = 0
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
    gsap.to('.takes-round, .restart-window', { y: 75, opacity: 1, duration: .5 })
    document.querySelector('.main-game').style.pointerEvents = ""
    setTimeout(() => {
        document.getElementById('winPopup').style.display = "none"
        document.getElementById('drawPopup').style.display = "none"
    }, 300);
    document.querySelector('.box1').style.backgroundColor = "#1F3641"
    document.querySelector('.box2').style.backgroundColor = "#1F3641"
    document.querySelector('.box3').style.backgroundColor = "#1F3641"
    document.querySelector('.box4').style.backgroundColor = "#1F3641"
    document.querySelector('.box5').style.backgroundColor = "#1F3641"
    document.querySelector('.box6').style.backgroundColor = "#1F3641"
    document.querySelector('.box7').style.backgroundColor = "#1F3641"
    document.querySelector('.box8').style.backgroundColor = "#1F3641"
    document.querySelector('.box9').style.backgroundColor = "#1F3641"
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