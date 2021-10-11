import React, { useEffect, useState } from "react";
import Homeitem from "./Homeitem";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

const Home = () => {
  const initialData = [];
  const [data, setData] = useState(initialData);

  const getArticles = async () => {
    const response = await fetch("http://localhost:5000/api/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Believe you can and you</h5>
              <p>are halfway there.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Passion Matters</h5>
              <p>Hunger Matters.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Always have vision</h5>
              <p>
                <h6>Patience is the only key to success.</h6>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row my-3">
        {data.slice(-4).map((element) => {
          const { _id, imgUrl1, imgUrl2, heading, description, points, timestamp } = element;
          return (
            <Homeitem
              key={_id}
              imgUrl1={imgUrl1}
              imgUrl2={imgUrl2}
              heading={heading}
              description={description}
              points={points}
              date={timestamp}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
