import './css/style';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Message from "./Pages/Message";
import Activity from "./Pages/Activity";
import Settings from "./Pages/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
        <Dashboard/>
      </Router>
    </div>
  );
}
export default App;
