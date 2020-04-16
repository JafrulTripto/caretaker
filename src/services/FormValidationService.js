export const formValid = ({ formErrors, formInput }) => {
    let valid = true;
    
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(formInput).forEach(val => {
        val.length === 0 && (valid = false)
    });
    return valid;
}