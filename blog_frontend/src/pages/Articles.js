import React, { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  const initialData = [
  ];
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
    <div className="row my-3">
      {data.length === 0 && "No articles to display"}
      {data.map((element) => {
        const { _id, imgUrl1, imgUrl2, heading, description, points, timestamp } = element;
        return (
          <ArticleItem
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
  );
};

export default Articles;
