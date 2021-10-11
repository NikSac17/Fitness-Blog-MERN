import React from "react";
import { useLocation } from "react-router-dom";

const ArticleSoloPage = () => {
  const location = useLocation();
  const imgUrl2 = location.state.imgUrl2;
  const heading = location.state.heading;
  const description = location.state.description;
  const date = location.state.date;
  const points = location.state.points;

  return (
    <>
      <div className="photo my-4">
        <img
          src={imgUrl2}
          className="img-fluid rounded mx-auto d-block"
          alt="Loading Soon..."
        />
      </div>
      <div className="container my-4">
        <div className="blog-post">
          <h2 className="blog-post-title">{heading}</h2>
          <b className="blog-post-meta">{date.substring(0, 16)}</b>

          {description.map((item) => {
            return <p>{item}</p>;
          })}

          {points.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ArticleSoloPage;
