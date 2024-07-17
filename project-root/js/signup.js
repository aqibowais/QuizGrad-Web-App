let username = document.getElementById('')
let email = document.getElementById('email-input')
let password = document.getElementById('password-input')    










//left side border when div is active
document.getElementById('name-input').addEventListener('focus',function(){
    this.parentElement.classList.add('focused');
})
document.getElementById('email-input').addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
});
document.getElementById('email-input').addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
});

document.getElementById('password-input').addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
});
document.getElementById('password-input').addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
});

