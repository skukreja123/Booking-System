import { useContext } from "react";
import "./nav.css"
import {Link, useNavigate } from "react-router-dom";
import { AuthSearch } from "../../Context/AuthContext";
const Navbar = () => {
  const {user} = useContext(AuthSearch);

  const navigate = useNavigate();

  const handleout = () =>{
    localStorage.clear();
    navigate('/');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  const handlein = ()=>
  {
    navigate('/Login');
  }

  const handlereg = ()=>
  {
    navigate('/Register');
  }

  return (
    <div className="navbar">
        <div className="navContainor">
          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
          <span className="logo">SKBooking</span>
          </Link>
            {user ? (<><div className="name">{user.name}</div><button onClick={handleout} className="logout">Log Out</button> </>) :  (<div className="navitem">
                <button onClick={handlereg}  className="navbtton">Register</button>
                <button onClick={handlein} className="navbtton">Login</button>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar
