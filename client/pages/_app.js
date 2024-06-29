// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
// import Home from './Pages/Home/Home';
// import Blog from './Blog/Blog';
// import BlogPost1 from './Blog/Posts/BlogPost1';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/blog' element={<Blog/>}/>
//           <Route path='/blog/how-to-be-intentional-after-school' element={<BlogPost1/>}/>
//         </Routes>
//       </BrowserRouter>
//       <ToastContainer/>
//     </div>
//   );
// }

// export default App;

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles/globals.css'; // Move global CSS here

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on route change
    const handleRouteChange = () => window.scrollTo(0, 0);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
