const menu_toggle = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu');

menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active');
    menu.classList.toggle('responsive');
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;

    // Validation du champ Nom
    const nomInput = document.getElementById('nom');
    const nomError = document.getElementById('nomError');
    const nomPattern = /^[A-Za-z]+$/;

    if (!nomPattern.test(nomInput.value)) {
        nomError.style.display = 'block';
        valid = false;
    } else {
        nomError.style.display = 'none';
    }

    // Validation du champ Email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (!emailInput.validity.valid) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validation du champ Message
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    if (messageInput.value.trim() === "") {
        messageError.style.display = 'block';
        valid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    }
});