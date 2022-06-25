import React from 'react';
//import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/footer';

function App() {
  // One Big Statless (or functional) Component 
  // The code below isn't actually html, it's jsx
  return (
    <div>
      <Header/>
      {/* <HelloWorld name ="Jason"/> */}
      <CounterExample/>
      
      <Footer/>
    </div>
  );
}
//The main point of entry into our app is throug index.js
export default App;
