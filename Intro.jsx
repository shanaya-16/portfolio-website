import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./intro.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    const options = {
      strings: ['React Developer', 'Python Developer', 'Designer', 'Content Creator'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='intro' id="intro">
      <img className="bg" src="/assets/bg.jpg" alt=""/>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="me" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sanju</h1>
          <h3>Freelance <span ref={textRef}></span></h3>

          <div className='intro-para'>
            <p>
              I'm a passionate developer and designer with a love for creating innovative solutions. With a strong background in React development, Python programming, and UI/UX design, I strive to bring ideas to life and deliver outstanding results.
            </p>
          </div>

          <a href="#portfolio">
            <FontAwesomeIcon className='icon' icon={faAngleDown} />
          </a>
        </div>
      </div>
    </div>
  );
}
