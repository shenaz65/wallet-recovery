const connectBtn = document.getElementById("connectBtn");
const walletAddress = document.getElementById("walletAddress");

connectBtn.addEventListener("click", () => {
    walletAddress.innerText = "Connecting Wallet...";
});