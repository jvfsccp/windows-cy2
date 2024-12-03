const winButton = document.getElementById("win-button")
const modal = document.getElementById("modal-main")

winButton.addEventListener("click", (event) => {
  event.preventDefault()

  modal.classList.toggle("d-none")
})

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add("d-none");
  }
});