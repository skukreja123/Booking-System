import "./properties.css"
import usefetch from "../../hooks/usefetch.js";
const properties = () => {

    const { data, loading } = usefetch("/hotels/CountByType");

    const images =  [
        "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg",
        "https://media.istockphoto.com/id/1203592129/photo/aerial-view-of-the-palm-jumeirah-island-dubai-downtown-skyline-united-arab-emirates-or-uae.jpg?s=1024x1024&w=is&k=20&c=ESioV-W8VmeizIL-tXiKpi9QKTR42qpv5lKCOuq7bEU=",
        "https://media.istockphoto.com/id/1459592553/photo/beach-chairs-at-a-swimming-pool-at-a-luxury-hotel-sunbed-chair-and-umbrella.jpg?s=1024x1024&w=is&k=20&c=jiHRbaodss4XMRQ-MCp8qQlHgwa_L8XuokYS3NSydwA=",
        "https://media.istockphoto.com/id/1402098025/photo/beautiful-island-of-santorini-greece.jpg?s=1024x1024&w=is&k=20&c=u6iqHTD44uRuEoC2MMArU1unY8aeNRLnmxF7scNMk3k=",
        "https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg",
    ]

  return (
    <div className="plist">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="plistitem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="plistimg"
                />
                <div className="plisttittle">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default properties

// eslint-disable-next-line no-lone-blocks
{/* <div className="plistitem">
<img src="https://media.istockphoto.com/id/1203592129/photo/aerial-view-of-the-palm-jumeirah-island-dubai-downtown-skyline-united-arab-emirates-or-uae.jpg?s=1024x1024&w=is&k=20&c=ESioV-W8VmeizIL-tXiKpi9QKTR42qpv5lKCOuq7bEU=" alt="" className="plistimg" />
<div className="plisttittle">
    <h1>Apartment</h1>
    <h2>233 Hotels</h2>
</div>
</div>
<div className="plistitem">
<img src="https://media.istockphoto.com/id/1459592553/photo/beach-chairs-at-a-swimming-pool-at-a-luxury-hotel-sunbed-chair-and-umbrella.jpg?s=1024x1024&w=is&k=20&c=jiHRbaodss4XMRQ-MCp8qQlHgwa_L8XuokYS3NSydwA=" alt="" className="plistimg" />
<div className="plisttittle">
    <h1>Resorts</h1>
    <h2>233 Hotels</h2>
</div>
</div>
<div className="plistitem">
<img src="https://media.istockphoto.com/id/1402098025/photo/beautiful-island-of-santorini-greece.jpg?s=1024x1024&w=is&k=20&c=u6iqHTD44uRuEoC2MMArU1unY8aeNRLnmxF7scNMk3k=" alt="" className="plistimg" />
<div className="plisttittle">
    <h1>Vellas</h1>
    <h2>233 Hotels</h2>
</div>
</div>
<div className="plistitem">
<img src="https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg" alt="" className="plistimg" />
<div className="plisttittle">
    <h1>Cabins</h1>
    <h2>233 Hotels</h2>
</div> */}