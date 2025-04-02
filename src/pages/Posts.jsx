import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Posts() {

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
      <main>
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

            {
              posts.map(post => (
                <div key={post.id} className="col">
                  <Link className="text-decoration-none" to={`/posts/${post.id}`}>
                    <div className="card h-100">
                      <div className="card-img-top">
                        <img className="w-100" src={post.image} alt={post.title} />
                      </div>
                      <div className="card-body">
                        <h5>{post.title}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }

          </div>
        </div>
      </main >
    </>
  )
}