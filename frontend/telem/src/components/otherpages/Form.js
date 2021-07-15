import React from 'react'
import eventHandler from '../Javascript/Form_validation';
import validate from "../Javascript/userFormValidation"
function Form() {
        const {
               values,
               errors,
               handleChange,
               handleSubmit,
              } = eventHandler(validate);
    return (
        <div>
             <form>
               <div className="inputs">
                   <label>Patient Id</label>
                   <input 
                         type="text"
                         name="pid"
                         placeholder="your phonenumber"
                         onChange={handleChange}
                         value={values.username}
                          />
                        {errors.pid && <p>{errors.pid}</p>}
                  
               </div>
               <div>
                   <button onClick={handleSubmit}>Submit</button>
               </div>
           </form>  
        </div>
    )}

export default Form
