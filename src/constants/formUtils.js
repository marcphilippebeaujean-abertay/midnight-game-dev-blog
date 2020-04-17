export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidFormInput = (formElementName, isValidInput) => {
    console.log(formElementName + " : is valid = " + isValidInput);
    if (isValidInput === true) {
        document
            .getElementById(formElementName + "-error")
            .classList.add("d-none");
        return true;
    } else {
        document
            .getElementById(formElementName + "-error")
            .classList.remove("d-none");
        return false;
    }
};
