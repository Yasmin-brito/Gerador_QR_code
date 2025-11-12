const btn = document.querySelector("#btn");
const inputUser = document.querySelector("#url");
const container = document.querySelector(".main-container");
const qrCodeImg = document.querySelector("#QRcode");

function gerador(){
    var inputUserValue = inputUser.value;

    if(!inputUserValue){
        return;
    }

    btn.innerText = "Gerando QR Code...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${inputUserValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        btn.innerText = "QR Code criado!";
    })

    inputUser.addEventListener("keydown", (e) =>{
        if(e.code == "Enter"){
            gerador();
        }
    })

    inputUser.addEventListener("keyup", () =>{
        if(!inputUser.value){
            container.classList.remove("active");
            btn.innerText = "Gerar QR Code";
        }
    })

}