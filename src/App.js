import { useState } from "react";
import "./App.css";
import Background from "./Background";
import Navigation from "./Navigation"

function App() {

  const [scrolled, setScrolled ] = useState(false);

  const handleScroll=()=>{
    setScrolled(!scrolled);
  }

  return (
    <div className="App">
		  <Navigation handleScroll={handleScroll} scrolled={scrolled}/>
      <div className="Hero boxwidth">
        <div className={`Hero_title ${scrolled?"small_title":"big_title"}`} >
          <h1>Streets<span>X</span></h1>
          <h1 className="Heropar">Fashion</h1>
        </div>
        <div className={`Hero_subtext ${scrolled?"appear":"vanish"}`}>
          <h2>Enter the ultimate shopping experience.</h2>
          <div className="Option-box">
            <button>
              <div className="button-content">
                <h3>Sign up with Google</h3>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.8122 20.5513C39.8122 31.8239 32.0504 39.8462 20.588 39.8462C9.59818 39.8462 0.723007 31.0193 0.723007 20.0892C0.723007 9.15909 9.59818 0.332153 20.588 0.332153C25.9387 0.332153 30.4404 2.28396 33.9088 5.50244L28.502 10.6727C21.4291 3.88523 8.27652 8.98383 8.27652 20.0892C8.27652 26.9803 13.8115 32.5648 20.588 32.5648C28.4539 32.5648 31.4016 26.9564 31.8662 24.0486H20.588V17.2531H39.4998C39.6841 18.2649 39.8122 19.2368 39.8122 20.5513Z" fill="#1F2123"/>
                </svg>
              </div>
            </button>
            <h3>Or use email to <span>Sign Up</span></h3>
          </div>
        </div>
      </div>
      <Background scrolled={scrolled}/>
      <div className="scroller">
        <div className="overlay" onClick={handleScroll}>
            <svg className={`chevron ${!scrolled && "rotate"}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
