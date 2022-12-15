import { Route, Routes } from "react-router";
import Banner from "./Components/Banner/Banner";
import CoinDetail from "./Components/CoinDetail/CoinDetail";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div >
      <Header />
      <Routes >
        <Route path="/" element={<>
          <Banner />
          <Home itemsPerPage={8} />
        </>} />
        <Route path="/coin-detail/:name" element={<CoinDetail />} />
        <Route path="/about-project" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
