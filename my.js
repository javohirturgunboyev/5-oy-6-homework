


const form = document.getElementById('form');
const table = document.getElementById('table');
const button  = document.getElementById('btn');
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const email = document.getElementById('email');
const apple = document.querySelector('.apple');
const chery = document.querySelector('.chery');
const banan = document.querySelector('.banan');
const kivi = document.querySelector('.kivi');
const ananas = document.querySelector('.ananas');
const user = document.querySelector('.user');

button && button.addEventListener('click', function(){
    apple.innerHTML = lastName.value
    apple.style.color = 'white';
    apple.style.marginTop = '10px';
    apple.style.width = '800px';
    apple.style.height = '40px';
    apple.style.border = '1px solid gray';
    apple.style.borderRadius = '5px';
    apple.style.paddingLeft = '20px';
    apple.style.paddingTop = '10px';

    chery.innerHTML = name.value
    chery.style.color = 'white';
    chery.style.marginTop = '10px';
    chery.style.width = '800px';
    chery.style.height = '40px';
    chery.style.border = '1px solid gray';
    chery.style.borderRadius = '5px';
    chery.style.paddingLeft = '20px';
    chery.style.paddingTop = '10px';

    banan.innerHTML = phone.value
    banan.style.color = 'white';
    banan.style.marginTop = '10px';
    banan.style.width = '800px';
    banan.style.height = '40px';
    banan.style.border = '1px solid gray';
    banan.style.borderRadius = '5px';
    banan.style.paddingLeft = '20px';
    banan.style.paddingTop = '10px';

    kivi.innerHTML = password.value
    kivi.style.color = 'white';
    kivi.style.marginTop = '10px';
    kivi.style.width = '800px';
    kivi.style.height = '40px';
    kivi.style.border = '1px solid gray';
    kivi.style.borderRadius = '5px';
    kivi.style.paddingLeft = '20px';
    kivi.style.paddingTop = '10px';

    ananas.innerHTML = email.value
    ananas.style.color = 'white';
    ananas.style.marginTop = '10px';
    ananas.style.width = '800px';
    ananas.style.height = '40px';
    ananas.style.border = '1px solid gray';
    ananas.style.borderRadius = '5px';
    ananas.style.paddingLeft = '20px';
    ananas.style.paddingTop = '10px';


    user.style.width = '802px';
    user.style.height = '250px';
    user.style.border = '1px solid white';
    user.style.borderRadius = '5px';
    user.style.marginTop = '10px';

})
