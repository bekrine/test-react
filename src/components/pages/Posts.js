import React, { useEffect, useState } from "react";
import Loader from "../Loader";

function Posts() {
  const [Posts, setPosts] = useState([]);
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      setError(["Unable to fetch posts"]);
      setIsLoading(false);
    }
  };
  return (
    <>
      <h1>Posts</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={Posts.length > 0 ? "cards" : undefined}>
          {errors.length > 0 ? (
            <div className="handelerror">
              <h2>{errors}</h2>
            </div>
          ) : (
            Posts.map((post, index) => {
              return (
                <div key={index} className="card">
                  <h3>{post.title}</h3>

                  <p>{post.body}</p>
                </div>
              );
            })
          )}
        </div>
      )}
    </>
  );
}

export default Posts;
