import React from 'react';
import './App.css';
import logo from './images/islandhomelogo.png'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Home Logo" className="App-logo" />
        <h1>Website Coming Soon</h1>
        <p>Welcome to Home by Rachel Pierce!</p>
        <p>We're currently working hard to bring you an exciting new website experience. In the meantime, stay connected with us on Instagram and Facebook for the latest updates, important dates, and captivating content.</p>
        <p>Thank you for your patience and support!</p>
        <p>Rachel Pierce and Lauren Speas</p>
        <div>
          Follow us:<br />
          <a href="https://www.instagram.com/homebyrachelpierce" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram: @homebyrachelpierce
          </a><br />
          <a href="https://www.facebook.com/HomeByRachelPierce" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook: Home by Rachel Pierce
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
