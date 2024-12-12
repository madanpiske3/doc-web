// import logo from './logo.svg';
import "./App.css";
import AboutSection from "./components/AboutSection";
import AbtSection from "./components/AbtSection";
import Collab from "./components/Collab";
import Foot from "./components/Foot";

import Footer from "./components/Footer";
import FreeTrial from "./components/FreeTrial";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import SectionAbout from "./components/SectionAbout";

import BackgroundCycler from "./components/sub/BackgroundCycler";

// import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navbar2 /> */}
      <Home />
      <BackgroundCycler />
      <Collab />
      <FreeTrial />
      {/* <SectionAbout /> */}
      {/* <AboutSection /> */}

      <AbtSection />
      {/* <Footer /> */}
      <Foot />
    </div>
  );
}

export default App;
