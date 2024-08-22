// script.js

document.getElementById("encrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let encryptedText = encrypt(inputText);
    document.getElementById("output-text").value = encryptedText;
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let decryptedText = decrypt(inputText);
    document.getElementById("output-text").value = decryptedText;
});

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

function encrypt(text) {
    // Aquí iría la lógica para encriptar el texto
    return text.split('').reverse().join(''); // Ejemplo simple
}

function decrypt(text) {
    // Aquí iría la lógica para desencriptar el texto
    return text.split('').reverse().join(''); // Ejemplo simple
}
