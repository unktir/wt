document.getElementById("contact_form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone_number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let interested_in = document.getElementById("interested_in").value;
    let message = document.getElementById("message").value;

    let alerttext;
    if (name === "" && interested_in === "") {
        alerttext = `Вы отправили запрос!`;
    } else {
        alerttext = `${name}, вы отправили запрос по теме: ${interested_in}!`;
    }
    alert(alerttext);
})