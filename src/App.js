import { BrowserRouter,Routes, Route } from "react-router-dom";
import Config from "./pages/Config";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Singin from "./pages/Singin";
import Tracker from "./pages/Tracker";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Singin/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/config" element={<Config/>}/>
          <Route path="/tracker" element={<Tracker/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
