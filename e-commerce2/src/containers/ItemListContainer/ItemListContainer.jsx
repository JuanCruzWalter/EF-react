import React from 'react'
import "./ItemListContainer.css"
import {useEffect, useState} from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemCount from '../../componentes/ItemCount/ItemCount'



function ItemListContainer({saludo}) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)

  useEffect( () => {
    getFetch
    .then(resp =>  setProductos(resp) )
    .catch(err => console.log(err) )
    .finally(() => setLoading(false))  
  },[]);

  console.log(productos);
  

  return (
    <div>
        <h1 className='saludo'>{ saludo }</h1>
        {
          loading ?
            <h2 className='cargando'>Cargando..</h2>
          :
            productos.map((productos)=> <div className='card' key={productos.id}>
                                            <div className='card_nombre'>{productos.name}</div>
                                            <div className='card_descripcion'>{productos.description}</div>
                                            <div className='card_contador'><ItemCount/></div>
                                        </div>
          )
        }
         
             
          
          
    
    </div>
  )
}

export default ItemListContainer