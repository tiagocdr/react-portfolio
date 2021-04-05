import {NavLink} from "react-router-dom"

const Nav = () => { 
    return (    
        <>
        <nav>
            <NavLink to='/home'activeStyle={{fontWeight: "bold",color: "red"}}> 
                Home
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/portfolio'>
                Portfolio
             </NavLink>
            <NavLink to='/contact'> 
                Contact me
            </NavLink>
        </nav>
        </>
    )
}

export default Nav