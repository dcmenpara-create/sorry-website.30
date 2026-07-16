const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 70);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("success").style.display = "block";
});