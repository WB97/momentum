const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]

const randomImg = imgs[Math.floor(Math.random()*imgs.length)]


const bgImage = document.createElement("img");

bgImage.src = `img/${randomImg}`;

document.body.append(bgImage);