import React, { useEffect, useState } from "react";
import axios from "axios";
import './mainpage.css'
function Book(){
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.in/api/products")
      .then(res => res.json())
      .then((result) => {
        if(result.status==="SUCCESS" && Array.isArray(result.products)){
          setProduct(result.products);
        } 
      })
      .catch((e) => {
        console.error("Error Fetching ", e);
      });
  }, []);

  

  return (
    <div className="bookdiv">
        { product.map((p)=>(
          <div className="bookcontentsdiv" key={p.id}>
            <img src={p.image[0]} alt="" />
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
            <button>Order now</button>
          </div>
        ))}
    </div>
  );
};

export default Book;