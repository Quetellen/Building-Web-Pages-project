const form = document.getElementById('form');
const meetingTime = document.getElementById('meetingTime');
const errorElement = document.getElementById('error')

form.addEventListener('submit', e  => {
    e.preventDefault();

    validateImputs();
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error')

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

const validateImputs = () => {
    const meetingTimeValue = meetingTime.value();

    if(meetingTimeValue === '') {
        setError(meetingTime, 'A date is required');
    } else {
        setSuccess(meetingTime);
    }
};