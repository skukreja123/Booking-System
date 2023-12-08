/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import "./register.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const register = () => {

  const [name, setname] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  
    const handlechange = (e) => {
        if (e.target.id === "name") {
            setname(e.target.value);
        }
        else if (e.target.id === "Email") {
            setEmail(e.target.value);
        }
        else if (e.target.id === "password") {
            setpassword(e.target.value);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
  

    const handleclick = async (e) => {
        e.preventDefault();

        try {
          const response = await axios.post('/auth/register', {
            name: name,
            Email: Email,
            password: password
          });

          if (response.status === 200) {
            alert(response.data); 
            setname('');
            setEmail('');
            setpassword('');
            navigate("/Login");
          } else {
            alert("registration Failed");
          }
    }catch(error)
    {
        alert(error)
    }
  }

  return (
    <div className="regsiter">
        <div className="regcontainor">
            <input type="text" placeholder="Enter the Name" id="name" className="rinput"  onChange={handlechange}/>
            <input type="email"placeholder="Enter the Email" id="Email" className="rinput" onChange={handlechange}/>
            <input type="password" placeholder="Enter the Password" id="password" className="rinput" onChange={handlechange}/>
            <button onClick={handleclick} className="btn">Register</button>
        </div>
    </div>
  )
}

export default register
