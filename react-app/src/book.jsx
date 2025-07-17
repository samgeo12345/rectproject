import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import './mainpage.css'
function Book(){
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
          setProduct(result.data.products);
      })
      .catch((e) => {
        console.error("Error Fetching ", e);
      });
  }, []);

  

  return (
    <div className="bookdiv">
        { product.map((p)=>(
          <div className="bookcontentsdiv" key={p.id}>
            <img src={p.images[0]} alt="" />
            <h3>{p.title}</h3>
            <p>Rating ({p.rating})
              <div>
                <i className="fas fa-star rated"></i>
                <i className="fas fa-star rated"></i>
                <i className="fas fa-star rated"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </p>
            <h3>₹ {p.price}</h3>
            <Link to={`/pro/${p.id}`} className="see">See details</Link>
            <button>Order now</button>
          </div>
        ))}
    </div>
  );
};

export default Book;