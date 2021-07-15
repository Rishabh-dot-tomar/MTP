import React from 'react'
import newUservalidate from '../Javascript/NewUserValidation'
import validatedata from "../Javascript/validateNewUser"
function NewUserForm() {


    const {
        values,
        errors,
        handleChange,
        handleSubmit,
       } = newUservalidate(validatedata);



    return (
        <div>
             <form>
               <div className="inputs">
                   <label>Patient name</label>
                   <input 
                         type="text"
                         name="pname"
                         onChange={handleChange}
                         value={values.username} required /> 
                         {errors.pname && (<p>{errors.username}</p>)}
               </div>
               <div className="inputs">
                    <label >Address</label>
                    <input 
                         type="text "
                         name="address"
                         value={values.address} required /> 
                         {errors.address && (<p>{errors.address}</p>)}                       
               </div>               
               <div className="inputs">
                    <label >Phone Number</label>
                    <input 
                         type="number"
                         name="pnumber"
                         value={values.pnumber} required /> 
                         {errors.pnumber && (<p>{errors.pnumber}</p>)}                     
               </div>

               <div className="inputs">
                    <label >Address</label>
                    <input 
                         type= "file"
                         name= "dicomfile"
                         value={values.dicomfile} required /> 
                         {errors.dicomfile && (<p>{errors.dicomfile}</p>)}                       
               </div> 

               <div>
                   <button onClick={handleSubmit}>Submit</button>
               </div>
           </form>
        </div>
    )}
export default NewUserForm
