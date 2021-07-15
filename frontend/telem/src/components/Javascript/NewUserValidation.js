import { useState, useEffect } from 'react';
import axios from 'axios';

function NewUserValidation(validate) {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [posts,setPosts]    = useState();

// useEffect(()=>{
//     axios.post('http://localhost:8000/user',newData)//then(res=>setPosts(res.data))
// })

    
    const handleSubmit = (event) => 
      {
        if (event) event.preventDefault();
        setErrors(validate(values));


        const newData= {
            pid:values.pnumber,
            addr:values.address,
            pname:values.pname,
            dicomfile:null,
            
          }

        //axios.post('http://localhost:8001/',newData).then(res=>{console.log(res.statusText)})

      };
    
    const handleChange = (event) => 
      {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
      };
    
      return {
        handleChange,
        handleSubmit,
        values,
        errors,
      }


}

export default NewUserValidation
