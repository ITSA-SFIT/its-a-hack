import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="">
      <Heading>Call:</Heading>
      <div className="grid grid-rows-3 grid-cols-2">
        <p>Kevin Nadar:</p>
        <a href="tel:+911234567890" className="underline">
          +91 12345 67890
        </a>
        <p>Vishal Mahajan:</p>
        <a href="tel:+911234567890" className="underline">
          +91 12345 67890
        </a>
        <p>Chris Shukla:</p>
        <a href="tel:+911234567890" className="underline">
          +91 12345 67890
        </a>
      </div>
      <Heading>Email: <a href="mailto:itsa@sfit.ac.in" className="underline">itsa@sfit.ac.in</a></Heading>
      
    </div>
  );
};

export default Contact;
