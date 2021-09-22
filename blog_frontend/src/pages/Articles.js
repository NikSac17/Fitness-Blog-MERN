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
    //   console.log("Fetched from API", json);
      setData(json);
    //   console.log(data);
    };

    useEffect(() => {
      getArticles();
    }, []);

  return (
    <div>
      <h1>Articles (will create API and fetch data from there)</h1>
      {data.length === 0 && "No articles to display"}
      {data.map((element) => {
        const { _id, imgUrl, heading, description, timestamp } = element;
        return (
          <ArticleItem
            key={_id}
            imgUrl={imgUrl}
            heading={heading}
            description={description}
            date={timestamp}
          />
        );
      })}
    </div>
  );
};

export default Articles;
