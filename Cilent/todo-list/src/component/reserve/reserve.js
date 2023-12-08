/* eslint-disable react-hooks/rules-of-hooks */
import { faCircleXmark, faL } from "@fortawesome/free-solid-svg-icons"
import "./reserve.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usefetch from "../../hooks/usefetch"
import { useContext, useState  } from "react"
import { ContextSearch } from "../../Context/ContextSearch"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const reserve = ({setopen , hotelid}) => {

   const {data,location} = usefetch(`room/${hotelid}`);

   const [selectedroom,setselected] = useState([]);


   const handleslect  = (e)=>{
    const select = e.target.checked;
    const value =e.target.value;
    setselected(select ? [...selectedroom,value]: selectedroom.filter((item)=> item !== value))
   }

   //check available date
   const {dates} = useContext(ContextSearch);

   const getdatesinrange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

   const alldate = getdatesinrange(dates[0]?.startDate,dates[0]?.endDate);

   console.log(alldate);

//    restruct form order same room
   const isavaible = (roomnum) =>{
     const isFound = roomnum.unavailableDates?.some((date) =>
      alldate?.includes(new Date(date)?.getTime())
    );
    return !isFound;
   }

const navigate = useNavigate();

   const handleclick =async () =>{
    try{
        await Promise.all(selectedroom.map(roomid=>{
            const res = axios.put(`/rooms/availability/${roomid}`,{dates:alldate,})
            return res.data
        }))
        setopen(false);
        navigate("/");
    } catch(err) {}

   }



  return (
    <div className="reserve">
        <div className="rconatinor">
            <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setopen(false)} className="rclose"/>
        <span>Select the Room:</span>
        {data.map(item =>(
            <div className="ritem" key={item._id}>
                <div className="riteminfo">
                    <div className="rtittle">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                    <div className="rmax">Max People :<b>{item.maxpeople}</b></div>
                    <div className="rprice">{item.price}</div>
                </div>
                <div className="rSelectRooms">
                {item.roomnumber.map((roomnum)=>(
                    <div className="room">
                         <label>{roomnum.number}</label>
                        <input type="checkbox" value={roomnum._id}
                             onChange={handleslect}
                             disabled={!isavaible(roomnum)} />
                    </div>
                    ))}
                </div>
            </div>
        ))}
        <button onClick={handleclick} className="rbutton">Reserve Now!</button>
        </div>
    </div>
  )
}

export default reserve
