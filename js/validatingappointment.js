// const form = document.getElementById('form');
// const weekDays = document.getElementById('weekDays');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };


// const isValid_WeekDay = weekDays => {
//     const re = "^(sun|Sun|mon|Mon|t(ues|hurs)|(T(ues|hurs))|Fri|fri)(day|\\.)"
//     + "?$|wed(\\.|nesday)?$|Wed(\\.|nesday)?$|Sat(\\.|urday)"
//     + "?$|sat(\\.|urday)?$|t((ue?)|(hu?r?))\\.?$|T((ue?)|(hu?r?))\\.?$";
//     return re.test(String(username).toLowerCase());
// };


//     if(weekDays === '') {
//         setError(weekDays, 'Week days only');
//     } else if (!isValidUsername(weekDaysValue)) {
//         setError(weekDays, 'Provide a valid date');
//     } else {
//         setSuccess(weekDays);
//     }


//if (DatePiker1.SelectDate < DateAdd(today(), -1, days), yes, no);

//if (datePicker1.selectDate >= today() && datePicker1.selectDate < dateADD(today(), 30, days), yes, no)

    // if(weekDays(datePicker1.selectDate, monday) < 6) {
    // setError(weekDays, 'Week days only');
    // } else if (!isweekDays(weekDaysValue)) {
    //     setError(weekDays, 'Provide a valid week date');
    // } else {
    //     setSuccess(weekDays);
    // };




 function setValue(element, date) {
    const isoString = date.toISOString();
    element.value = isoString.substring(0, isoString.indexOf("T") + 6);
    };

    