import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Newsletter from './Pages/Newsletter/Newsletter';
import BlogPost1 from './Pages/Posts/BlogPost1';
import BlogPost2 from './Pages/Posts/BlogPost2';
import BlogPost3 from './Pages/Posts/BlogPost3';
import BlogPost4 from './Pages/Posts/BlogPost4';
import BlogPost5 from './Pages/Posts/BlogPost5';
import BlogPost6 from './Pages/Posts/BlogPost6';
import Coaching from './Pages/Coaching/Coaching';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/newsletter' element={<Newsletter/>}/>
          <Route path='/coaching' element={<Coaching/>}/>
          <Route path='/blog/how-to-be-intentional-after-school' element={<BlogPost1/>}/>
          <Route path='/blog/the-value-of-travel' element={<BlogPost2/>}/>
          <Route path='/blog/you-are-one-mentor-away-from-changing-your-life' element={<BlogPost3/>}/>
          <Route path='/blog/why-learn-code-you-will-solve-problems-50-faster'element={<BlogPost4/>}/>
          <Route path='/blog/the-power-of-walking' element={<BlogPost5/>}/>
          <Route path='/blog/facing-fear' element={<BlogPost6/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
    </HelmetProvider>
  );
}

export default App;
