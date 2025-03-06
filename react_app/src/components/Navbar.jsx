import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
    return (
        <div className="flex items-center gap-4 p-4">
            <Link to='/'>GithubSearch</Link>
            <Link to='/counter'>Counter</Link>
            <Link to='/products'>Products</Link>
            <Link to='/mortgage'>Mortgage Calculator</Link>
        </div>
    )
}