const login=document.querySelector('.login-form');
login.addEventListener('submit',handlSubmit);

function handlSubmit(event){
    event.preventDefault()
    const {elements: {email,password},
}=event.currentTarget
if(email.value===''||password.value==='')
{
    return alert('Заповніть поля')
}
const userDetails={Email:email.value,Password:password.value}
console.log(userDetails)
event.currentTarget.reset()
}