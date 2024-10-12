import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Alldata from './Components/Alldata';
import Productdetails from './Components/Productdetails';
import Form from './Components/Form';
import Login from './Components/Login';
import Bankdetail from './Components/Bankdetail';
import Cart from './Components/Cart';
import Thankyoupage from './Components/Thankyoupage';




function App() {
  return (
    <div>

    <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/alldata/:category' element={<Alldata/>}/>
        <Route path='/alldata/:category/:id' element={<Productdetails/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Bankdetail' element={<Bankdetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/thankyoupage' element={<Thankyoupage/>}/>
       
      

         

      </Routes>


       <Footer/>


    </div>
  );
}

export default App;
