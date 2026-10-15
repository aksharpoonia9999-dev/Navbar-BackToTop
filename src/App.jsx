import { Routes, Route, Link } from "react-router-dom";
import Nav from "./views/Nav";
import BackToTop from "./components/common/BackToTop";
import CounterTwo from "./views/CounterTwo";

function App() {
  return (
    <section className="px-4">
      <div className="flex gap-4 p-4 items-center justify-center flex-wrap">
       

        <Link to="/">
          <button className="bg-transparent rounded-2xl hover:bg-white/20 transition-all duration-300 ease-in-out font-bold cursor-pointer text-white px-4 py-2">
            Navbar
          </button>
        </Link>

        <Link to="/countertwo">
          <button className="bg-transparent rounded-2xl hover:bg-white/20 transition-all duration-300 ease-in-out font-bold cursor-pointer text-white px-4 py-2">
            Counter
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/countertwo" element={<CounterTwo/>} />
      </Routes>


      <div className="min-h-250 w-full bg-black rounded-2xl"></div>
      <div className="min-h-250 w-full bg-white rounded-2xl"></div>
      <div className="min-h-250 w-full bg-black rounded-2xl"></div>
      <div className="min-h-250 w-full bg-white rounded-2xl"></div>
      <div className="min-h-250 w-full bg-black rounded-2xl"></div>

      <BackToTop/>
    </section>
  );
}

export default App;