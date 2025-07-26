import { useDispatch } from "react-redux";
import { COUNTER_ACTION_TYPES } from "./CounterRedux";

function CounterOperation(){

    const dispatch=useDispatch();

    return (
        <div className="flex gap-6 text-black text-4xl">
            <button onClick={()=>dispatch({type:COUNTER_ACTION_TYPES.DECREMENT , payload:{
                name:"Samadhan",
                by:2
            }})} 
            className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
                -
            </button>
            <button onClick={()=>dispatch({type:COUNTER_ACTION_TYPES.INCREMENT})} 
            className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition  active:bg-yellow-500 hover:bg-yellow-200 ">
                +
            </button>
        </div>
    )
}
export default CounterOperation;