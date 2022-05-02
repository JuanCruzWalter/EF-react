import React from 'react'
import CartWidjet from '../CartWidjet/CartWidjet'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navBar'>
        <h1>RKT Indumentaria</h1>
        <a href="#" className='btn_menu btn_menu2'>Inicio</a>
        <a href="#" className='btn_menu btn_menu2'>Contacto</a>
        <a href="#" className='btn_menu btn_menu2'>Ofertas</a>
        <select name="Productos" className='btn_menu' id="">
            <option value="Deportivo">Pantalones</option>
            <option value="Urbano">Remeras</option>
            <option value="123">Gorras</option>
            <option value="123">Zapatillas</option>
        </select>
        <input type="text" name="" id="" className='btn_menu btn_menu-input' placeholder='buscar' />
        <a href="#" className='btn_menu'><CartWidjet/></a>
            

    </div>
  )
}

export default NavBar