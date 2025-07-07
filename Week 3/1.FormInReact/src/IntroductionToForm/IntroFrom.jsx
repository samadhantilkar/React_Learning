function IntroForm(){
    function formSubmitted(formData){
        let data=Object.fromEntries(formData);
        const allHobbies=formData.getAll("hobbies")
        data={...data,hobbies:allHobbies};
        console.log(data);
    }

    function handleInputUpdate(e){
        const {name,value}=e.target;
        console.log(name,":",value);
    }

    return (
        <form action={formSubmitted} noValidate>
            <label htmlFor="name">First Name</label>
            <input id="name" name="firstName" type="text" placeholder="e.g Samadhan" defaultValue={"Samadhan"} onChange={handleInputUpdate}/>
            <br />
            <label>
                Last Name
                <input type="text" name="lastName" placeholder="e.g Tilkar" defaultValue="Tilkar" />
            </label>

            <div><label>
                Email
                <input type="email" readOnly name="email" placeholder="e.g tilkarsamadhan@gmail.com" defaultValue={"tilkarsamadhan"} />
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
                        <input type="radio" name="gender" value="male"/>
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female"/>
                        Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other"/>
                        Other
                    </label>
                </label>
            </div>


            <div>
                <label>
                    Country:
                    <select name="country">
                        <option value="" >Choose a Country</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                    </select>
                </label>
            </div>


            <div>
                <label>
                    Hobbies
                    <label >
                        <input type="checkbox" name="hobbies" id="" value="sport"/>
                        Sport
                    </label>

                    <label>
                        <input type="checkbox" name="hobbies" id="" value="reading"/>
                        Reading
                    </label>
                    <label>
                        <input type="checkbox" name="hobbies" id="" value="cooking"/>
                        Cooking
                    </label>
                </label>
            </div>

            <div>
                <button type="submit">Submit</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    )
}

export default IntroForm;