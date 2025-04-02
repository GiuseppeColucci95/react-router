import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Post() {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
      })
  }, [id]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, []);

  return (
    <>

      {
        (post === null) ? ('Loading...') :
          (
            <div className="container d-flex flex-column align-items-center my-5">
              <h1>{post.title}</h1>
              <div className="w-100 d-flex align-items-center justify-content-between">
                {
                  (id > 1) ? (<button className="btn btn-warning px-4" onClick={() => navigate(`/posts/${id - 1}`)}><i className="bi bi-arrow-left"></i></button>)
                    : (<button disabled className="btn btn-warning px-4"><i class="bi bi-arrow-left"></i></button>)
                }
                <img className="border border-3 border-dark rounded-3 w-75 my-5" src={`/${post.image}`} alt={post.title} />
                {
                  (id < posts.length) ? (<button className="btn btn-warning px-4" onClick={() => navigate(`/posts/${Number(id) + 1}`)}><i className="bi bi-arrow-right"></i></button>)
                    : (<button disabled className="btn btn-warning px-4"><i class="bi bi-arrow-right"></i></button>)
                }
              </div>
              <p>{post.content}</p>
            </div>
          )
      }

    </>
  );
}