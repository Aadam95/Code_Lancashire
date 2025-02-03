import { useEffect, useState } from "react"


  function ProductCard({ product }) {
    return (
        <div className="group relative">
            <img
                  alt={product.id}
                  src={product.url}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Album ID: {product.albumId}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">ID: {product.id}</p>
            </div>
              </div>
    )
  }

  export default function ProductList() {

    const [products, setProducts] = useState([])

    function getProducts(){
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => {console.log(data);setProducts(data);
        })
    }

    useEffect(()=>{
        getProducts()
    }, [])

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Photo Albums</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (<ProductCard  key={product.id} product={product} />))}
          </div>
        </div>
      </div>
    )
  }


  