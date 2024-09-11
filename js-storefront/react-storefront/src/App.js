import logo from './assets/logo.png';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div className="App">
      <header className="App-header bg-lightGray">
        <img src={logo} className="App-logo" alt="logo" />
        <p className=' text-4xl my-8 font-bold text-black'> 
          Coming Soon ... 
        </p>
        <p className="text-lg text-black  ">
          We are working hard to bring you a great experience. Stay tuned!
        </p>
        
        <div className="flex justify-center space-x-8 mt-[5%]">
          <a href="https://www.linkedin.com/company/cristor-electronics/" target="_blank" rel="noreferrer" className="text-[#EB1331] text-3xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com/Cristorofficielle?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-[#EB1331] text-3xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/cristor_electronics?igsh=N3ByajRsMWZ2bnU5" target="_blank" rel="noreferrer" className="text-[#EB1331] text-3xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
