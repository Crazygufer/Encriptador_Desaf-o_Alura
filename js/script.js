// script.js

let mode = 'encrypt'; // Modo por defecto

document.getElementById("encrypt-btn").addEventListener("click", function() {
    mode = 'encrypt';
    document.getElementById("action-btn").textContent = "Encriptar";
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    mode = 'decrypt';
    document.getElementById("action-btn").textContent = "Desencriptar";
});

// Ejecutar la acción al presionar el botón
document.getElementById("action-btn").addEventListener("click", function() {
    processText();
});

// Ejecutar la acción al presionar Enter
document.getElementById("input-text").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar que se agregue una nueva línea
        processText();
    }
});

function processText() {
    let inputText = document.getElementById("input-text").value;
    let outputText = mode === 'encrypt' ? encrypt(inputText) : decrypt(inputText);
    // Redirigir al segundo HTML y pasar el texto como parámetro
    window.location.href = `result.html?text=${encodeURIComponent(outputText)}`;
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}
