import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductList(){
    const products=useSelector((state)=>state.products.items);
    const status=useSelectore((state)=>state.products.status)
    const dispatch=useDispatch();

    useEffect(()=>{

    },[])

    return(
        <div className="flex flex-wrap gap-8 justify-around">
            {products.map((product)=>(
                <ProductCard key={product.id} {...product}/>
            ))}
        </div>
    )
}
export default ProductList;