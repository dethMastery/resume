import ParallaxBox from "./components/ParallaxBox";
import Footer from "./components/Footer";

import Head from "./components/pages/Head";
import Me from "./components/pages/Me";
import Skills from "./components/pages/Skills";
import Certificates from "./components/pages/Certificates";
import WorkExperience from "./components/pages/WorksExp";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="bg-ctp-base text-ctp-text">
      <Navbar />
      <Head />
      <ParallaxBox height="30vh" />
      <Me />
      <Skills />
      <Certificates />
      <WorkExperience />
      <ParallaxBox height="40vh" />
      <Footer />
    </div>
  );
}

export default App;
