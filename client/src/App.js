import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import BlogPost1 from './Pages/Posts/BlogPost1';
import BlogPost2 from './Pages/Posts/BlogPost2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/how-to-be-intentional-after-school' element={<BlogPost1/>}/>
          <Route path='/blog/the-value-of-travel' element={<BlogPost2/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
