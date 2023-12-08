/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react"
import "./login.css"
import { AuthSearch } from "../../Context/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const login = () => {
    const [credentials,setcredentials] = useState({
        name:undefined,
        password:undefined,
    })

    const { loading, error,dispatch } = useContext(AuthSearch)

    const handlechange= (e)=>{
        setcredentials((prev) =>({...prev, [e.target.id]:e.target.value}));
    };

    const navigate = useNavigate();

    const handleclickchange = async (e) =>{
        navigate("/register");
    }


    // async because wwe api request
    // no passing payload beacuse it just update
    const handleclick = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/Login",credentials);
            dispatch({type:"LOGIN_SUCCESS",payload: res.data.details})
            navigate("/");

        }catch(err)
        {
            dispatch({type:"LOGIN_FAILED",payload:{message:"User Invalid"}});
        }
    }

  return (
    <div className="login">
        <div className="lcontainor">
            <input type="text" placeholder="username" id="name" onChange={handlechange} className="takeinput"/>
            <input type="password" placeholder="Password" id="password" onChange={handlechange} className="takeinput"/>
            <button disabled={loading} onClick={handleclick} className="btn">Login</button>
            <button disabled={loading} onClick={handleclickchange} className="btnchange">Register</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>



  )
}

export default login
