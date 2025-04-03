import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <>
      <PostsContext value={{ posts, setPosts }}>
        {children}
      </PostsContext>
    </>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, usePosts };