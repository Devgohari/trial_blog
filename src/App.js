// import './App.css';
import Navbar from './components/Navbar/NavBar'
import Heading from './components/MainHeading/Heading'
import UpperDiv from './components/Detailed/UpperDiv'
import Content from './components/Detailed/Content'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact'
function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Heading />} />
        <Route path="/about" element={<UpperDiv />} />
        <Route path="/blog" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
