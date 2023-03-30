import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Heart from './Heart'

const Galeria = () => {
    const fotos = useContext(MyContext)
  return (
    <div className='galeria grid-columns-5 p-3'>
      {fotos.map(foto =>(
        <div key={foto.id}>
        <Heart filled={false} />
      </div>
      ))}
    </div>
  )
}

export default Galeria
