import React from 'react'
import CartButton from '../components/CartButton'
import ProductList from '../components/ProductList'
import CartProvider from '../components/CartContext'

export default function Products() {
    return (
        <CartProvider>
            <CartButton />
            <ProductList />
        </CartProvider>
    )
}