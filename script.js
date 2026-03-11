const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");
const ampm = document.getElementById("ampm");

setInterval(()=>{

let now = new Date();

let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

let hrRotation = 30*hr + min/2;
let minRotation = 6*min;
let secRotation = 6*sec;

hour.style.transform=`translateX(-50%) rotate(${hrRotation}deg)`;
minute.style.transform=`translateX(-50%) rotate(${minRotation}deg)`;
second.style.transform=`translateX(-50%) rotate(${secRotation}deg)`;

/* DIGITAL */

let am="AM";

if(hr>=12){
am="PM";
}

if(hr>12){
hr=hr-12;
}

h.innerHTML = hr<10?"0"+hr:hr;
m.innerHTML = min<10?"0"+min:min;
s.innerHTML = sec<10?"0"+sec:sec;
ampm.innerHTML = am;

},1000);
