function renderContactsValidationSecondStep() {

    const inputCompanyNameDOM = document.querySelector('input[type="text"]');
    const inputManagerNameDOM = document.querySelector('input[name="manager"]');
    const selectDOM = document.querySelector('select[name="budgetRange"]');
    const selectDOMValue = selectDOM.options[selectDOM.selectedIndex].value;
    let validation = true;

    inputCompanyNameDOM.classList.remove('validation');
    inputManagerNameDOM.classList.remove('validation');
    selectDOM.classList.remove('validation');


    selectDOM.classList.add('validation-success');


    if (inputCompanyNameDOM.value === '' || typeof inputCompanyNameDOM == 'number') {
        inputCompanyNameDOM.classList.add('validation');
        // console.log('Invalid Company Name');
        validation = false;
    } else {
        inputCompanyNameDOM.classList.add('validation-success');
    };
    if (inputManagerNameDOM.value === '' || typeof inputCompanyNameDOM == 'number') {
        inputManagerNameDOM.classList.add('validation');
        // console.log('Invalid Manager Name');
        validation = false;
    } else {
        inputManagerNameDOM.classList.add('validation-success');
    };
    if (selectDOMValue == "") {
        selectDOM.classList.add('validation');
        // console.log('Must be selected');
        validation = false;
    } else {
        selectDOM.classList.add('validation-success');
    };
    return validation;
}

export default renderContactsValidationSecondStep;