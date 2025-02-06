document.getElementById("open-btn").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    generateHearts();
});

function generateHearts() {
    const heartsContainer = document.querySelector(".hearts");
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}