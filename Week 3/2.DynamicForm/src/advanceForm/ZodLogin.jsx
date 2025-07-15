import { use, useState } from "react";
import {z, ZodError} from "zod";
import "./LearnZod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function ZodLogin(){

    // const [data,setData]=useState({
    //     email:"",
    //     password:"",
    // });

    // const[errors,setError]=useState({});

    // function handleFormSubmit(e){
    //     e.preventDefault();
    //     try{
    //         const result=zodSchema.parse(data);
    //         console.log(result);
    //         //no more errors
    //         setError({})
    //     }
    //     catch(e)
    //     {
    //         // console.log(e.message)
    //         if(e instanceof ZodError){
    //             const newErrors=e.issues.reduce ((acc,error)=>{
    //                 acc[error.path[0]]=error.message
    //                 return acc
    //             },{});
    //             setError(newErrors);
    //             console.log(newErrors);
    //         }
    //     }

    //     // const result=zodSchema.safeParse(data);

    //     // if(!result.success){

    //     //     if(result.error && result.error.errors){
    //     //         const newErrors=result.error.errors.reduce((acc,fieldError)=>{
    //     //             acc[fieldError.path[0]]=fieldError.message;
    //     //             return acc
    //     //         },{});
    //     //         console.log(newErrors);
    //     //         console.log(result.error)
    //     //     }

    //     // }else{
    //     //     console.log(result.data);
    //     // }
    // }
    
    // function handleInputUpdate(e){
    //     const {name,value}= e.target;
    //     setData({...data,[name]:value});
    //     if(errors[name]){
    //         setError(prev=>({...prev,[name]:""}))
    //     }
    //     handleFormSubmit(e);
    // }

    const zodSchema=z.object({
        email:z.email("Not a valid email"),
        password:z.string()
                    .trim()
                    .min(6,"We need 6 chars at least")
                    .max(10,"Not more 10 char"),
        // isAdult:z.boolean().optional(),
        age:z.number().min(18).optional()  
    })

    async function sendToBackend(data){
        console.log("Sending to backend")
        await new Promise((resolve)=> setTimeout(resolve,3000));
        console.log("send",data)
    }



    console.log("Rendering..")

    const{register ,
        handleSubmit, 
        reset,
        watch,
        formState:{isDirty,
                    isSubmitting,
                    errors,
                    isValid
                }
        ,}=useForm({
            // defaultValues:
            // {
            //     email:"tilkarsamadhan@gmail.com",
            //     password:"1234",
            //     age:18
            // }
            resolver:zodResolver(zodSchema),
            shouldUnregister:true
        });

    console.log(errors)

    const [email,isAdult]=watch(["email","isAdult"]);
    console.log(email);

    return (
        <div>

            <h1>Zod Login</h1>
            <form onSubmit={handleSubmit(sendToBackend)} noValidate>
                <label>
                    Email
                    <input type="email" 
                    {...register("email"
                        // ,{
                        // required:"Email is required",
                        // pattern:{
                        //     value:/^[^s@]+@[^s@]+.[^s@]+$/,
                        //     message:"Not a valid Email bro"
                        // },}
                    )}
                    // name="email"  value={data.email} onChange={handleInputUpdate}
                    />
                </label>
                { errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                <br />

                
                <label>
                    Password
                    <input type="password" 
                    {...register("password"
                        // ,{
                        // required:"Password is requred",
                        // minLength:{
                        //     value:4,
                        //     message:"Too short, Add at least 4 chars..."
                        // }    }
                    )}
                    //  name="password" value={data.password} onChange={handleInputUpdate}
                    />
                </label>
                <br />


                { errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

                <label>
                    Are you above 18
                    <input type="checkbox" {...register("isAdult")}/>

                </label>

                <br />

                {   isAdult && <label>
                    Age
                    <input type="number" {...register("age",{
                        valueAsNumber:true                  }   
                    )} />
                    </label>
                }

                {errors.age && <p style={{color:"red"}}>{errors.age.message}</p>}

                <br />

                <button disabled={isSubmitting || !isValid}>Submit</button>
                <button type="button" onClick={()=>reset({
                    email:"",
                    password:""
                })}>Reset</button>
            </form>
        </div>
    )
}
export default ZodLogin;