import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Preloader from './Components/Preloader/Preloader';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import BlogPost1 from './Pages/Posts/BlogPost1';
import BlogPost2 from './Pages/Posts/BlogPost2';
import BlogPost3 from './Pages/Posts/BlogPost3';
import BlogPost4 from './Pages/Posts/BlogPost4';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader /> // Show Preloader while loading
      ) : (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/how-to-be-intentional-after-school' element={<BlogPost1/>}/>
          <Route path='/blog/the-value-of-travel' element={<BlogPost2/>}/>
          <Route path='/blog/you-are-one-mentor-away-from-changing-your-life' element={<BlogPost3/>}/>
          <Route path='/blog/why-learn-code-you-will-solve-problems-50-faster'element={<BlogPost4/>}/>
        </Routes>
      </BrowserRouter>
      )}
      <ToastContainer/>
    </div>
  );
}

export default App;
