let da = document.querySelector('#days')
let h = document.querySelector('#hours')
let m = document.querySelector('#minutes')
let s = document.querySelector('#seconds')

let a = ()=>{
    let currentYear = new Date().getFullYear()
    let newYear = new Date(`Jan 1 ${currentYear+1} 00:00:00`);
    let currentDate = new Date();
    let d = newYear - currentDate;
    let days = Math.floor(d/1000/60/60/24);
    let hours = Math.floor((d/1000/60/60)%24);
    let minutes = Math.floor((d/1000/60)%60);
    let seconds = Math.floor((d/1000)%60);

    da.innerHTML = days
    h.innerHTML = hours
    m.innerHTML = minutes
    s.innerHTML = seconds

}

setInterval(a, 1000);


