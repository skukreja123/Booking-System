import { Link } from "react-router-dom"
import "./searchitem.css"

const searchitem = ({item}) => {
  return (
    <div className="searchitem">
        <img src={item.photos[0]} alt="" className="siImg"/>
        <div className="sidesc" >
            <h1 className="sitittle">{item.name}</h1>
            <span className="sidistance">{item.distance}</span>
            <span className="sitaxi">Free Airport taxi</span>
            <span className="sisubtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            <span className="sifeature">{item.Description}</span>
            <span className="sicencel">Free Cencelation</span>
            <span className="sicencelsubtitle">You can Cencel Later,So look in the high price</span>
        </div>
        <div className="sidetails">
            {item.rating && <div className="israting">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="isdetailstext">
                <span className="isprice">{item.cheapest}</span>
                <span className="istaxi">Include Taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                <button className="sibtn">See Availabilty</button>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default searchitem
