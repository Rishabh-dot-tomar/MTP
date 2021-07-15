

function userFormValidation(values) {
    

    let errors = {};
    if (!values.pid) {
      errors.pid= 'Patient Id is required';
    }else if (values.password.length != 10)
      {
          errors.pid=''
      }

    if (!values.addr) {
      errors.addr= 'Password is required';
    } else if (values.password.length < 8) {
      errors.addr = 'Password must be 8 or more characters';
    }
    return errors;
  
}

export default userFormValidation
