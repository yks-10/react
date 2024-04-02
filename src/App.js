// import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Header, Header1} from './components/header.js' // arrow function used \
import Welcome from './components/welcome.js' 
// import Layout from './components/layout.js';
import Footer from './components/footer.js';
import BodyUseState from './components/usestate.js'
import BodyUseEffect from './components/useeffect.js';
import Message from './components/message.js'
import Counter from './components/counter.js';
import FunctionClick from './components/function.js';
import Classclick from './components/classclick.js';
import Eventbind from './components/eventbind.js';
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
      <Header/>
      <Header1 name="YOGESH" heroname="Paul Walker">
        <p>This world</p>
      </Header1>
      <Welcome name="Loki" heroname="Asgard" />
      <Message/>
      <Counter/>
      <FunctionClick/>
      <Classclick/>
      <Eventbind/>
      <BodyUseState initialCount={10}/>
      <BodyUseEffect/>
      <Footer/>
    </div>
  );
}

export default App;
