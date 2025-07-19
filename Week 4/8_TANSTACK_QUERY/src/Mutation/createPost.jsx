import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "./useForm";
import axios from "axios";
import WrapperReactQuery from "../ReactQuery/WrapperReactQuery";

function CreatePost(){

    // const {mutate,data,isPending,error}=useMutation('https://dummyjson.com/posts/add',"POST")

    const queryClient=useQueryClient();

    const {mutateAsync,data,isPending,error}=useMutation({
        mutationFn:sendPostToBackend,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["posts"],
            })
        }
    })

    async function sendPostToBackend(data){
        const response=await axios.post("https://dummyjson.com/posts/add",{...data,userId:5,id:23})
        return response.data;
    }

    console.log(data)

    const {register,handleFormSubmit}=useForm({
        initialValues:{
            title:"",
            body:"" 
        },
        onSubmit
    })

    function onSubmit(formData){
        // console.log("inside the submit method")
        // mutate({
        //     ...formData,
        //     userId:5,
        //     id:crypto.randomUUID()
        // })
        console.log(formData);
        mutateAsync(formData);
    }

    return (

        <>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Title:
                        <input type="text" {...register("title")} />   
                    </label>
                    <label>
                        Body:
                        <input type="text" {...register("body")} />   
                    </label>
                    <button >Submit</button>
                </form>
            </div>

            <WrapperReactQuery/>
        </>
        
    )
}
export default CreatePost;