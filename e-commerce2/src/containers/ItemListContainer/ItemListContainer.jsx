import React from 'react'
import "./ItemListContainer.css"
import {useEffect, useState} from 'react'
import { getFetch } from '../helpers/getFetch'



function ItemListContainer({saludo}) {
  const [productos, setProductos] = useState([])
  useEffect( () => {
    getFetch
    .then(resp =>  setProductos(resp) )
    .catch(err => console.log(err) )
    .finally(() => console.log("finally"))  
  },[]);

  console.log(productos);
  return (
    <div>
        <h1 className='saludo'>{ saludo }</h1>
        { productos.map((producto)=> <li key={producto.id}className='lista'> {producto.name} {producto.description} {producto.stock} </li>) }
    </div>
  )
}

export default ItemListContainer