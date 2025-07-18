import { useState } from "react"

export const useForm=({initialValues,onSubmit})=>{
    const [formData,setFormData]=useState(initialValues);
     
    function handleChange(e){
        const {name,value}=e.target;

        setFormData(prev=>({
            ...prev,
            [name]:value
        }))

        // console.log(formData)
    }

    function handleFormSubmit(e){
        e.preventDefault();

        //perform validations...

        onSubmit(formData)
    }

    function register(name){
        return {
            name,
            onChange:handleChange,
            value:formData[name] || ""
        }
    }

    return {formData,handleChange,handleFormSubmit,register};

}
