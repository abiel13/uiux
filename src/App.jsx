import "./App.css";
import { Navbar, Cta, Brand } from "./components";
import { Header, Blog, Feautures, Footer, WhatCrypt } from "./container";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatCrypt />
      <Feautures />

      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
