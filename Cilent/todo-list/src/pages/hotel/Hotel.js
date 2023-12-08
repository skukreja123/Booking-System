/* eslint-disable no-undef */
import "./Hotel.css"

import Navbar from "../../component/navbar/nav";
import Header from "../../component/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Mail from "../../component/mail/mail";
import Footer from "../../component/footer/footer";
import { useContext, useState } from "react";
import usefetch from "../../hooks/usefetch.js";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextSearch } from "../../Context/ContextSearch";
import { AuthSearch } from "../../Context/AuthContext";

import Reserve from "../../component/reserve/reserve";

const Hotel = () => {
  // describe  the place of location when we click the button
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slidenumber, setslidenumber] = useState(0);

  const [open, setopen] = useState(false);


  const {data,loading} = usefetch(`/hotels/find/${id}`);

  const {dates} = useContext(ContextSearch);
// console.log(dates);
  //substract the starting date from ending dates
  const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;
  function daydifference(date1,date2)
  {
    const timediff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffdays = Math.ceil(timediff/MILLISECOND_PER_DAY);
    return diffdays;
  }

  const days = daydifference(dates[0]?.endDate, dates[0]?.startDate);


  console.log(days);
  const handleOpen = (i) => {
    setslidenumber(i);
    setopen(true);
  }


  const handlearrow = (direct) => {
    let newslide;
    if (direct === 'l') {
      newslide = slidenumber === 0 ? 5 : slidenumber - 1;
    }
    else {
      newslide = slidenumber === 5 ? 0 : slidenumber + 1;
    }
    setslidenumber(newslide);
  }



  const {user} = useContext(AuthSearch);
  const navigate = useNavigate();
  const [openmodel,setopenmodel] = useState(false);

  const handleclick = () =>{
    if(user)
    {
      setopenmodel(true);

    }
    else{
      navigate("/Login")
    }
  }

  const photos = [
    {
      src: "https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349698_640.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/05/17/18/03/lobby-346426_640.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/01/16/11/19/hotel-601327_640.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461_1280.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/04/15/11/43/hotel-1330834_640.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/06/10/01/03/hotel-1447197_640.jpg"
    },
  ];



  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "loading" : (<div className="hotelcantainor">
        {open && <div className="slider" >
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setopen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handlearrow("l")} />
          <div className="sliderwrapping">
            <img src={photos[slidenumber].src} alt="" className="sliderbar" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handlearrow("r")} />
        </div>}

        <div className="hotelwrapper">
          <button className="booknow">Reserve or Book Now</button>
          <h1 className="hoteltittle">{data.name}</h1>
          <div className="hoteladdress">
            < FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hoteldistance">Excellent Location - {data.distance}</span>
          <span className="hotelprice">Lorem ipsum dolor sit amet Price: {data.cheapest} consectetur adipisicing elit. Veniam.</span>
          <div className="hotelimgage">
            {photos.map((photo, i) => (
              <div className="hotelimgwrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelimg" />
              </div>
            ))}
          </div>
          <div className="hoteldetails">
            <div className="detailstext">
              <h1 className="hoteltittle">{data.title}</h1>
              <p className="hoteldesc">{data.Description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, architecto! Tenetur commodi mollitia molestias cupiditate minima omnis eaque dicta neque, veritatis totam laudantium fugit et sed quibusdam fuga quidem dignissimos inventore doloremque accusamus earum voluptatem magnam velit architecto natus! Dolores magni debitis laudantium dolore iste cum, totam enim, inventore dolorem illum distinctio quos voluptates sint natus mollitia necessitatibus assumenda soluta perferendis numquam libero cupiditate vitae laboriosam dolor officia! Voluptate accusamus minus provident repellat odit laboriosam cum minima vel obcaecati suscipit.</p>
            </div>
            <div className="hotelpricefinal">
              <h1>Perfect for a {days}-night</h1>
              <span>Located in the real heart Lorem ipsum dolor sit amet.</span>
              <h2><b>PKR{days * data?.cheapest}</b>({days} Night Per Room)</h2>
              <button onClick={handleclick}>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
      </div>)}
      {openmodel && <Reserve setopen = {setopenmodel} hotelid = {id}/>}
    </div>
  )
}

export default Hotel




