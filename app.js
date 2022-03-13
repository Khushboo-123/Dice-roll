function shuffle() {
    const img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    img.src = `${randomNumber}.png`;
}

function anim() {
    const img = document.getElementById("img");

    img.setAttribute("src", "dice.gif");
    setTimeout(shuffle, 500);
}


let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br> " + date;
}, 1000);