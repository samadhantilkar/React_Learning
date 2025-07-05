function Event1(){
    const handleClick = (e) =>{
        console.log(e.screenX );
        console.log(e.screenY)
        alert("I was clicked")
    }
    const handleMouseMove= (event) => {
        // console.log("Hovered");
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
    }

    const handleUsernameChanged = (e) =>{
        console.log(e.target.value);
    }
    return (
        // <div className="">
        //     <button onClick={handleClick} onMouseMove={handleMouseMove}>Click Me</button>
        // </div>

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name"  type="text" name="username" onChange={handleUsernameChanged} />  
            <br/>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" />
            <br />
            <button>Sumbit</button>
        </form>
    )
}
export default Event1;