// import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header.js'
// import Layout from './components/layout.js';
import Footer from './components/footer.js';
import BodyUseState from './components/usestate.js'
import BodyUseEffect from './components/useeffect.js';
import './App.css';

function App() {
  return (
    // <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={<Layout />}></Route>
    //             <Route path="header" element={<Header/>}>Header</Route>
    //             <Route path="bodyusestate" element={<BodyUseState initialCount={0}/>}>BodyUseState</Route>
    //             <Route path="footer" element={<Footer/>}>Footer</Route>
    //         </Routes>
    //     </BrowserRouter>

    <div className="App">
      <Header />
      <BodyUseState initialCount={10}/>
      <BodyUseEffect/>
      <Footer/>
    </div>
  );
}

export default App;
