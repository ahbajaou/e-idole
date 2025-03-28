import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatInterface from "./components/ChatBox"; // Import your page/component
import Home from "./components/landinpage"; // Example home page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
