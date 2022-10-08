import throttle from 'lodash.throttle'

const emailRef = document.querySelector('.feedback-form input')
const messageRef = document.querySelector('.feedback-form textarea')
const formRef = document.querySelector('.feedback-form')

formRef.addEventListener('input', throttle(onFormInput, 500))
formRef.addEventListener('submit', onFormSubmit);

function onFormInput() {
    const formData = {
        email: emailRef.value,
        message: messageRef.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

fillFormInput()
function fillFormInput() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parceSavedData = JSON.parse(localStorage.getItem('feedback-form-state'));
        emailRef.value = parceSavedData.email;
        messageRef.value = parceSavedData.message;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
}