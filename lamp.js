let lamp = window.document.getElementById("lamp");

function beingbroken() {
    return lamp.src.indexOf("broken") > -1;
}

function turnon() {
    if (!beingbroken()) {
        lamp.src = "lampon.svg";
    }
}

function turnoff() {
    if (!beingbroken()) {
        lamp.src = "lampoff.svg";
    }
}

lamp.addEventListener("click", breaklamp);

function breaklamp() {
    lamp.src = "lampbroken.svg";
}
