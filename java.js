const formNewsletter = document.getElementById('formNewsletter');
const emailInput = document.getElementById('emailInput');

formNewsletter.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = emailInput.value;

    alert(`Obrigado por se inscrever na nossa newsletter, ${email}!`);

    emailInput.value = '';
});