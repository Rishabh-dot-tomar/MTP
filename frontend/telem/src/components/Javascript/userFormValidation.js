

function userFormValidation(values) {
    

        let errors = {};
        if (!values.pid) {
          errors.pid= 'Patient Id is required';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 8) {
          errors.password = 'Password must be 8 or more characters';
        }
        return errors;
      
}

export default userFormValidation
