import { useActionState, useState } from "react";

function IntroForm(){

    const initState={
        firstName:"Samadhan",
        lastName:"Tilkar",
        email:"samadhantilkar@gmail.com",
        password:"1234",
        gender:"male",
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
        // const {name,value}=e.target;
        // console.log(name,":",value);

        const {name,value,type,checked}=e.target;

        if(type==='checkbox'){
            console.log(type,name,value,checked);
            const newHobbies=checked?[...data.hobbies,value]:
            data.hobbies.filter((item)=>item!==value);

            const newData={...data,hobbies:newHobbies};
            setData(newData);
            console.log(newData);
            return;
        }
        // console.log(name,":",value);
        const newData={...data,[name]:value};
        console.log(newData);
        setData(newData);
    }

    const emptyState={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        gender:"",
        hobbies:[],
        country:""
    }

    const [data,setData]=useState(emptyState);

    function onformSubmit(e){
        e.preventDefault();
        console.log(data);
        //call backend and send the data there...

        setData(emptyState)
    }

    return (
        <form onSubmit={onformSubmit} noValidate>
            <label htmlFor="name">
                First Name
            </label>
            <input 
                id="name" 
                name="firstName" 
                type="text" 
                placeholder="e.g Samadhan" 
                value={data?.firstName}
                // defaultValue={state.firstName} 
                onChange={handleInputUpdate}/>
            <br />
            <label>
                Last Name
                <input type="text" 
                name="lastName" 
                placeholder="e.g Tilkar" 
                value={data?.lastName}
                onChange={handleInputUpdate}
                // defaultValue={state.lastName} 
                />
            </label>

            <div>
                <label>
                    Email
                    <input type="email"  
                    // defaultValue={state.email} 
                    // readOnly 
                    name="email" 
                    value={data?.email}
                    onChange={handleInputUpdate}
                    placeholder="e.g tilkarsamadhan@gmail.com"  />
                </label>
            </div>

            <div>
                <label>
                    Password:
                    <input  name="password" 
                            type="password"
                            value={data.password} 
                            onChange={handleInputUpdate}
                            placeholder="Password" />
                </label>
            </div>


            <div>
                <label>
                    Gender
                    <label>
                        <input type="radio" name="gender" value="male"  
                        checked={"male"===data.gender} 
                        onChange={handleInputUpdate}
                        // defaultChecked={"male"===state.gender}
                        />
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" 
                        checked={"female"===data.gender}
                        onChange={handleInputUpdate}
                        // defaultChecked={"female"===state.gender}
                        />
                        Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" 
                        checked={"other"===data.gender}
                        onChange={handleInputUpdate}
                        // defaultChecked={"other"===data.gender}
                        />
                        Other
                    </label>
                </label>
            </div>


            <div>
                <label>
                    Country:
                    <select name="country" value={data.country} onChange={handleInputUpdate}>
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
                        <input type="checkbox" name="hobbies" value="sport"
                        // defaultChecked={state.hobbies?.includes("sport")}
                        checked={data.hobbies.includes("sport")}
                        onChange={handleInputUpdate}
                         />
                        Sport
                    </label>

                    <label>
                        <input type="checkbox" name="hobbies"  value="reading" 
                        checked={data.hobbies.includes("reading")}
                        onChange={handleInputUpdate}
                        // defaultChecked={state.hobbies?.includes("reading")}
                        />
                        Reading
                    </label>
                    <label>
                        <input type="checkbox" name="hobbies"  value="cooking" 
                        checked={data.hobbies.includes("cooking")}
                        onChange={handleInputUpdate}
                        // defaultChecked={state.hobbies?.includes("cooking")}
                        />
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