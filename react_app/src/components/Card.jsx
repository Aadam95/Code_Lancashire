import React from 'react'
import Heading from './Heading'

export default function Card({title, children}) {
  return (
    <div>
        <Heading text={title} />
        
        {children}

    </div>
  )
}
