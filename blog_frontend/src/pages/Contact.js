import React, { useState } from "react";
import "./css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [doubt, setDoubt] = useState("");
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: new Date().getTime().toLocaleString(),
      name,
      email,
      profession,
      doubt,
      feedback,
    };
    console.log(formData);
    setData((data) => {
      return [...data, formData];
    });
    console.log(data);
    setName("");
    setEmail("");
    setProfession("");
    setDoubt("");
    setFeedback("");
  };

  const nameEvent = (event) => {
    setName(event.target.value);
  };

  const emailEvent = (event) => {
    setEmail(event.target.value);
  };

  const profEvent = (event) => {
    setProfession(event.target.value);
  };

  const doubtEvent = (event) => {
    setDoubt(event.target.value);
  };

  const feedEvent = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <div className="container my-4">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Name
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          value={name}
          onChange={nameEvent}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={emailEvent}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Your Profession
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          value={profession}
          onChange={profEvent}
          placeholder="e.g. Student, Office Person, etc..,"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Elaborate your doubt
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={doubt}
          onChange={doubtEvent}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Tell us how to improve
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={feedback}
          onChange={feedEvent}
        ></textarea>
      </div>
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default Contact;
