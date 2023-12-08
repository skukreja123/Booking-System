/* eslint-disable array-callback-return */
import "./loveproperties.css"
import usefetch from "../../hooks/usefetch.js";

const loveproperties = () => {

    const { data, loading } = usefetch("/hotels?featured=true");


    const images = [
        "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
        "https://cdn.pixabay.com/photo/2021/11/28/11/54/bed-6830011_640.jpg",
        "https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg",
        "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_640.jpg",
        "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_640.jpg",
    ]

    return (
        <div className="fp">

            {loading ? "loading" : <>
                {data.map((item,i) => (
                     <div className="fpitem" key={item._id}>
                     <img src={images[i]} alt="" className="fpimg" />
                     <span className="fpname">{item.name}</span>
                     <span className="fpCity">{item.city}</span>
                     <span className="fpPrice">Starting from PKR {item.cheapest}</span>

                    {item.rating && <div className="rating">
                         <button>{item.rating}</button>
                         <span>Excellent</span>
                     </div>}
                 </div>
                ))}
                </>}

        </div>
    )
}

export default loveproperties


// eslint-disable-next-line no-lone-blocks
{/* <div className="fpitem">
        <img src="https://cdn.pixabay.com/photo/2021/11/28/11/54/bed-6830011_640.jpg" alt="" className="fpimg" />
        <span className="fpname">Flora Chiado Apartment</span>
        <span className="fpCity">Prague 3, Czech Republic Prague</span>
        <span className="fpPrice">Starting Price PKR 50000</span>
        <div className="rating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpitem">
        <img src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg" alt="" className="fpimg" />
        <span className="fpname">Flora Chiado Apartment</span>
        <span className="fpCity">Prague 3, Czech Republic Prague</span>
        <span className="fpPrice">Starting Price PKR 50000</span>
        <div className="rating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpitem">
        <img src="https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_640.jpg" alt="" className="fpimg" />
        <span className="fpname">Flora Chiado Apartment</span>
        <span className="fpCity">Prague 3, Czech Republic Prague</span>
        <span className="fpPrice">Starting Price PKR 50000</span>
        <div className="rating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpitem">
        <img src="https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_640.jpg" alt="" className="fpimg" />
        <span className="fpname">Flora Chiado Apartment</span>
        <span className="fpCity">Prague 3, Czech Republic Prague</span>
        <span className="fpPrice">Starting Price PKR 50000</span>
        <div className="rating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div> */}
