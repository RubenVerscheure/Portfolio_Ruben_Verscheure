let Cuursor = document.querySelector(".Cuursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY

Cuursor.styles.left = `${px}`;
Cuursor.styles.top = `${px}`;
}

