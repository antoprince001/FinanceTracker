import React, { useState, useEffect } from "react";


const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <div classname="navbar" fixed="bottom" bg="dark" variant="dark">
      <div className="container">
        <div lg={12} className=" col text-center text-muted">
        <div style={{color: '#f6f6f6'}}>
            Copyright ©{fullYear} Antony Prince J
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;