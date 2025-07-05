const ChildA=(props)=>{
    const steps=5;
    return (
        <button onClick={(e) => props.handler(steps,e)}>Click Me Child A</button>
    )
}

const ChildB=(props)=>{
    const name="Samadhan";
    return <button onClick={()=> props.handler(name)} type="button"> Click Me Child B</button>
}

function Event2(){
    const walking=(steps,e)=>{

        alert("Going for a walk steps :" +steps)
        e.stopPropagation();
    }

    const eating= (name)=>{
        alert( name+" am Eating");
    }

    return (
        <div onClick={()=>alert("alert")}>
            <ChildA handler={walking}/>
            <ChildB handler={eating}/>
        </div>
    )
}
export default Event2;