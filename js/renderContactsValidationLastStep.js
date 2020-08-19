function renderContactsValidationLastStep() {

    const textareaDOM = document.querySelector('textarea[type="text"]');

    let validation = true;

    textareaDOM.classList.remove('validation');

    if (textareaDOM.value == '') {
        textareaDOM.classList.add('validation');
        // console.log('Invalid Company Name');
        validation = false;
    } else {
        textareaDOM.classList.add('validation-success');
    };
    return validation;
}

export default renderContactsValidationLastStep;