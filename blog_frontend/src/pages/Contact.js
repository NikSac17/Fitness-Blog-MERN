import React, { useState } from "react";

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
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Your Profession:</label>
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>
        <div>
          <label>Any fitness related doubt:</label>
          <input
            type="text"
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
          />
        </div>
        <div>
          <label>Tell us how to imporve:</label>
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};

export default Contact;
