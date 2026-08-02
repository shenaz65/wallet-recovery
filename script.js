const button = document.querySelector("button");
const phrase = document.querySelector("#phrase");

button.addEventListener("click", function (event) {
    event.preventDefault();

    const recoveryPhrase = phrase.value;

    alert("آپ نے لکھا:\n" + recoveryPhrase);
});