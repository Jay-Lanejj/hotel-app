import React from 'react'
import {useParams} from "react-router-dom"
import "./Blog.css"
import {Link} from 'react-router-dom'


 function Details({blog}) {
   const {id} = useParams()
   
 
  return (
    <>
      <div className="mainDiv">
        {blog
          .filter((item) => item.id == id)
          .map((results) => (
            <>
              <div style={{ marginTop: 20 }}>
                <div className="box">
                  <img src={results.Image} />

                  <p>Title: {results.title} </p>
                  <p>Author: {results.author}</p>
                  <p>{results.body}</p>
                  <Link to="/bookings">
                    <button className='book-btn'>BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}


export default Details;