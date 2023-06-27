import { useState } from "react";
import{Link,Outlet} from 'react-router-dom'



const Header = () =>
{
    const[btnNameReact, setBtnNameReact] = useState("Login");
    return(
    <>
    <div className="header">
        <div className="logo-container">
            <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDMszOev5meVUs0m-AF8BOYHncIJYhfgg0A&usqp=CAU"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/contact'> Contact</Link></li>
                <li> Carts</li>
                <li><Link to='/about'> About </Link></li>
            
    
                <button className="login" onClick={()=>{
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
                >
                    {btnNameReact}
                </button>
            </ul>
        </div>
        </div>
        <Outlet />
        </>
         
        
    )
}
export default Header;