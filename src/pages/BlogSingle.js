import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import "../pages/BlogSingle.scss";

const BlogSingle = () => {
  const [postData, setpostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://mbportfolio.info/api/wp-json/wp/v2/posts/${id}`)
      .then((res) => {
        setpostData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const content =
    postData !== null ? (
      <SinglePost
        title={postData.title.rendered}
        content={postData.content.rendered}
      />
    ) : null;
  return (
    <div className="blog-loader">
      {!loading ? content : <div className="loader"></div>}
    </div>
  );
};

export default BlogSingle;
