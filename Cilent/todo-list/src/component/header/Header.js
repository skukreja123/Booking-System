import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import {useContext, useState, usedates} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";
import { ContextSearch } from "../../Context/ContextSearch";
import { AuthSearch } from "../../Context/AuthContext";



const Header = ({type}) => {

  const [desitination , setdestination] = useState("");

  // For date search bhar
  const [openDate , setopendate] = useState(false);
  const [dates, setdates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  // for regsiter aduilt and children
  const [openoption , setopenoption] = useState(false);
  const [options, setoption] = useState({
      adult:1,
      children:0,
      room:1,
  });

const navigate  = useNavigate();

  const handle = (name , operation) =>{
    setoption(prev =>{ 
      return {
      ...prev, [name]:operation ==="I"?options[name]+1:options[name]-1,
     };
    })
  }

  const {user} = useContext(AuthSearch);


 const {dispatch} = useContext(ContextSearch);


  const handleSearch = ()  =>{
     dispatch({type:"NEW_SEARCH",payload: {desitination,dates,options}})
    navigate("/hotels", {state: {desitination,dates,options}} )
  }


  return (
    <div className="header">
        <div className= {type==="list" ? "listmode":"headercontainor"}>
        <div className="headerlist"> 
            <div className="headeritem active">
            <FontAwesomeIcon icon={faBed} flip/>
            <span>Stays</span>
             </div>
             <div className="headeritem">
            <FontAwesomeIcon icon={faPlane} flip/>
            <span>Flights</span>
             </div>
             <div className="headeritem">
            <FontAwesomeIcon icon={faCar} flip/>
            <span>Car Rentals</span>
             </div>
             <div className="headeritem">
            <FontAwesomeIcon icon={faBed} flip/>
            <span>Attractions</span>
             </div>
             <div className="headeritem">
            <FontAwesomeIcon icon={faTaxi} flip/>
            <span>Airport Taxi</span>
             </div>
        </div>
        {type !== "list" && <><h1 className="headertitle">The joy of home
            wherever you go</h1>
        <p className="headerdesc">Discover dreamy villas, houses, cabins & more</p>
        {!user && (<button className="headerbutton">Sign In /  Register</button>)} </>}


       { type !== "list" &&  <>
       <div className="headersearch">
          <div className="headersearchitem">
            <FontAwesomeIcon icon={faBed} className="headericon"/>
            <input type="text" placeholder="Where are you going" className="headersearchinpt" 
            onChange={e=>setdestination(e.target.value)}/>
          </div>

          <div className="headersearchitem">
            <FontAwesomeIcon icon={faCalendarDays} className="headericon"/>
            <span onClick={()=>setopendate(!openDate)} className="headerseacrhtext">{`${format(dates[0].startDate,"MM/dd/yyyy")} to
            ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>

            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setdates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
            />}



          </div>


          <div className="headersearchitem">
            <FontAwesomeIcon icon={faPerson} className="headericon"/>
            <span onClick={()=>setopenoption(!openoption)} className="headerseacrhtext">{`${options.adult} Adult . ${options.children} Children . ${options.room} Room `}</span>
              {openoption && <div className="options">
                <div className="optionItem">
                  <span className="optiontext">Adult</span>
                  <div className="optioncounter">
                  <button   disabled = {options.adult <=1 } className="optionlimitbutton" onClick={()=>handle("adult","d")}>-</button>
                  <span className="optionlimitnumber">{options.adult}</span>
                  <button className="optionlimitbutton" onClick={()=>handle("adult","I")} >+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optiontext">Children</span>
                  <div className="optioncounter">
                  <button  disabled = {options.children <=1 } className="optionlimitbutton" onClick={()=>handle("children","d")}>-</button>
                  <span className="optionlimitnumber">{options.children}</span>
                  <button className="optionlimitbutton" onClick={()=>handle("children","I")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optiontext">Room</span>
                  <div className="optioncounter">
                  <button  disabled = {options.room <=1 } className="optionlimitbutton" onClick={()=>handle("room","d")}>-</button>
                  <span className="optionlimitnumber">{options.room}</span>
                  <button className="optionlimitbutton" onClick={()=>handle("room","I")}>+</button>
                  </div>
                </div>
              </div>}
              

          </div>

          <div className="headersearchitem">
            <button className="headerbutton" onClick={handleSearch}>Submit</button>
          </div>

          

        </div>
        </>
        }



        </div>
    </div>

  )
}

export default Header
