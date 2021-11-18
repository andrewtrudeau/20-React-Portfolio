import React, { useState, useRef } from 'react';

export default function Contact() {
  const [errMsg, setErrorMsg] = useState('Field Required');
  let inputName = useRef(null);
  let inputEmail = useRef(null);
  let inputMessage = useRef(null);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const checkValid = (event) => {
    let name = inputName.current.value;
    let email = inputEmail.current.value;
    let message = inputMessage.current.value;

    if (name == '' || email == '' || message == '') {
      setErrorMsg("Field Required");
    } else if (!validateEmail(email)) {
      setErrorMsg("Email Not Valid");
    } else {
      setErrorMsg("");
    }

  }

  return (
    <div className="content">
      <form className="form" onMouseLeave={checkValid}>
        <label htmlFor="fname">Name</label><br />
        <input type="text" id="fname" name="fname" onChange={checkValid} ref={inputName} /><br />
        <label htmlFor="lname">Email</label><br />
        <input type="text" id="lname" name="lname" onChange={checkValid} ref={inputEmail} /><br />
        <label htmlFor="message">Message</label><br />
        <textarea type="text" id="message" name="lname" onChange={checkValid} ref={inputMessage} />
        <p>{errMsg}</p>
        <button disabled={errMsg !== '' ? (true) : (false)}>Submit</button>

      </form>

    </div>
  )

}
