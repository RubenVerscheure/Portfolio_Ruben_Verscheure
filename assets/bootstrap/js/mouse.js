let Cuursor = document.querySelector(".Cuursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY

Cuursor.styles.left = `${px}`;
Cuursor.styles.top = `${px}`;
}

let links = Array.from(document.querySelectorAll("a"));
console.log(links);

links.forEach(links =>{
    links.addEventListener('mouseover', ()=>{
        Cuursor.classList.add("grow")
    })
    links.addEventListener('mousleave', ()=>{
        Cuursor.classList.remove("grow")
    })
})
