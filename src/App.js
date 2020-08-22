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
    <Route path="/" exact={true} component={Home} />  `{/*exact는 /가 들어갔다고 다 Home으로 가지는걸 막기위해 */}`
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    <footer id="footer"> sd </footer>
    </> )
  }

  export default App;