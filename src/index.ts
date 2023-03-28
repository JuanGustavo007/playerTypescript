const selecionarPlay = document.querySelector(".btn") as HTMLButtonElement;
const selecionarVideo = document.querySelector("video") as HTMLVideoElement;
selecionarPlay.addEventListener("click", () => {
    console.log(selecionarVideo.currentTime);
    selecionarVideo.classList.toggle("tocar");
    selecionarPlay.classList.toggle("btn-danger");
    if (selecionarVideo.classList.contains("tocar") && selecionarPlay.classList.contains("btn-danger")) {
        selecionarPlay.classList.remove("btn-dark");
        selecionarVideo.play();
        selecionarPlay.innerHTML = "Pause";
    } else {
        selecionarPlay.classList.add("btn-dark");
        selecionarVideo.pause();
        selecionarPlay.innerText = "Play";
    }
});
