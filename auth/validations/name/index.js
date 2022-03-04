




exports.lastnameValidation = (lastname) => {
    const regex = /^[a-zA-z]{3,50}$/;
    return regex.test(lastname);
}


exports.firstnameValidation = (name) => {
    const regex = /^[a-zA-z]{3,32}$/;
    return regex.test(name);

}





