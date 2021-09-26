import React from "react";

const ArticleItem = ({ _id, imgUrl, heading, description, date, points }) => {
  return (
    <div className="container col-md-5 my-3">
      <div class="row mb-2">
        <div >
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">{heading}</h3>
              <div class="mb-1 text-muted">{date}</div>
              <p class="card-text mb-auto">
                {description[0].substring(0, 90)}...
              </p>
              <a href="fitness_ben.html" class="stretched-link">
                Continue reading
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                class="bd-placeholder-img"
                width="200"
                height="250"
                src={imgUrl}
                alt="Service Down..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
