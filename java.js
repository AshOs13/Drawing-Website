

let drawSize = 1
let currentColorCode = '#000000'
let currentListColorCode = '#000000'
let colorList = []
let colorNumber = -1
let drawColor = 11
let background = 0
let x = 1
let bPressed = 0
let header=`<form> \
  <h2>Brush Size: ${Math.round(drawSize*10)}</h2> \
</form>`;

function setup() {
    document.getElementById("Header").innerHTML = header;
    createCanvas(1400, 620);
    circleClass()
  }
function headerDisplay() {
    header=`<form> \
    <h2>Brush Size: ${Math.round(drawSize*10)}</h2> \
  </form>`;

  document.getElementById("Header").innerHTML = header;
  }
function increaseSize() {
  drawSize = drawSize + 0.1
  console.log(`drawSize now ${drawSize}`)
  headerDisplay()
}
function decreaseSize() {
  if (drawSize >= 0.1) {
  drawSize = drawSize - 0.1
  console.log(`drawSize now ${drawSize}`)
  headerDisplay()
  }
}
function megaIncrease () {
  drawSize = drawSize + 1
  console.log(`drawSize now ${drawSize}`)
  headerDisplay()
}
function megaDecrease () {
  if (drawSize >= 1) {
  drawSize = drawSize - 1
  console.log(`drawSize now ${drawSize}`)
  headerDisplay()
  }
}
function yesNo() {
  bPressed = 1
}

function back() {
  if (colorNumber > 0) {
  colorNumber = colorNumber - 1
  console.log('Undid color')
  currentListColorCode = colorList[colorNumber]
  }
  else {
    console.log(`Cannot undo color (${colorList.length} in list)`)
  }
}

function forward() {
  if (colorNumber < colorList.length - 1) {
    colorNumber = colorNumber + 1
    console.log('Redid color')
    currentListColorCode = colorList[colorNumber]
  }
  else {
    console.log(`Cannot redo color (${colorList.length} in list)`)
  }
}

function draw() {
  if (bPressed === 1) {
    currentColorCode = prompt("Please enter a hexadecimal color code." , "#FFFF00")
  console.log(`your current color code is ${currentColorCode}`)
  drawColor = 15
  colorNumber = colorNumber + 1
  colorList.push(currentColorCode)

  currentListColorCode = colorList[colorNumber]
  console.log(`list color = ${currentListColorCode}`)
 
  bPressed = 0
  }
  noStroke()
  if (mouseY<0) {}

else if (mouseIsPressed) {
  console.log("Mouse is pressed")

  if (drawColor === 1) {
    fill('#FF0000')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 2) {
    fill('#FFA500')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 3) {
    fill('#FFD800')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 4) {
    fill('#00FF21')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 5) {
    fill('#007F0E')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 6) {
    fill('#00FFFF')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 7) {
    fill('#0026FF')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 8) {
    fill('#B200FF')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 9) {
    fill('#FF00DC')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 10) {
    fill('#7F0000')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 11) {
    fill('#000000')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 12) {
    fill('#FFFFFF')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 13) {
    fill('#808080')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 14) {
    fill('#A9C5C4')
    circle(mouseX, mouseY, 10*drawSize)
  }
  else if (drawColor === 15) {
    fill(currentListColorCode)
    circle(mouseX, mouseY, 10*drawSize)
  }
}
}


function redCircle() {
  drawColor = 1
  circleClass()
}
function orangeCircle() {
  drawColor = 2
  circleClass()
}
function yellowCircle() {
  drawColor = 3
  circleClass()
}
function limeCircle() {
  drawColor = 4
  circleClass()
}
function greenCircle() {
  drawColor = 5
  circleClass()
}
function lightCircle() {
  drawColor = 6
  circleClass()
}
function blueCircle() {
  drawColor = 7
  circleClass()
}
function purpleCircle() {
  drawColor = 8
  circleClass()
}
function pinkCircle() {
  drawColor = 9
  circleClass()
}
function brownCircle() {
  drawColor = 10
  circleClass()
}
function blackCircle() {
  drawColor = 11
  circleClass()
}
function whiteCircle() {
  drawColor = 12
  circleClass()
}
function grayCircle() {
  drawColor = 13
  circleClass()
}
function eraserIcon() {
  drawColor = 14
  circleClass()
}


function circleClass() {
  var redCircle = document.getElementById("Red");
  var orangeCircle = document.getElementById("Orange");
  var yellowCircle = document.getElementById("Yellow");
  var limeCircle = document.getElementById("Lime");
  var greenCircle = document.getElementById("Green");
  var lightCircle = document.getElementById("Light");
  var blueCircle = document.getElementById("Blue");
  var purpleCircle = document.getElementById("Purple");
  var pinkCircle = document.getElementById("Pink");
  var brownCircle = document.getElementById("Brown");
  var blackCircle = document.getElementById("Black");
  var whiteCircle = document.getElementById("White");
  var grayCircle = document.getElementById("Gray");
  var eraserIcon = document.getElementById("Eraser");

  redCircle.classList.remove("YES")
  orangeCircle.classList.remove("YES")
  yellowCircle.classList.remove("YES")
  limeCircle.classList.remove("YES")
  greenCircle.classList.remove("YES")
  lightCircle.classList.remove("YES")
  blueCircle.classList.remove("YES")
  purpleCircle.classList.remove("YES")
  pinkCircle.classList.remove("YES")
  brownCircle.classList.remove("YES")
  blackCircle.classList.remove("YES")
  whiteCircle.classList.remove("YES")
  grayCircle.classList.remove("YES")
  eraserIcon.classList.remove("YES")
  
  redCircle.classList.add("NO")
  orangeCircle.classList.add("NO")
  yellowCircle.classList.add("NO")
  limeCircle.classList.add("NO")
  greenCircle.classList.add("NO")
  lightCircle.classList.add("NO")
  blueCircle.classList.add("NO")
  purpleCircle.classList.add("NO")
  pinkCircle.classList.add("NO")
  brownCircle.classList.add("NO")
  blackCircle.classList.add("NO")
  whiteCircle.classList.add("NO")
  grayCircle.classList.add("NO")
  eraserIcon.classList.remove("NO")

  if (drawColor === 1) {
redCircle.classList.remove("NO")
redCircle.classList.add("YES")
console.log("red")
  }

  else if (drawColor === 2) {
    orangeCircle.classList.remove("NO")
orangeCircle.classList.add("YES")
console.log("orange")
  }
  else if (drawColor === 3) {
    yellowCircle.classList.remove("NO")
yellowCircle.classList.add("YES")
console.log("yellow")
  }
  else if (drawColor === 4) {
    limeCircle.classList.remove("NO")
limeCircle.classList.add("YES")
console.log("lime")
  }
  else if (drawColor === 5) {
    greenCircle.classList.remove("NO")
greenCircle.classList.add("YES")
console.log("green")
  }
  else if (drawColor === 6) {
    lightCircle.classList.remove("NO")
lightCircle.classList.add("YES")
console.log("light")
  }
  else if (drawColor === 7) {
    blueCircle.classList.remove("NO")
blueCircle.classList.add("YES")
console.log("blue")
  }
  else if (drawColor === 8) {
    purpleCircle.classList.remove("NO")
purpleCircle.classList.add("YES")
console.log("purple")
  }
  else if (drawColor === 9) {
    pinkCircle.classList.remove("NO")
pinkCircle.classList.add("YES")
console.log("pink")
  }
  else if (drawColor === 10) {
    brownCircle.classList.remove("NO")
brownCircle.classList.add("YES")
console.log("brown")
  }
  else if (drawColor === 11) {
    blackCircle.classList.remove("NO")
blackCircle.classList.add("YES")
console.log("black")
  }
  else if (drawColor === 12) {
    whiteCircle.classList.remove("NO")
whiteCircle.classList.add("YES")
console.log("white")
  }
  else if (drawColor === 13) {
    grayCircle.classList.remove("NO")
grayCircle.classList.add("YES")
console.log("gray")
  }
  else if (drawColor === 14) {
    eraserIcon.classList.remove("NO")
eraserIcon.classList.add("YES")
console.log("erase")
  }
}