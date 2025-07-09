import CustomForm from "./CustomForm";
import {SIGN_IN_FORM_CONFIG} from "./formConfig"
function SignIn(){
    function onSignInFormSubmit(data){
        console.log("Data from custom form:",data);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <CustomForm onSubmit={onSignInFormSubmit} config={SIGN_IN_FORM_CONFIG}/>
        </div>
    )
}
export default SignIn;