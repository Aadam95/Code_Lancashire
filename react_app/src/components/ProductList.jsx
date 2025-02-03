import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext"



function ProductCard({ product }) {
  const { setCartCount } = useContext(CartContext)

function handleCartItems() {
  setCartCount((prev) => prev +1)
}  
    return (
        <><div className="group relative">
        <img
            alt={product.title}
            src={product.image}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">£{product.price}</p>
        </div>

    </div>
    <button onClick={handleCartItems}>Add to cart</button>
    </>
    )
}

export default function ProductList() {

    const [products, setProducts] = useState([])

    function getProducts(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }
  
    useEffect(()=>{
        getProducts()
    }, [])

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) =>  ( <ProductCard key={product.id} product={product} /> ))}
                </div>
            </div>
        </div>
    )
}