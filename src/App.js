import React from "react";
import "./App.css";
import "./index.css";
import logo from "./component/pic/logo.png";
import gojo from "./component/pic/gojo.png";
import facebook from "./component/pic/Facebook.png";
import instgram from "./component/pic/Instagram.png";
import watsapp from "./component/pic/watsapp.png";
import html from "./component/pic/html.png";
import css from "./component/pic/css.png";
import ccharp from "./component/pic/c-charp.png";
import react from "./component/pic/react.png";
import flutter from "./component/pic/flutter.png";
import hola from "./component/pic/hola.png";
const App = () => {
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} />
          </div>

          <div className="navlink">
            <ul className="link f_flex uppercase">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className="all">
          <div className="inline">
            <h1>Hi, I'm Malak </h1>
            <h3>
              In my way to become a <span>ull Stack Web Developer</span>
            </h3>
          </div>
          <img src={gojo} />
        </div>
      </main>
      <section>
        <h1>What can i do</h1>
        <div className="yes">
          <div className="design">
            <h4>Create a website with react.</h4>
            <br></br>
            <h4>Create a application mobile with flutter.</h4>
            <br></br>
            <h4>Create a disktop application using wpf.</h4>
          </div>
          <img src={hola} />
        </div>
      </section>
      <section>
        <div className="skills">
          <h1>Skills</h1>

          <img src={html} />
          <img src={css} />
          <img src={flutter} />
          <img src={ccharp} />
          <img src={react} />
        </div>
      </section>
      <section className="last">
        <div className="contact">
          <h1>Contact</h1>
          <button>
            <img src={facebook} />
          </button>
          <button>
            <img src={instgram} />
          </button>
          <button>
            <img src={watsapp} />
          </button>
        </div>
        <h2>thanks for patience</h2>
      </section>
    </>
  );
};

export default App;
