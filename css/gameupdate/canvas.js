let c = document.getElementById("cannas");
let ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(55, 0);
ctx.lineTo(1290, 0);
ctx.lineTo(1290, 30);
ctx.lineTo(1275, 50);
ctx.lineTo(15, 50);
ctx.lineTo(15, 15);
ctx.lineTo(35, 0);
ctx.closePath();
ctx.stroke();
