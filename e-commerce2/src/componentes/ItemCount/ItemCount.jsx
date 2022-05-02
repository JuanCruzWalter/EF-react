import React from 'react';
import './ItemCount.css';
import { useState, useEffect } from 'react';



export default function ItemCount() {
    
  const stock = 10;
  const [count, setCount] = useState(1);
  const sumarCount = () => {
    setCount(count + 1);
  };
  const restarCount = () => {
    setCount(count - 1);
  };
  const alertAgregar = (e) => {
    
    alert('agregaste ' + count + ' productos al carrito');
  };

  

  return (
    <>
        <div className="contenedor-count">
            <div className="contenedor-btn">
                <button onClick={restarCount} disabled={count <= 1} className="btn-count">
                -
                </button>

                <label className="count"> {count} </label>

                <button onClick={sumarCount} disabled={count == stock} className="btn-count">
                +
                </button>
            </div>

            <div>
                <button onClick={alertAgregar} className="agregar">agregar</button>
            </div>
        </div>
    </>
  );
}