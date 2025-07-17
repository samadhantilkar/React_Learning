import { useState } from "react";
import { useForm } from "./UseForm";

function SignIn(){


    function onSubmit(formData){
        console.log(formData)
    }

    
    
    const {formData,handleChange,handleFormSubmit,register}=useForm({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit
    })

    

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label >Email:
                    <input type="email" {...register}/>
                </label>
                <br />

                <label >Password:
                    <input type="password" 
                    // name="password" onChange={handleChange} value={formData.password}
                     {...register("password")}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default SignIn;