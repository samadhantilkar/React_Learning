import z from "zod";

const ordersSchema=z.object({
    customer:z.object({
        name:z.string().min(3),
        email:z.email()
    }),
    password:z.string()
        .min(8)
        .regex(/[A-Z]/,"Password must contain at least one uppercase letter")
        .regex(/[a-z]/,'Password must contain at least one lowercase letter'),
    id:z.number().min(1000),
    date:z.date().optional(),
    price:z.number().min(10).nullable(),
    category: z.string().refine((value)=>{
        if(value==="ORANGE") return false;
        return true;
    },{
        message:"Not a valid category, can't use ORANGE"
    }),
    quantity: z.number().default(1)
})

const orderData={
    customer: {
        name:"ram",
        email:"ram@gmail.com"
    },
    id:1245,
    date:new Date("2014-07-09"),
    price:123.45,
    password:"Samadhan",
    category:"APPLE",
    // quantity:10
}

const data=ordersSchema.parse(orderData)
console.log(data)