import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Services from './components/Services/Services';
import FooterSec from './components/Footer/FooterSec';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import { useEffect, useLayoutEffect, useState } from 'react';
import {RingLoader} from 'react-spinners'

function App() {
  const [loading , setLoading] = useState(true)
  useLayoutEffect(()=>{
    // setLoading(false)
    setTimeout(()=>{
      setLoading(false)
    },2800)
  },[])
  return (
    <div className="App">
    {
      loading ? 
      <div className='loader'>
        <RingLoader color="#565ACF" size={90} loading={loading} />
      </div>
      :
      <>
        <Header/>
        <Landing/>
        <About/>
        <Services/>
        <Booking/>
        <Contact/>
        <FooterSec/>
      </>
    }
    </div>
  );
}

export default App;
