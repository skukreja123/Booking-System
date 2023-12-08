import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
  } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from './pages/login/login'; 
import Register from './pages/register/register';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/hotels' element = {<List/>}/>
        <Route path='/hotels/:id' element = {<Hotel/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Register' element = {<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
