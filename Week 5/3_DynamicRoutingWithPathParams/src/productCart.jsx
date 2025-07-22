import { Link } from "react-router";

function ProductCart({product}){
    return (
        <div className="border p-2 flex-auto">
            <div>
                <img src={product.thumbnail} alt={product.title} />
            </div>

            <h3>{product.title}</h3>
            <div className="flex justify-between item-center">
                  <p>{product.price}</p>
                <Link to={`${product.id}`} className="bg-blue-600 px-4 py-2 hover:cursor-pointer hover:bg-blue-500">Expore</Link>
            </div>
        </div>
    )
}
export default ProductCart;