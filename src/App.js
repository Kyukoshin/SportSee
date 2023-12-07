import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Routes>
          <Route path="/user/:userId" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
