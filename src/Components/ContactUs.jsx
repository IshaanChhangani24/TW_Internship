import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Me</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
