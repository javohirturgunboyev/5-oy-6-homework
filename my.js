const form = document.querySelector('#form');
const vj = document.querySelector('#vj');
const name = document.querySelector('#name');
const number = document.querySelector('#tel');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('#btn')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    // const action = {
    //   name: name.value,
    //   tel : tel.value,
    //   email: email.value,
    //   password : password.value,

    // };
    // console.log(action);
    console.log(name.value);
})