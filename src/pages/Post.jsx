import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";

import { usePosts } from "../contexts/PostsContext";


export default function Post() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { posts } = usePosts();
  console.log(posts);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find(post => Number(post.id) === Number(id));
    setPost(foundPost);
  }, [id, posts]);


  return (
    <>

      {
        (post === null) ? ('Loading...') :
          (
            <div className="container d-flex flex-column align-items-center my-5">
              <h1>{post?.title || 'loading'}</h1>
              <div className="w-100 d-flex align-items-center justify-content-between">
                {
                  (id > 1) ? (<button className="btn btn-warning px-4" onClick={() => navigate(`/posts/${id - 1}`)}><i className="bi bi-arrow-left"></i></button>)
                    : (<button disabled className="btn btn-warning px-4"><i className="bi bi-arrow-left"></i></button>)
                }
                <img className="border border-3 border-dark rounded-3 w-75 my-5" src={`/${post?.image || 'loading.png'}`} alt={post?.title || 'loading'} />
                {
                  (id < posts.length) ? (<button className="btn btn-warning px-4" onClick={() => navigate(`/posts/${Number(id) + 1}`)}><i className="bi bi-arrow-right"></i></button>)
                    : (<button disabled className="btn btn-warning px-4"><i className="bi bi-arrow-right"></i></button>)
                }
              </div>
              <p>{post?.content || 'loading'}</p>
            </div>
          )
      }

    </>
  );
}