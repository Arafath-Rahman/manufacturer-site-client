import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AllParts from './Pages/Parts/AllParts';
import AllReviews from './Pages/Reviews/AllReviews';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/parts' element={<AllParts />} />
        <Route path='/reviews' element={<AllReviews />} />
      </Routes>
    </div>
  );
}

export default App;
