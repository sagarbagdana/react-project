import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">E-CART</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/men"> Men</Link></li>
                <li><Link to="/kids"> Kids</Link></li>
                <li><Link to="/home">Home & Kitchen</Link></li>
                <li><Link to="/electronics">Electronics</Link></li>
                <li><Link to="/beauty">Beauty & Health</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
            
        </div>
    )
}

export default Nav