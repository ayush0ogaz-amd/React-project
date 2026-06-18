
// // { import TodoList from './Components/TodoList';
// // import Counter from './Components/Counter';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './Components/Navbar';


// }

import { BrowserRouter, Routes , Route } from 'react-router-dom'

import Home from './ComponentsTask/Home';
import Navbar from './ComponentsTask/Navbar';
import Clock from './ComponentsTask/Clock';
import ProfieCard from './ComponentsTask/ProfileCard';
import ExpenseTracker from './ComponentsTask/ExpenseTracker';
import ProgressBar from './ComponentsTask/ProgressBar';
import StarRating from './ComponentsTask/StarRating';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path="/Clock" element={<Clock />} />
        <Route path="/ProfileCard" element={<ProfieCard />} />
        <Route path='/ExpenseTracker' element={<ExpenseTracker />} />
        <Route path='ProgressBar' element={<ProgressBar />} />
        <Route path='StarRating' element={<StarRating />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
