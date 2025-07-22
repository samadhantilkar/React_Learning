import axios from "axios";
import { useEffect, useState } from "react";
import ProductCart from "./productCart";
import { useLocation, useSearchParams } from "react-router";

function Products(){

    const [products,setProducts]=useState([]);
    const [params,setParams]=useSearchParams();
    const location=useLocation();

    console.log(location);


    const query=params.get("query");

    
    useEffect(()=>{
        async function fetchData() {
            if(query!=null){
                const response=await axios(
                "https://dummyjson.com/products/search?q="+query
                );
                const data=response.data;
                console.log(data.products)
                setProducts(data.products);
            }else{
                const response=await axios(
                "https://dummyjson.com/products");
                const data=response.data;
                console.log(data.products)
                setProducts(data.products);
            }
        }
        fetchData()
    },[query])

    function onQuerySubmit(formData){
        const data=Object.fromEntries(formData);
        setParams({...params,
            query:data.query});
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg my-4 ">All Products</h2>
            <form action={onQuerySubmit}>
                <input type="text" defaultValue={query} placeholder="e.g Polish" name="query"  className="border px-4 w-full py-2"/>
            </form>
            <div className="flex flex-wrap gap-2">
                {products.map(item =>(<ProductCart  key={item.id} product={item} />))}
            </div>
        </div>
    )
}
export default Products;