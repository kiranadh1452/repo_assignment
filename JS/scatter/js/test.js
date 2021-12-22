let myElement = document.getElementById("main");

let boxWidth =  600;
let boxHeight = 600;

//Formatting the main element
myElement.style.width = boxWidth + "px";
myElement.style.height = boxHeight + "px";
myElement.style.position = "relative";
myElement.style.margin = "auto auto";
myElement.style.border = "1px solid black";

//The input var
var points = [
  {x: 10, y: 20},
  {x: 40, y: 40},
  {x: 60, y: 20},
  {x: 120, y: 520},
  {x: 310, y: 340},
  {x: 440, y: 50},
  {x: 490, y: 270},
  {x: 100, y: 200},
  {x: 400, y: 490},
  {x: 160, y: 580},
  {x: 520, y: 220},
  {x: 210, y: 140},
  {x: 540, y: 570},
  {x: 590, y: 287},
];

let dot = [];
let pointNum = 0;
for(point of points){
  let x = point['x'];
  let y = point['y'];

  dot[pointNum] = document.createElement("div");
  dot[pointNum].style.width = "10px";
  dot[pointNum].style.height = "10px";
  dot[pointNum].style.position = "absolute";
  dot[pointNum].style.top = x + "px";
  dot[pointNum].style.left = y + "px";
  dot[pointNum].style.background = "#a2c";
  dot[pointNum].style.borderRadius = "50%";

  myElement.appendChild(dot[pointNum]);
  let abc = dot[pointNum];

  const handleClick = (event) => {
    myElement.removeChild(abc);
  }
  abc.addEventListener("click", handleClick);

  pointNum += 1;
}