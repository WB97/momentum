const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

document.body.className = "img";
document.body.style.backgroundImage = `url(img/${randomImg})`;
