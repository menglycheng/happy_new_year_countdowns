const color = document.getElementById('.c_text')
const colors = ["green", "blue"]

function autoslide(){
    changeColor();
    setTimeout(autoslide, 5000);

};
function changeColor(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
}

autoslide();
function getRandomNumber(){
    return Math.floor(random()*colors.length);
}