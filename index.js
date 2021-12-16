function submit(e){
    e.preventDefault();
const userName=document.querySelector('#name').value;
const userEmail=document.querySelector('#email').value;
const activationToken=document.querySelector('#password').value;
const checkbox=document.querySelector('#checkbox:checked');
const form=document.querySelector('#form');

if (userName == ""){
    document.querySelector('#error').innerHTML="Name cannot be empty!!!";
}
else if (userEmail == ""){
    document.querySelector('#error').innerHTML="Email cannot be empty!!!";
}
else if (activationToken == ""){
    document.querySelector('#error').innerHTML="Please enter activation token!!!";
}
else if (activationToken.length !== 4){
    document.querySelector('#error').innerHTML="Token must be four digit !!!";
}
else if (checkbox == null){

    document.querySelector('#error').innerHTML="Please agree to our  policy";
}
else {
    document.querySelector('#error').innerHTML="Successful";
}
}
form.addEventListener('submit', submit);







