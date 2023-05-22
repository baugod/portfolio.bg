import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Proyects from './Pages/Proyects/Proyects';
import About from './Pages/About/About';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
        <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/proyects' element={<Proyects/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
        <Footer/>
    </>
  );
}

export default App;
