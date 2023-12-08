import "./Home.css"
import Navbar from "../../component/navbar/nav";
import Header from "../../component/header/Header";
import Featured from "../../component/featured/feature";
import Properties from "../../component/propertieslist/properties";
import Loveproperties from "../../component/loveproperties/loveproperties";
import Mail from "../../component/mail/mail";
import Footer from "../../component/footer/footer";

const home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homecantainor">
          <Featured/>
          <h1 className="hometitle">Broswer by properties type</h1>
          <Properties/>
          <h1 className="hometitle">Home guests love</h1>
          <Loveproperties/>
          <Mail/>
          <Footer/>
        </div>
    </div>
  )
}

export default home
