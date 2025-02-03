import React from 'react'

import { Route, Routes } from 'react-router'
import GithubSearch from './pages/GithubSearch'
import Counter from './pages/Counter'
import Products from './Pages/Products'
import Layout from './components/Layout'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<GithubSearch />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/products' element={<Products />} />
      </Route>
        
    </Routes>
  )
}
