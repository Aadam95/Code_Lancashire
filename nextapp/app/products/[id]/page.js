import React from 'react';
import Image from 'next/image';

async function getProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return product;
}

export async function generateMetadata({ params }) {
    const id = params.id;
    const product = await getProduct(id);
    return {
        title: `My Store | ${product.title}`,
        description: product.description
    };
}

export default async function Page({ params }) {
    const id = params.id;
    const product = await getProduct(id);

    return (
        <div className="p-20 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative min-h-52 w-full h-64 md:h-96">
                <Image 
                    src={product.image} 
                    alt={product.title} 
                    layout="fill" 
                    objectFit="contain" 
                    objectPosition="center" 
                />
            </div>

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-xl">{product.title}</h1>
                    <span className="w-full h-full rounded-full bg-gray-600 p-1.5 text-white">£{product.price}</span>
                </div>
                <p>{product.description}</p>
                <button className="bg-gray-950 text-white px-4 py-2 rounded-md">Add to Cart</button>  
            </div>
        </div>
    );
}
