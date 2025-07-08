import { useActionState } from "react";

function IntroForm(){

    const initState={
        firstName:"Samadhan",
        lastName:"Tilkar",
        email:"samadhantilkar@gmail.com",
        password:"1234",
        gender:"female",
        country:"india",
        hobbies:['sport','cooking','reading']
    };

    const [state,action,isPending]=useActionState(formSubmitted,initState);

    async function formSubmitted(prevData,formData){
        console.log(prevData,Object.fromEntries(formData))
        console.log("Submitting....");


        await new Promise((resolve)=>setTimeout(resolve,3000))


        let data=Object.fromEntries(formData);
        const allHobbies=formData.getAll("hobbies")
        data={...data,hobbies:allHobbies};


        console.log("Submited Successfully:",data);
        return {};
    }

    function handleInputUpdate(e){
        const {name,value}=e.target;
        console.log(name,":",value);
    }

    return (
        <form action={action} noValidate>
            <label htmlFor="name">
                First Name
            </label>
            <input 
                id="name" 
                name="firstName" 
                type="text" 
                placeholder="e.g Samadhan" 
                defaultValue={state.firstName} 
                onChange={handleInputUpdate}/>
            <br />
            <label>
                Last Name
                <input type="text" name="lastName" placeholder="e.g Tilkar" defaultValue={state.lastName} />
            </label>

            <div><label>
                Email
                <input type="email"  defaultValue={state.email} readOnly name="email" placeholder="e.g tilkarsamadhan@gmail.com"  />
            </label></div>

            <div>
                <label>
                    Password:
                    <input  name="password" type="password" placeholder="Password" />
                </label>
            </div>


            <div>
                <label>
                    Gender
                    <label>
                        <input type="radio" name="gender" value="male" defaultChecked={"male"===state.gender}/>
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" defaultChecked={"female"===state.gender}/>
                        Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" defaultChecked={"other"===state.gender}/>
                        Other
                    </label>
                </label>
            </div>


            <div>
                <label>
                    Country:
                    <select name="country" defaultValue={state.country}>
                        <option value="" >Choose a Country</option>
                        <option value="india" >India</option>
                        <option value="usa" >USA</option>
                        <option value="canada" >Canada</option>
                    </select>
                </label>
            </div>


            <div>
                <label>
                    Hobbies
                    <label >
                        <input type="checkbox" name="hobbies" id="" value="sport" defaultChecked={state.hobbies?.includes("sport")}/>
                        Sport
                    </label>

                    <label>
                        <input type="checkbox" name="hobbies" id="" value="reading" defaultChecked={state.hobbies?.includes("reading")}/>
                        Reading
                    </label>
                    <label>
                        <input type="checkbox" name="hobbies" id="" value="cooking" defaultChecked={state.hobbies?.includes("cooking")}/>
                        Cooking
                    </label>
                </label>
            </div>

            <div>
                <button disabled={isPending} type="submit">Submit</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    )
}

export default IntroForm;