import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router";

function ProductDetails(){
    const params=useParams();
    const [product,setProduct]=useState(null);
    const id=params.id;

    if(!id) return <p>Id not found</p>

    useEffect(()=>{
        async function fetchData() {
            const response=await axios("https://dummyjson.com/products/"+id);
            const data=response.data;
            console.log(data)
            setProduct(data);
        }
        fetchData()
    },[id])

    if(!product) return <p>Loading...</p>

    return(
        <div className="space-y-2">
            <div>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <p className="text-sm ">ID: {product.id}</p>
            <h1 className="text-2xl font-semibold ">{product.title}</h1>
            <p>{product.description} </p>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductDetails;