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




//  function setValue(element, date) {
//     const isoString = date.toISOString();
//     element.value = isoString.substring(0, isoString.indexOf("T") + 6);
//     };

    

//     const email = document.getElementById("mail");

//     meeting-time.addEventListener("input", (event) => {
//   if (meeting-time.validity.typeMismatch) {
//     meeting-time.setCustomValidity("I am expecting an email address!");
//   } else {
//     meeting-time.setCustomValidity("");
//   }
// });


const form = document.querySelector("form");
const meetingTime = document.getElementById("meetingTime");
const error = email.nextElementSibling;

// As per the HTML Specification
const meetingTimeRegExp = "^(sun|Sun|mon|Mon|t(ues|hurs)|(T(ues|hurs))|Fri|fri)(day|\\.)"
                        + "?$|wed(\\.|nesday)?$|Wed(\\.|nesday)?$|Sat(\\.|urday)"
                        + "?$|sat(\\.|urday)?$|t((ue?)|(hu?r?))\\.?$|T((ue?)|(hu?r?))\\.?$";
  

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = meetingTime.value.length === 0 || meetingTimeRegExp.test(email.value);
  meetingTime.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
meetingTime.addEventListener("input", () => {
  const isValid = meetingTime.value.length === 0 || meetingTimeRegExp.test(meetingTime.value);
  if (isValid) {
    meetingTime.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    meetingTime.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = meetingTime.value.length === 0 || emailRegExp.test(meetingTime.value);
  if (!isValid) {
    meetingTime.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    meetingTime.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});