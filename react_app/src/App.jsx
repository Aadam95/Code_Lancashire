import React from 'react'
import Heading from './components/Heading'
import Card from './components/Card'
import Counter from './components/Counter'
import GithubSearch from './components/GithubSearch'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div>
      {/* <Heading text="First heading" />
      <Heading text="Second heading" />
      <Heading text="Third heading" />

      <Card title="Product 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, maxime cupiditate ipsum doloremque, beatae pariatur laudantium possimus excepturi optio perspiciatis impedit non nesciunt repellat ad magnam officia iste iure tempora!

        <button>Click</button>
        
      </Card> */}

      <Counter />  
      <GithubSearch />
      <ProductList />  
    </div>
  )
}
