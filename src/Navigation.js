import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Navigation({handleScroll,scrolled}) {

  const [NavOpen, setNavOpen] = useState(false);
  const [CartOpen, setCartOpen] = useState(false);

  const NavHandle = () =>{
    setNavOpen(!NavOpen);
    setCartOpen(false);
  }

  const CartHandle = () =>{
    setCartOpen(!CartOpen);
    setNavOpen(false);
  }

  return (
    <nav className="Navigation">
      <div className="Leftbar">
        <Sidebar className="Rightbar" Open={NavOpen}>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </Sidebar>

      </div>
      <div className="Nav navwidth">

        <div className="Left">
          <div onClick={NavHandle} className={`hamburger ${NavOpen && "fill-white"}`}>
            <div className="rectangle top"></div>
            <div className="rectangle middle"></div>
            <div className="rectangle bottom"></div>
          </div>
          <div className={`Logo ${NavOpen && "fill-white"}`}>
            <h1><span className="Red">X</span>etra</h1>
          </div>
        </div>
        
        <div className="Trending">
          <div className="icon">
            <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M15.75 1.77027C15.75 0.0038595 13.5151 -0.661883 12.5307 0.802453C3.5 14.2383 16.3333 14.8432 16.3333 21.3744C16.3333 24.0188 14.2107 26.1585 11.6047 26.1237C9.04021 26.0903 7 23.9142 7 21.3039V14.9575C7 13.3469 5.0699 12.5654 3.97906 13.7328C2.02708 15.8199 0 19.395 0 23.7494C0 31.6069 6.28031 37.9994 14 37.9994C21.7197 37.9994 28 31.6069 28 23.7494C28 11.1107 15.75 9.42519 15.75 1.77027Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="28" height="38" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <h1>Trending</h1>
        </div>

        <div className="Right">
          {!scrolled && !CartOpen && <div className="SignUp">
            <button onClick={handleScroll}>Sign Up</button>
          </div>}
          <div onClick={CartHandle} className={`Cart ${CartOpen && "fill-white"}`}>
            {scrolled || CartOpen && <h1>Cart</h1>}
            <div className="Cart_svg">
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4584 39.75C13.0292 39.75 11.0638 41.7375 11.0638 44.1667C11.0638 46.5958 13.0292 48.5833 15.4584 48.5833C17.8875 48.5833 19.875 46.5958 19.875 44.1667C19.875 41.7375 17.8875 39.75 15.4584 39.75ZM4.41671 4.41666C3.19708 4.41666 2.20837 5.40536 2.20837 6.62499C2.20837 7.84462 3.19708 8.83332 4.41671 8.83332H4.91388C5.95891 8.83332 6.91051 9.43518 7.35835 10.3794L11.9277 20.0132C13.59 23.5177 13.4657 27.6078 11.5938 31.005C11.2405 31.6233 11.0417 32.3521 11.0417 33.125C11.0417 35.5542 13.0292 37.5417 15.4584 37.5417H39.75C40.9697 37.5417 41.9584 36.553 41.9584 35.3333C41.9584 34.1137 40.9697 33.125 39.75 33.125H16.3859C16.1221 33.125 15.9066 32.9482 15.849 32.7044C15.8287 32.6187 15.8446 32.5297 15.866 32.4443C15.8886 32.3537 15.9229 32.2665 15.968 32.1849L16.2599 31.6561C17.2641 29.8375 19.1774 28.7083 21.2548 28.7083H34.3396C35.9959 28.7083 37.4534 27.8029 38.2042 26.4337L46.11 12.1017C46.2867 11.7925 46.375 11.4171 46.375 11.0417C46.375 9.82707 45.3813 8.83332 44.1667 8.83332H13.9455C12.4562 8.83332 11.101 7.97284 10.4675 6.62499C9.83405 5.27714 8.47884 4.41666 6.98954 4.41666H4.41671ZM37.5417 39.75C35.1125 39.75 33.1471 41.7375 33.1471 44.1667C33.1471 46.5958 35.1125 48.5833 37.5417 48.5833C39.9709 48.5833 41.9584 46.5958 41.9584 44.1667C41.9584 41.7375 39.9709 39.75 37.5417 39.75Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>

        
      </div>

      <div className="Rightbar">
        <Sidebar Open={CartOpen}>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </Sidebar>
      </div>
    </nav>
  );
}

export default Navigation;
