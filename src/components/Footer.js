import React from "react";

const Footer =(props)=>{
    return(
      <footer className="footer">
      <ul >
      {props.array.map((ele, index) => (
        <li key={index}>{ele}</li>
        ))}
      </ul>
    </footer>
    );
};

export default Footer;