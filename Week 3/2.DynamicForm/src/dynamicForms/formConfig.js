export const SIGN_IN_FORM_CONFIG=[
    {
        id:"username",
        name:"username",
        label:"Username",
        placeholder:"e.g john123",
        defaultValue:"samadhan",
        type:"text"

    },
    {
        id:"email",
        name:"email",
        label:"email",
        placeholder:"e.g john@eg.com",
        type:"email"
    },
    {
        id:"password",
        name:"password",
        label:"Password",
        placeholder:"e.g Strong Password",
        type:"password"
    }   
]

export const SIGN_UP_FORM_CONFIG=[
    {
        id:"username",
        name:"username",
        label:"Name",
        placeholder:"e.g john",
        type:"text",
        validate:(val)=>{
            if(!val) return "Username is required";
            if(val.length<4) return "Username should be of at least length 4"
            return null;
        } 
    },
    {
        id:"email",
        name:"email",
        label:"email",
        placeholder:"e.g john@eg.com",
        type:"email",
        validate:(val)=>{
            if(!val) return "Email is required";
            const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(val)) return "Email is not valid"
            return null
        }
    },
    {
        id:"password",
        name:"password",
        label:"Password",
        placeholder:"e.g Strong Password",
        type:"password",
        validate:(val)=>{
            if(!val) return "Password is required";
            if(val.length<6) return "Password should be at least length 6";
            return null;
        }
    },
    {
        id:"confirmPassword",
        name:"confirmPassword",
        label:"ConfirmPassword",
        placeholder:"e.g Same as above",
        type:"password",
        validate:(val,formData)=>{
            if(val!==formData.password) return null;
            return "Passwords do not match"
        }
    },
    {
        id:"gender",
        name:"gender",
        label:"Gender",
        type:"radio",
        options :[
            {
                label:"Male",
                value:"male",
            },
            {
                label:"Female",
                value:"female",
            },
            {
                label:"Other",
                value:"other"
            },
        ],
        validate:(val)=>{
            if(val) return null;
            return "Please select a Gender"
        }
    } ,
    {
        id:"country",
        name:"country",
        label:"Country",
        placeholder:"",
        type:"select",
        options:[
            {
                label:"India",
                value:"india",
            },
            {
                label:"USA",
                value:"usa",
            },
            {
                label:"Canada",
                value:"canada"
            }
        ],
        validate:(val)=>{
            if(val) return null;
            return "Please select a Country"
        }
    },
    {
        id:"hobbies",
        name:"hobbies",
        label:"Hobbies",
        placeholder:"",
        type:"checkbox",
        options:[
            {
                label:"Sport",
                value:"sport",
            },
            {
                label:"Reading",
                value:"reading",
            },
            {
                label:"Coding",
                value:"coding"
            }
        ],
        validate:(val)=>{
            if(val && val.length>0) return null;
            return "Please select at least one Hobby";
        }
    }
    
    
]