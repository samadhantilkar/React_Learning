import { useForm } from "./useForm";
import { useMutation } from "./useMutation";

function CreatePost(){

    const {mutate,data,isPending,error}=useMutation('https://dummyjson.com/posts/add',"POST")

    const {register,handleFormSubmit}=useForm({
        initialValues:{
            title:"",
            body:"" 
        },
        onSubmit
    })

    function onSubmit(formData){
        // console.log("inside the submit method")
        mutate({
            ...formData,
            userId:5,
            id:crypto.randomUUID()
        })
    }

    console.log(data)


    return (
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
    )
}
export default CreatePost;