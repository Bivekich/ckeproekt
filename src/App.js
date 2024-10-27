import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import RegWindow from "./components/RegWindow";
import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Questions from "./components/Questions";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Documents from "./components/Documents";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (!hash) {
        window.scrollTo(0, 0);
      } else {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offset = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 2rem in pixels
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }
    };

    scrollToElement();
  }, [pathname, hash]);

  return null;
}

function App() {
  const [selectedCity, setSelectedCity] = useState("Москва"); 

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/services"
          element={
            <>
              <Navbar selectedCity={selectedCity} setSelectedCity={setSelectedCity} /> 
              <Tech />
              <Questions />
              <Footer selectedCity={selectedCity} /> 
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar selectedCity={selectedCity} setSelectedCity={setSelectedCity} /> 
              <RegWindow />
              <FrontPage />
              <AboutUs />
            
              <WhyUs />
              <Documents />
              <Jobs />
              <Services />
              <Questions />
              <Footer selectedCity={selectedCity} /> 
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
