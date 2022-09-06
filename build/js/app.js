const btnShare = document.querySelector(".article__share-btn");
const shareDiv = document.querySelector(".share");

btnShare.addEventListener("click", () => {
    shareDiv.classList.toggle("active");
    btnShare.classList.toggle("active");
})