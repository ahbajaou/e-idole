import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatInterface from "./components/ChatBox"; // Import your page/component
import Home from "./components/landinpage"; // Example home page
import Sidebar from "./components/sidebar"; // Example home page
import Quiz from "./components/quiz"; // Example home page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
