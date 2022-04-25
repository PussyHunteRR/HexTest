import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={style.div}>
                <h1>Choose dish</h1>
                <div>
                    <NavLink className={style.item} to='/pizza'>Pizza</NavLink>
                </div>
                <div>
                    <NavLink className={style.item} to="/sandwich">Sandwich</NavLink>
                </div>
                <div>
                    <NavLink className={style.item} to="/soup">Soup</NavLink>
                </div>
        </div>
    )
}

export default Navbar
