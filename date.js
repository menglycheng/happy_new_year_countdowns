const today = new Date();
const years = today.getFullYear() + 1;

var countDate = new Date(`Jan 1, ${years} 00:00:00`).getTime()

function newYear(){
    var now = new Date().getTime();
    gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day));
    const h = Math.floor((gap %(day)) / (hour));
    const m = Math.floor((gap % (hour))/ (minute));
    const s = Math.floor((gap %  (minute)) / (second));
    if (d === 0){
        document.getElementById('year').innerText = `Happy new year ${years}`;
    }else{
        document.getElementById('year').innerText = `${years} is comming soon`;
    }
    
    document.getElementById('today').innerText = today;
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}
setInterval(function(){
    newYear();
},1000);