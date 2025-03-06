import React from 'react'

import { Route, Routes } from 'react-router'
import GithubSearch from './Pages/GithubSearch'
import Counter from './Pages/Counter'
import Products from './Pages/Products'
import Layout from './components/Layout'
import Mortgage from './Pages/Mortgage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<GithubSearch />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/products' element={<Products />} />
        <Route path='/mortgage' element={<Mortgage />} />
      </Route>
        
    </Routes>
  )
}
