let boxMain = document.querySelector("#boxMain")
let boxx = document.querySelector("#boxx")
//-------- dabbbaaa
let box1 = document.querySelector("#box1")

let in1 = document.querySelector("#in1")
let in2 = document.querySelector("#in2")
let in3 = document.querySelector("#in3")

let box2 = document.querySelector("#box2")

let in4 = document.querySelector("#in4")
let in5 = document.querySelector("#in5")
let in6 = document.querySelector("#in6")

let box3 = document.querySelector("#box3")

let in7 = document.querySelector("#in7")
let in8 = document.querySelector("#in8")
let in9 = document.querySelector("#in9")

let click = 0;

boxx.addEventListener("click", function (e) {
    click++;
    let select1 = e.target;
    if (click % 2 === 0  && select1.textContent === "") {
        select1.style.fontSize = "20px";
        select1.style.color = "#39a2fa";
        select1.style.fontWeight = "bold";
        select1.textContent = "O"

    } else if (select1.textContent === "") {
        select1.style.fontSize = "20px";
        select1.style.color = "red";
        select1.style.fontWeight = "bold";
        select1.textContent = "X";
    }
})
