import { Minus, Plus, Trash } from 'lucide-react';
import { useDispatch } from "react-redux";

function CartItem({id,title,price,quantity,thumbnail}){
    const dispatch=useDispatch();
    return (
        <div className="flex shadow-xl group gap-6 border-b pb-8 border-gray-800">
            <div id="img-wrapper" className="h-20 w-20 rounded-xl overflow-hidden shrink-0">
                <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div id="cart-content" className="space-y-2 flex-1">
                <h3 className="font-fancy text-xl"> {title}</h3>
                < p className="text-lg text-gray-300">Rs. {price}</p>
                <div id="cart-footer" className="flex gap-4 mt-4 items-center">
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-600 cursor-pointer"
                    onClick={()=>dispatch(decrementQuantity({id}))}>
                        {quantity ==1 ? <Trash color="red" size={16} />:<Minus size={16} />}
                    </button>
                    <span className='w-6 text-center'>{quantity}</span>
                    <button className='p-2 rounded-lg bg-fray-800 hover:bg-gray-600 cursor-pointer'>
                        <Plus size={16} />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default CartItem;