(()=>{"use strict";const t=document.querySelector(".btn"),e=document.querySelector("video");t.addEventListener("click",(()=>{console.log(e.currentTime),e.classList.toggle("tocar"),t.classList.toggle("btn-danger"),e.classList.contains("tocar")&&t.classList.contains("btn-danger")?(t.classList.remove("btn-dark"),e.play(),t.innerHTML="Pause"):(t.classList.add("btn-dark"),e.pause(),t.innerText="Play")}))})();