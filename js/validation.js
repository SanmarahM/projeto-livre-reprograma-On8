// VOLUNTEER'S PAGE INPUT VALIDATION

const button = document.getElementById('submitButton');
const nome = document.getElementById('nameInput');
const email = document.getElementById('emailAddress');
const date = document.getElementById('birthDate');

const form = document.getElementById('form')
const confirmMessage = document.getElementById('confirmation');
confirmMessage.style.display = 'none';

button.addEventListener('click', function (e){
  e.preventDefault();
  
  if (nome.value, email.value, date.value == "") {
    alert ('Preencha os campos')
    
  } else {
    form.style.display = 'none'
    confirmMessage.style.display = 'block';
  }

});