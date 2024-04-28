let modal_form = document.getElementById("modal-form");
let modal_form_sended = document.getElementById("modal-form-sended");

let open_modal_button = document.getElementById("open_form");

let close_modal_form_button = document.getElementById("close-modal-form");
let close_modal_form_sended_button = document.getElementById("close-modal-form-sended");

document.getElementById("modal_form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone_number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let interested_in = document.getElementById("interested_in").value;
    let message = document.getElementById("message").value;
    let accept_p_p = document.getElementById("accept_privacy_policy").value;

    modal_form.style.display = "none";
    modal_form_sended.style.display = "flex";
})

open_modal_button.onclick = function() {
    modal_form.style.display = "flex";
}

close_modal_form_button.onclick = function() {
    modal_form.style.display = "none";
}
close_modal_form_sended_button.onclick = function() {
    modal_form_sended.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal_form) {
    modal_form.style.display = "none";
  }
  if (event.target == modal_form_sended) {
    modal_form_sended.style.display = "none";
  }
}

document.getElementById("go-back").addEventListener("click", () => {
    history.back();
  });