// Parte 1
function cambiarBorde() {
    console.log("me diste click");
    const border = document.getElementById('border');
    if(border.style.border === "") {
        border.style.border = "solid 2px #ff0000";
    }
    else {
        border.style.border = "";
    }
}

// Parte 2
const sticker1 = document.getElementById('sticker-1');
const sticker2 = document.getElementById('sticker-2');
const sticker3 = document.getElementById('sticker-3');

function verificar() {
    const sticker1 = document.getElementById('sticker-1').value;
    const sticker2 = document.getElementById('sticker-2').value;
    const sticker3 = document.getElementById('sticker-3').value;
    const numSticker1 = parseInt(sticker1);
    const numSticker2 = parseInt(sticker2);
    const numSticker3 = parseInt(sticker3);
    const total = numSticker1+numSticker2+numSticker3 || numSticker1+numSticker2 || numSticker1+numSticker3 || numSticker2+numSticker3 || numSticker1 || numSticker2 || numSticker3;

    if(total < 10 && total >= 1) {
        console.log(`Llevas ${total} stickers`);
        document.getElementById('text').innerHTML = `Llevas ${total} stickers`;
        
    }
    else if (total === 0) {
        console.log("No has ingresado stickers");
        document.getElementById('text').innerHTML = "No has ingresado stickers";
        alert("No has ingresado stickers");
    }

    else if (total === 10) {
        console.log("Has alcanzado el máximo de 10 stickers");
        document.getElementById('text').innerHTML = "Llevas 10 stickers";
        alert("Has alcanzado el límite de 10 stickers");

    }
    else {
        console.log("Llevas demasiados stickers");
        document.getElementById('text').innerHTML = "Llevas demasiados stickers";
        alert("Llevas demasiados stickers")
    }
    total.value = "";
}

//Parte 3

function ingresarTotal() {
    const select1 = document.getElementById('number1').value;
    const select2 = document.getElementById('number2').value;
    const select3 = document.getElementById('number3').value;
    if(select1 === "9" && select2 === "1" && select3 === "1") {
        console.log("Password 1 correcto")
        document.getElementById('password').innerHTML = "Password 1 correcto";
    }
    else if (select1 === "7" && select2 === "1" && select3 === "4") {
        console.log("Password 2 correcto")
        document.getElementById('password').innerHTML = "Password 2 correcto";
    }
    else {
        console.log("Password incorrecto")
        document.getElementById('password').innerHTML = "Password incorrecto";
    }
}
    