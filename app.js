const tittle = document.querySelector(".click");

function handleTittleClick() {
    tittle.style.color = "red";
}

tittle.addEventListener("click", handleTittleClick);