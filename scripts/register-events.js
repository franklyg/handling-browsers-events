const heading = document.querySelector('h1');

heading.addEventListener('click', function(){
    console.log('I am the header')
});

const form = document.querySelector('form');
form.addEventListener('submit', function(){
  alert('You have successfully signed up for our newsletter!');
});