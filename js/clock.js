const clock = document.querySelector("#clock");

function changClock() {
    const date = new Date();
    const HOURS = String(date.getHours()).padStart(2, "0");
    const MINUTES = String(date.getMinutes()).padStart(2, "0");
    const SECONDS = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${HOURS}:${MINUTES}:${SECONDS}`;
}

changClock();
setInterval(changClock, 1000);

// setTimeout(changClock, 3000);