let myElement = document.getElementById("main");

const x = 240;
let y = 20;
let inc = 1;

let boxWidth =  600;
let boxHeight = 600;

//Formatting the main element
myElement.style.width = boxWidth + "px";
myElement.style.height = boxHeight + "px";
myElement.style.position = "relative";
myElement.style.margin = "auto auto";
myElement.style.background = "url('assets/images/bgImage.jpg')";


const helic = document.createElement("div");
helic.style.width = "120px";
helic.style.height = "87px";
helic.style.position = "absolute";
helic.style.top = y + "px";
helic.style.left = x + "px";
helic.style.background = "url('assets/images/heli2.png')";

myElement.appendChild(helic);

setInterval(() => {
  if(y>= boxHeight-87){
    inc = -1;
  }
  if(y<=0){
    inc = 1;
  }
  y = y + inc;

  helic.style.top = y + "px";

},10);

const handleClick = (event) => {
  if(y>=40){
    y = y - 40;
  }
  else y = 0;
  helic.style.top = y + "px";
};

helic.addEventListener("click", handleClick);