function validateDates(datesId) {
    var dateFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(datesId.value.match(dateFormat)) {
        document.newRegister.txtEmail.focus();
        return true;
    }
    else {
        alert("Invalid Email.");
        document.newRegister.txtEmail.focus();
        return false;
    }

};
