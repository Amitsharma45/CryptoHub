import { Route, Routes } from "react-router";
import Banner from "./Components/Banner/Banner";
import CoinDetail from "./Components/CoinDetail/CoinDetail";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
