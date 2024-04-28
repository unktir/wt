import "./index.js";
import "./carousel.js";

let modal_form_sended = document.getElementById("modal-form-sended");

let close_modal_form_sended_button = document.getElementById("close-modal-form-sended");

document.getElementById("contact_form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone_number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let interested_in = document.getElementById("interested_in").value;
    let message = document.getElementById("message").value;

    modal_form_sended.style.display = "flex";
})

close_modal_form_sended_button.onclick = function() {
    modal_form_sended.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal_form_sended) {
    modal_form_sended.style.display = "none";
  }
}

document.getElementById("go-back").addEventListener("click", () => {
    history.back();
  });