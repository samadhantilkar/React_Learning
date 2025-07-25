import CounterDisplay from "./CounterDisplay";
import CounterOperation from "./CounterOperation";

function Counter(){
    return (
        <div className="h-screen bg-black text-white flex item-center justify-center p-6 ">
            <div className="w-2xl min-h-[30%] p-6 bg-gray-800 rounded-lg flex flex-col gap-6 text-center items-center justify-center" >
                <CounterDisplay/>
                <CounterOperation/>
            </div>
        </div>
    )
}
export default Counter;