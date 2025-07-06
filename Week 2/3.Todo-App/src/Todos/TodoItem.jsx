function TodoItem(props){


    return (
        <div>
            <input id={props.item.id} onChange={(e)=> props.onTodoToggle(props.item.id,e.target.checked)} checked={props.item.completed} type="checkbox" />
            <label 
            style={{textDecoration: props.item.completed ? 'line-through':'none'}}
            htmlFor={props.item.id}>{props.item.text}</label>
            <button onClick={()=> props.HandleDeleteDoto(props.item.id)}>Delete</button>


        </div>
    )
}
export default TodoItem;