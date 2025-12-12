document.getElementById("btnReplaceAll").addEventListener("click", function () {
    
    let sentence = document.getElementById("txtInput").value.toLowerCase();
    let word = document.getElementById("txtWord").value.toLowerCase();
    let output = document.getElementById("txtOutput");

    if (sentence.includes(word)) {
        output.textContent = "Found";
        output.style.color = "green";
    } else {
        output.textContent = "Not Found";
        output.style.color = "red";
    }
});