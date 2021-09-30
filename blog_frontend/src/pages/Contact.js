import React, { useState } from "react";
import "./css/Contact.css";

const Contact = ({showAlert}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    profession: "",
    doubt: "",
    feedback: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response  = await fetch("http://localhost:5000/api/contact/fillcontact",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({name: data.name, email: data.email, profession: data.profession, doubt: data.doubt, feedback: data.feedback})
    })

    const json = await response.json();
    console.log(json);
    setData({name:"", email:"", profession:"", doubt:"", feedback:""});
    showAlert("Details submitted Successfully", "success")
  };

  const onChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Name
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter your name"
            rows="1"
            name="name"
            value={data.name}
            minLength={3}
            required
            onChange={onChange}
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
            name="email"
            minLength={11}
            required
            value={data.email}
            onChange={onChange}
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
            name="profession"
            value={data.profession}
            onChange={onChange}
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
            name="doubt"
            value={data.doubt}
            onChange={onChange}
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
            name="feedback"
            value={data.feedback}
            onChange={onChange}
          ></textarea>
        </div>
        <button disabled={data.name.length<3 || data.email.length<11} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
