import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ArticleSoloPage = () => {
  const location = useLocation();
  const heading = location.state.heading;
  useEffect(() => {
    console.log(heading);
  }, []);

  return <div>{/* {heading} */}</div>;
};

export default ArticleSoloPage;
