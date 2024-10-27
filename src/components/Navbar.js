import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import RegWindow from "./RegWindow";

const cities = ["Москва", "Чебоксары"]; 
const phoneNumbers = {
  Москва: "+7 (495) 123-45-67",
  Чебоксары: "+7 (495) 123-45-67",
}; 

const Navbar = ({ selectedCity, setSelectedCity }) => { 
  const [isRegWindowOpen, setIsRegWindowOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openRegWindow = () => setIsRegWindowOpen(true);
  const closeRegWindow = () => setIsRegWindowOpen(false);

  const selectCity = (city) => {
    setSelectedCity(city); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const availableCities = cities.filter(city => city !== selectedCity);

  const handleLinkClick = (city, targetId) => {
    selectCity(city);
    toggleMenu(); 
  }; 

  return (
    <nav className="navbar">
      <Link to="/#frontpage" smooth>
        <img src="/logo.svg" className='logo' alt="Logo" />
      </Link>

      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/#aboutus" smooth onClick={() => handleLinkClick(selectedCity, 'aboutus')}>
          О нас
        </Link>
        <Link to="/#services" smooth onClick={() => handleLinkClick(selectedCity, 'services')}>
          Услуги
        </Link>
        <Link to="/#footer" smooth onClick={() => handleLinkClick(selectedCity, 'footer')}>
          Контакты
        </Link>
      </div>
      <div className={`navbarContacts ${isMenuOpen ? 'open' : ''}`} >
        <div className="location-dropdown">
          <div className="location-button">
            <img src="/location.svg" alt="Location" className='locationImg' /> {selectedCity}{" "}
            <span className="dropdown-arrow">&#9662;</span>
          </div>
          <ul className="city-list" >
            {availableCities.map((city) => (
              <li key={city} onClick={() => { 
                selectCity(city); 
                toggleMenu(); // Toggle the menu when a city is selected
              }}>
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div className="phoneNumber" onClick={openRegWindow}>
          <a>
            {phoneNumbers[selectedCity]}
            <div className="callBack" onClick={() => { 
              toggleMenu(); 
            }}>
              заказать обратный звонок
            </div>
          </a>
        </div>
        <button className="request" onClick={openRegWindow} style={{}}>
          <div onClick={() => { 
              toggleMenu(); 
            }}>Оставить заявку</div>
        </button>
      </div>
      <RegWindow
        isOpen={isRegWindowOpen}
        onClose={closeRegWindow}
        selectedCity={selectedCity} 
      />
    </nav>
  );
};

export default Navbar;
