import React from "react";

const ArticleItem = ({ _id, imgUrl, heading, description, date }) => {
  return (
    <div className="container">
      {/* <div className="card">
        <img src={imgUrl} className="card-img-top" alt="Loading..." />
        <div className="card-body">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      {/*  eslint-disable-next-line */}
      <img src={imgUrl} alt="Image To be displayed" />
      <h1>{heading}</h1>
      <h3>{date}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ArticleItem;
