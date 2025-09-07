import React from 'react'

const Button = ({ text, className, id }) => {
  return (
    <div>
      <a
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById('counter');
          if (target && id) {
            const offset = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }}
        className="cta-wrapper group inline-block"  // <- make width-able
      >
        <div className={`cta-button ${className ?? ''}`}>  {/* <- width lands here */}
          {/* <div className="bg-circle"></div> */}
          <p className="text">{text}</p>
          {/* <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div> */}
        </div>
      </a>
    </div>
  )
}

export default Button
