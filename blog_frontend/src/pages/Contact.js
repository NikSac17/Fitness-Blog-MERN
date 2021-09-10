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
    setName("");
    setEmail("");
    setProfession("");
    setDoubt("");
    setFeedback("");
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
