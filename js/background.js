const imgs = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif"];

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

document.body.className = "img";
// document.body.style.backgroundImage = `url(img/1.gif)`;
document.body.style.backgroundImage = `url(img/${randomImg})`;
