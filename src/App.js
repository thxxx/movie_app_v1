  import React from 'react';
  import { HashRouter, Route } from "react-router-dom";
  import { Home, About, Detail } from "./routes/inc.js";
  import Navigation from "./components/Navigations";
  import "./App.css";

  // <>는 동시에 2가지(Router, footer)를 렌더링하기 위한 freagment
  function App() {
    return (
    <>  
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    <footer> </footer>
    </> )
  }

  export default App;