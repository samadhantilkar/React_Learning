import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoPage(){

    const [person,setPerson]=useState({
        name:"Samadhan",
        age:20
    })

    function handleIncreaseAge(){
        //Object mutation avoid doing this
        // person.age++;
        // console.log(person.age);
        // setPerson(person);

        // const newPerosn=person //this will not work because the memory address is not change 
                                  // so there will no re-rendering happen

        // const newPerson={...person};
        const newPerson={...person,age:person.age+1};
        // newPerson.age++;
        setPerson(newPerson);
    }

    const [todos,setTodos]=useState([]);

    function handledFormSubmit(e){
        e.preventDefault();
        const todoText=e.target["todo"].value;
        if(todoText=='') return 
        console.log(todoText);

        const newTodos=[...todos,{
            text:todoText,
            id:crypto.randomUUID(),
            completed:false  
        }];
        
        setTodos(newTodos);

        console.log(newTodos);

        e.target.reset();

    }

    function onTodoToggle(id,checked){

        // const item=todos.find((item)=>item.id===id);
        // item.completed===checked;

        // setTodos(todos);

        const newTodos=todos.map((item)=> {
            if(item.id===id){
                return {...item,completed:checked};
            }
            return item;
        })
        setTodos(newTodos); 
    }

    function HandleDeleteDoto(id){
        const newTodo=todos.filter(item=>item.id!==id);
        setTodos(newTodo);
    }

    const emptyState=(
        <h3>Nothing's Here, Add a Todo</h3>
    )

    return (
        <div>
            {/* <p>{person.name}</p>
            <p>{person.age}</p>
            <button onClick={handleIncreaseAge}>Increase Age</button> */}

            <h1>Super TODO</h1>      

            <form onSubmit={handledFormSubmit}>
                <input 
                    type="text" 
                    name="todo" 
                    placeholder="Enter your Todo here..."
                />
                <button >Submit</button>
            </form>

            {todos.length==0?emptyState:<div>{todos.map((item) => <TodoItem key={item.id} item={item} onTodoToggle={onTodoToggle} HandleDeleteDoto={HandleDeleteDoto}/> )}
            </div>}

            
        </div>
    );  
}

export default TodoPage;