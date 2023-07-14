const form = document.getElementById('form');
const meetingTime = document.getElementById('meetingTime');


form.addEventListener('submit', e  => {
    e.preventDefault();

    validateInputs();
    
});

// function setError(element, message) {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error')

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error')
//     inputControl.classList.remove('success')
// };



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

const isValidMeetingTime = meetingTime => {
    // const re = "^(sun|Sun|mon|Mon|t(ues|hurs)|(T(ues|hurs))|Fri|fri)(day|\\.)"
    // + "?$|wed(\\.|nesday)?$|Wed(\\.|nesday)?$|Sat(\\.|urday)"
    // + "?$|sat(\\.|urday)?$|t((ue?)|(hu?r?))\\.?$|T((ue?)|(hu?r?))\\.?$";
    //const regex = ^(0[8-9]|1[0]):([0-5][0-9]) ((am)|(AM))$;
    return re.test(meetingTime);
};

const validateInputs = () => {
    const meetingTimeValue = meetingTime.value.trim();
    //setError(meetingTime, meetingTimeValue);
    setError(meetingTime, 'Invalid date');



    // if(meetingTimeValue === '') {
    //     setError(meetingTime, 'A date is required');   
    // } else if (!isValidMeetingTime(meetingTimeValue)) {
    //     setError(meetingTime, 'Invalid date'); 
    // } else {
    //     setSuccess(meetingTime);
    // };
};



