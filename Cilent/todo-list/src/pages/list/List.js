/* eslint-disable react-hooks/rules-of-hooks */
import "./list.css"
import Navbar from "../../component/navbar/nav";
import Header from "../../component/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format, setDate } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/search/searchitem";
import usefetch from "../../hooks/usefetch.js";






const list = () => {
  const [openDate, setopendate] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [desitination, setdestination] = useState(location.state.desitination);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dates, setdates] = useState(location.state.dates);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [options, setoption] = useState(location.state.options);


  const [min,setmin] = useState(undefined);
  const [max,setmax] = useState(undefined)

  const { data, loading,refatch } = usefetch(`/hotels?city=${desitination}&min=${min || 0}&max=${max || 10000}`);

const handleclick = ()=>{
   refatch();
}



  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainor">
        <div className="listwrapper">
          <div className="listseach">
            <h1 className="lstitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input placeholder={desitination} type="text" />
            </div>
            <div className="lsItem">
              <label >Check-in-Date</label>
              <span onClick={() => setopendate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange
                onChange={item => setdates([item.selection])}
                ranges={dates}
                minDate={new Date()}
              />}
            </div>

            <div className="lsItem">
              <label >Options</label>
              <div className="lsoption">
                <div className="lsoptionitem">
                  <span className="lsoptionttext">Min Price <small>Per night</small></span>
                  <input type="number" onChange={e=>setmin(e.target.value)} className="lsoptioninput" />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptionttext">Max Price <small>Per night</small></span>
                  <input type="number" onChange={e=>setmax(e.target.value)} className="lsoptioninput" />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptionttext">Adult</span>
                  <input type="number" min={1} className="lsoptioninput" placeholder={options.adult} />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptionttext">Children</span>
                  <input type="number" min={0} className="lsoptioninput" placeholder={options.children} />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptionttext">Room</span>
                  <input type="number" min={1} className="lsoptioninput" placeholder={options.room} />
                </div>
              </div>

            </div>
            <button onClick={handleclick}>Search</button>
          </div>

          <div className="listresult">
            {loading ? "loading" : <>
              {
                data.map(item => (
                  <SearchItem item={item} key={item._id} />
                ))
              }


            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default list
