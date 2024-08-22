
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const outputText = urlParams.get('text');
    document.getElementById("output-text").value = outputText;
});

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

document.getElementById("invert-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text").value;
    let invertedText = outputText.includes("enter") || outputText.includes("imes") || outputText.includes("ai") || outputText.includes("ober") || outputText.includes("ufat")
        ? decrypt(outputText)
        : encrypt(outputText);
    document.getElementById("output-text").value = invertedText;
});

document.getElementById("back-btn").addEventListener("click", function() {
    window.history.back();
});

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
