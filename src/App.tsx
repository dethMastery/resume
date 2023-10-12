import ParallaxBox from "./components/ParallaxBox";
import Head from "./components/pages/Head";
import Me from "./components/pages/Me";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-ctp-base text-ctp-text">
      <Head />
      <ParallaxBox height="30vh" />
      <Me />
      <ParallaxBox height="40vh" />
      <Footer />
    </div>
  );
}

export default App;
