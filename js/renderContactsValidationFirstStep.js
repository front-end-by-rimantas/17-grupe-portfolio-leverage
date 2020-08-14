function renderContactsValidationFirstStep() {

    const inputNameDOM = document.querySelector('input[type="text"]');
    const inputEmailDOM = document.querySelector('input[type="email"]');
    const inputPhoneDOM = document.querySelector('input[type="tel"]');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validation = true;

    inputNameDOM.classList.remove('validation');
    inputEmailDOM.classList.remove('validation');
    inputPhoneDOM.classList.remove('validation');

    if (inputNameDOM.value === '' || typeof inputNameDOM == 'number') {
        inputNameDOM.classList.add('validation');
        // console.log('Invalid Name');
        validation = false;
    } else {
        inputNameDOM.classList.add('validation-success');
    }
    if (inputEmailDOM.value === '' || typeof inputNameDOM == 'number' || !(re.test(String(inputEmailDOM.value).toLowerCase()))) {
        inputEmailDOM.classList.add('validation');
        // console.log('Invalid Email');
        validation = false;
    } else {
        inputEmailDOM.classList.add('validation-success');
    }
    if (inputPhoneDOM.value === '') {
        inputPhoneDOM.classList.add('validation');
        // console.log('Invalid Phone Number');
        validation = false;
    } else {
        inputPhoneDOM.classList.add('validation-success');
    }

    return validation;
}

export default renderContactsValidationFirstStep;