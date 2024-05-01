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

    var formdata = JSON.stringify({ name, phone_number, email, interested_in, message });

    fetch("/ajaxrequest",
    {
        method: "POST",
        body: formdata,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => {
        response.json().then(function(data) {
            console.log(data)
            modal_form_sended.style.display = "flex";
        });
    })
    .catch( error => {
        alert(error);
        console.error('error:', error);
    });
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
