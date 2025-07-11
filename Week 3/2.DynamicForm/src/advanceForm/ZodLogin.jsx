import { use, useState } from "react";
import {z, ZodError} from "zod";
import "./LearnZod"

function ZodLogin(){

    const [data,setData]=useState({
        email:"",
        password:"",

    });

    const[errors,setError]=useState({});

    const zodSchema=z.object({
        email:z.email("Not a valid email"),
        password:z.string()
                    .trim()
                    .min(6,"We need 6 chars at least")
                    .max(10,"Not more 10 char"),
    })

    function handleFormSubmit(e){
        e.preventDefault();
        try{
            const result=zodSchema.parse(data);
            console.log(result);
            //no more errors
            setError({})
        }
        catch(e)
        {
            // console.log(e.message)
            if(e instanceof ZodError){
                const newErrors=e.issues.reduce ((acc,error)=>{
                    acc[error.path[0]]=error.message
                    return acc
                },{});
                setError(newErrors);
                console.log(newErrors);
            }
        }

        // const result=zodSchema.safeParse(data);

        // if(!result.success){

        //     if(result.error && result.error.errors){
        //         const newErrors=result.error.errors.reduce((acc,fieldError)=>{
        //             acc[fieldError.path[0]]=fieldError.message;
        //             return acc
        //         },{});
        //         console.log(newErrors);
        //         console.log(result.error)
        //     }

        // }else{
        //     console.log(result.data);
        // }
    }

    function handleInputUpdate(e){
        const {name,value}= e.target;
        setData({...data,[name]:value});
        if(errors[name]){
            setError(prev=>({...prev,[name]:""}))
        }
        handleFormSubmit(e);
    }

    console.log(data)

    return (
        <div>

            <h1>Zod Login</h1>
            <form onSubmit={handleFormSubmit} noValidate>
                <label>
                    Email
                    <input type="email" name="email" value={data.email} onChange={handleInputUpdate}/>
                </label>
                { errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                <br />
                <label>
                    Password
                    <input type="password" name="password" value={data.password} onChange={handleInputUpdate}/>
                </label>
                <br />
                { errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                <button>Submit</button>
            </form>
        </div>
    )
}
export default ZodLogin;