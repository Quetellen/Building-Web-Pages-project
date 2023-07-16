const form = document.getElementById('form');
const meetingTime = document.getElementById('meetingTime');


form.addEventListener('submit', e  => {
    e.preventDefault();

    validateInputs();
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// const validateInputs = () => {
//     const meetingTimeValue = meetingTime.value.trim();
//     setError(meetingTime, 'Invalid date');
// };

// const isValidMeetingTime = username => {
//     const re = "^(mon|Mon|t(ues|hurs)|(T(ues|hurs))|Fri|fri)(day|\\.)"
//     + "?$|wed(\\.|nesday)?$|Wed(\\.|nesday)?$|Sat(\\.|urday)"
//     + "?$|t((ue?)|(hu?r?))\\.?$|T((ue?)|(hu?r?))\\.?$";
//     return re.test(String(username).toLowerCase());
// };

const validateInputs = () => {
    const meetingTimeValue = meetingTime.value.trim();

    if(meetingTimeValue === '') {
        setError(meetingTime, 'A date is required');
    } else if (!isValidMeetingTime(meetingTimeValue)) {
        setError(meetingTime, 'Invalid date');  
    } else if (meetingTimeValue === isValidMeetingTime) {
        setSuccess(meetingTime);        
    }
};