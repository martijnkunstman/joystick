var joystick = new VirtualJoystick({
  container: document.getElementById("container"),
  mouseSupport: true,
});
joystick.addEventListener("touchStart", function () {
  console.log("down");
});
joystick.addEventListener("touchEnd", function () {
  console.log("up");
});

let x = 0;
let y = 0;

setInterval(function () {
  x=x+joystick.deltaX()/2;
  y=y+joystick.deltaY()/2;
  //joystick.deltaX();
  //joystick.deltaY();
}, (1 / 30) * 1000);

function gearSettings() {
  document.getElementById("gear").style.display = "block";
  
}
