let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // digital clock
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // convert 24hr clock to 12hr clock
    let h12 = h;
    if (h12 > 12) {
        h12 = h12 - 12;
    }
    if (h12 == 0) {
        h12 = 12;
    }

    // add zero before single digit number
    let displayH = (h12 < 10) ? "0" + h12 : h12;
    let displayM = (m < 10) ? "0" + m : m;
    let displayS = (s < 10) ? "0" + s : s;

    hours.innerHTML = displayH;
    minutes.innerHTML = displayM;
    seconds.innerHTML = displayS;
    ampm.innerHTML = am;
}, 1000);

