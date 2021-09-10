import React from "react";

const Home = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/1.jpeg" className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Believe you can and you</h5>
            <p>are halfway there.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./images/2.jpg" className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Passion Matters</h5>
            <p>Hunger Matters.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./images/3.jpg" className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
