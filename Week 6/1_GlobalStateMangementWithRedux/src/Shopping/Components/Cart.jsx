import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import {PawPring} from "lucide-react"
import CheckoutBar from "./CheckoutBar";

function Cart(){
    const cart=useSelector(state=>state.cart.items)
    return (
        <>
            <div className="flex flex-col h-full">
                <div className="flex-1 space-y-8 px-6">
                    {cart.length>0 ?
                        cart.map((item)=>(
                            <CartItem key={item.id} {...item}/>
                    )):(
                        <div className="flex flex-col gap-4 h-full items-center pt-[50%] text-gray-300">
                            <PawPring size={30} />
                            <h3 className="text-lg">Your car is Empty</h3>
                        </div>
                    )}
                </div>

                {cart.length >0 && (
                    <div className="sticky bottom-0 gb-gray-800 p-8">
                            <CheckoutBar/>
                    </div>
                )}
            </div>
        </>
    )
}
export default Cart;