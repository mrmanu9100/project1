
import './App.css';
import Header from './components/layout/Header';
import Slider from './components/layout/Slider';
import Main from './components/Main';
import Footer from './components/layout/Footer';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import About from './container/About';
import Services from './container/Services'
function App() {
  return (
    <>
    <Router>
    
      <Header/>

           <Routes>
                    <Route path="/about" element={ <About/>} />
             </Routes>

             <Routes>
                    <Route path="/services" element={ <Services />} />
             </Routes>

           </Router>
      <Slider/>
      <Main />
      <Footer />
   
      
    </>
  );
}

export default App;
