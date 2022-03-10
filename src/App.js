import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Weather from "./pages/Weather";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/weather/news/:newsId' element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
