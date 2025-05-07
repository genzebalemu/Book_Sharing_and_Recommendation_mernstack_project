import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import Home from './Components/Home';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* {isLoggedIn && <Footer />} */}
      <Footer />
    </Router>
  );
}

export default App;
