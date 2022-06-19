var button = document.querySelector("button");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

// create a function to open the modal
var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};

button.addEventListener("click", function () {
  openModal();
});

// since we had the same code in the function body of both the modalX and document event listeners, refactor the code into a single function expression
var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

modalX.addEventListener("click", function () {
  closeModal();
});

// listen for a keydown event and pass the event to the callback function
document.addEventListener("keydown", function (e) {
  //console.log(e.key);
  //check for a pressed Esc key and an open modal
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
});
