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
    },
    {
        id:"confirmPassword",
        name:"confirmPassword",
        label:"ConfirmPassword",
        placeholder:"e.g Same as above",
        type:"password"
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
            }
        ]
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
        ]
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
        ]
    }
    
    
]