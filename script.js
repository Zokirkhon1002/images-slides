// learned and made by Zokirkhon
const imgs = document.getElementById("images");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const imgsNumber = document.querySelectorAll("#images img")

let index = 0;

function changeImage() {
    if (index > imgsNumber.length - 1) {
        index = 0;
    } else if (index < 0) {
       index = imgsNumber.length - 1
    }
    imgs.style.transform = `translateX(${-index * 600}px)`;
}

rightBtn.addEventListener('click', function change() {
    index++;
    changeImage();

});

leftBtn.addEventListener('click', function change() {
    index--;
    changeImage();

});

let interval = setInterval(run, 2000)

function run() {
   index++;
   changeImage();
}

function resetInternval() {
    clearInterval(interval);

    interval = setInterval(run, 3000);
}


