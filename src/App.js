import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Services = () => <h2>Services</h2>;
const Contact = () => <h2>Contact</h2>;
const ContactUs = () => <h2>Contact Us</h2>;
const ContactPl = () => <h2>Contact Pl</h2>;
const ContactDe = () => <h2>Contact De</h2>;
const NoMatch = () => <h3>Nie znaleziono elementu</h3>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/us" element={<ContactUs />} />
      <Route path="/contact/pl" element={<ContactPl />} />
      <Route path="/contact/de" element={<ContactDe />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
);

export default App;