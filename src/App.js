import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Components/Test';
import Menubar from './Components/Menubar';
import AllProducts from './Components/AllProducts';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    AOS.init();
  }, [])

  // const count = () => {
  //   console.log('function')
  // }
  return (
    <div className="App">
      <h2 className='text-primary'>FakeStore-shop</h2>
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>

      {/* <Test count={count}></Test> */}
    </div>
  );
}

export default App;
