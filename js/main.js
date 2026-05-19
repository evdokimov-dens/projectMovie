const modalWindow = document.querySelector(".modal");
const buttonsModal = document.querySelectorAll(".button_play");
const iframe = modalWindow.querySelector("iframe");
const videoSrc = iframe.src;

buttonsModal.forEach((item) => {
  item.addEventListener("click", () => {
    iframe.src = videoSrc;
    modalWindow.classList.add("active");
  });
});

modalWindow.addEventListener("click", () => {
  iframe.src = "";
  modalWindow.classList.remove("active");
});
