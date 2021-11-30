import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Singin from "./pages/Singin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Singin/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
