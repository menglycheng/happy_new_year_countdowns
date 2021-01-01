const today = new Date();
const years = today.getFullYear() + 1;

var countDate = new Date(`Jan 1, ${years} 00:00:00`).getTime()

function newYear(){
    const today = new Date();
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

    // const d = Math.floor(0);
    // const h = Math.floor(0);
    // const m = Math.floor(0);
    // const s = Math.floor(60);

    if (d === 0 && h ===0 && m ===0){
        document.getElementById('year').innerText = `Happy new year ${years}`;
    }else if (d <=30){
        document.getElementById('year').innerText = `${years} is comming soon`;
    }else{
        document.getElementById('year').innerText = `Waiting for ${years} comming `;
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