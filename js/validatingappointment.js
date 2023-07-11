
// const form = document.getElementById('form');
// const days = document.getElementById('days');

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

object.addEventListener("click", myScript);

object.onclick = function() {
    if (daysValue == Monday) {
    } else if (daysValue == Tuesday) {
    } else if (daysValue == Wednesday) {
    } else if (daysValue == Thursday) {
    } else if (daysValue == Friday) {
        return console.error("Not a valid day");
    };


// function handleChange (e) { 
//     let innerText = e.target [e.target.options.selectedIndex].innerText; let value = e.target.value;
//     /* Do something with these values */ }