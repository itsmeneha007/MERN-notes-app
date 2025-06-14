import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success"
import AddNote from "./pages/AddNote"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success" element={<Success/>}/>
        <Route path="/add-note" element={<AddNote/>}/>
      </Routes>
    </Router>
  );
}

export default App;

