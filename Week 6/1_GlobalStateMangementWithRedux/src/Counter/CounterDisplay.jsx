import { useSelector } from "react-redux";

function CounterDisplay(){

    const count=useSelector(state=>state.counter.count)

    return <p className="text-4xl">{count}</p>
}
export default CounterDisplay;