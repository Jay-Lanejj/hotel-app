import React from 'react'
import "./Blog.css"
import {Link} from 'react-router-dom'



 function Blog({blog}) {
    console.log("i am from blog", blog)
  return (
    <>
      <div className="mainDiv">
        {blog.map((res) => (
          <div style={{ marginTop: 20 }}>

            <Link to={`/blogDetails/${res.id}`}>
            <div className="box">
              <img src={res.Image} />

              <p>Author: {res.author}</p>
            </div>
            </Link>
            
          </div>
        ))}
      </div>
    </>
  );
}


export default Blog;