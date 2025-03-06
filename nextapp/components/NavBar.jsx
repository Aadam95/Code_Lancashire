import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className ="bg-gray-950 text-white flex items-center gap-5 p-5">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Products</Link>
        </div>
    )
}