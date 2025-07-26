import { useSelector } from "react-redux";

function CheckoutBar(){
    const cart=useSelector((state)=>state.cart.items);

    const totalItems=cart.reduce((sum,item) => sum+item.quantity,0);

    const totalAmount= cart.reduce((sum,item) => sum+item.quantity * item.price,0);

    return (
        <div className="space-y-2">
            <div id="total-item" className="flex justify-between items-center text-lg text-gray-300">
                <p>Total Items</p>
                <p className="font-bold">{totalAmount}</p>
            </div>
            <div id="total-amount" className="flex justify-between items-center text-lg">
                <p> Total Amount</p>
                <p>Rs. {totalAmount.toFixed(2)}</p>
            </div>
            <button className="bg-green-400 py-3 mt-4 w-full rounded-lg text-black font-medium cursor-pointer hover:gb-green-300">
                Process to Checkout
            </button>
        </div>
    )

}
export default CheckoutBar;