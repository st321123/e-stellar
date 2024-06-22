import React from "react";
import "./emailSubs.css"

function EmailSubs() {
  return (
    <div className="emailSubsContainer">
      <h3>Get Exclusive offers on Your Email</h3>
      <p>SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED</p>
      <div>
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default EmailSubs;
