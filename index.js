import cipher from './cipher.js';

//Pegando o botão do HTML
const buttonE = document.getElementById("btencode");
const buttonD = document.getElementById("btdecode");

//Criando um evento para quando clicar no botão ele chamar a função btencode
buttonE.onclick = function () {
    //Variavel pra armazenar texto colocado no textarea
    let texto1 = "";
    //Variavel do deslocamento
    let codeOffset = parseInt(document.getElementById("offset").value);
    //Imprimir texto do textarea para cifrar
    texto1 = document.getElementById("encode").value;
    //Colocando resultado no h3 e dentro do textarea de decifrar
    document.getElementById("resultencode").innerHTML = cipher.encode(codeOffset, texto1);
    document.getElementById("decode").innerHTML = cipher.encode(codeOffset, texto1);
}

//Criando evento para quando clicar no botão ele chamar a função btdecode
buttonD.onclick = function () {
    //Variavel pra armazenar texto colocado no textarea
    let texto2 = "";
    //Variavel do deslocamento
    let decodeOffset = parseInt(document.getElementById("offset").value);
    //Imprimir texto do textarea para decifrar
    texto2 = document.getElementById("decode").value;
    //Colocando resultado no h3
    document.getElementById("resultdecode").innerHTML = cipher.decode(decodeOffset, texto2);
}

//Colocando opção de copiar resultado cifrado
document.getElementById("copyencode").addEventListener("click", function () {
    document.getElementById("decode").select();
    document.execCommand("copy")
});

document.getElementById("copydecode").addEventListener("click", function () {
    document.getElementById("encode").select();
    document.execCommand("copy")
});