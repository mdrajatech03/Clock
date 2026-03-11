let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    
    // Analog Math
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital Clock
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // 24 to 12 hour conversion
    let displayH = (h > 12) ? h - 12 : h;
    if (displayH == 0) displayH = 12; // Midnight fix

    // Add leading zeros
    displayH = (displayH < 10) ? "0" + displayH : displayH;
    let displayM = (m < 10) ? "0" + m : m;
    let displayS = (s < 10) ? "0" + s : s;

    document.getElementById('hours').innerHTML = displayH;
    document.getElementById('minutes').innerHTML = displayM;
    document.getElementById('seconds').innerHTML = displayS;
    document.getElementById('ampm').innerHTML = am;
}, 1000);

