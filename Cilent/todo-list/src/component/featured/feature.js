import usefetch from "../../hooks/usefetch.js";
import "./feature.css";

const feature = () => {

    const { data, loading } = usefetch("/hotels/CountByCity?Cities=karachi,Lahore,Islamabad");
    // console.log(data);


    return (
        <div className="feature">
            {loading ? ("Loading please Wait") : <><div className="featureditem">
                <img src="https://media.istockphoto.com/id/507551802/photo/istanbul-the-capital-of-turkey.jpg?s=1024x1024&w=is&k=20&c=tFQfa_UnP0BgHP9MiAwYdYAQNMveTQzhtJZBTPqd5m8=" alt="" className="featreimg" />
                <div className="featuredTitle">
                    <h1>Karachi</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>

                <div className="featureditem">
                    <img src="https://media.istockphoto.com/id/1353096634/photo/baku-city-skyline-in-azerbaijan.jpg?s=1024x1024&w=is&k=20&c=yXFldXKIRz2p2ifcfKRjAfUOKyAvBsSxKdLPTzDcTEw=" alt="" className="featreimg" />
                    <div className="featuredTitle">
                        <h1>Lahore</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>

                <div className="featureditem">
                    <img src="https://cdn.pixabay.com/photo/2018/03/02/17/19/paris-3193674_1280.jpg" alt="" className="featreimg" />
                    <div className="featuredTitle">
                        <h1>Islamabad</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div></>}

 

        </div>



    )
}

export default feature
