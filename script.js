let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {

let now = new Date();

let hh = now.getHours() * 30;
let mm = now.getMinutes() * 6;
let ss = now.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

// DIGITAL CLOCK

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let am = h >= 12 ? "PM" : "AM";

if(h>12){
h = h - 12;
}

h = h < 10 ? "0"+h : h;
m = m < 10 ? "0"+m : m;
s = s < 10 ? "0"+s : s;

document.getElementById("hours").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
document.getElementById("seconds").innerHTML = s;
document.getElementById("ampm").innerHTML = am;

},1000);
