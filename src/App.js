import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Routes>
          <Route path="/user/:userId" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
