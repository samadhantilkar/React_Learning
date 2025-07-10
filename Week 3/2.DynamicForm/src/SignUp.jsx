import { useState } from "react";
import CustomForm from "./dynamicForms/CustomForm";
import { SIGN_UP_FORM_CONFIG } from "./dynamicForms/formConfig";

function SignUp(){

    const [isPending,setIsPending]=useState();

    async function handleSignUpForm(data){
        setIsPending(true);
        await new Promise(resolve=>setTimeout(resolve,3000));
        setIsPending(false);
        console.log(data);
    }

    return (
        <div>
            <h1> Sign Up Form</h1>
            <CustomForm config={SIGN_UP_FORM_CONFIG} onSubmit={handleSignUpForm}
            isPending={isPending}/>
        </div>
    )
}
export default SignUp;