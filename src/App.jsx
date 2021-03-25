import React from "react";
import logo from "./assets/logo.png";
import right from "./assets/icon-arrow.svg";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <div className="image-part"></div>
        <div className="title-part">
          <div className="title">
            <div className="logo">
              <img src={logo} alt="Advertisement" />
            </div>
            <h1>
              <span>We're</span>
            </h1>
            <h1>coming</h1>
            <h1>soon</h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="submit">
              <input type="email" required placeholder="Email adress" />
              <button>
                <img src={right} alt="submit button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
