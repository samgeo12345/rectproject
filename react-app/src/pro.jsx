import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mainpage.css";
import { useParams } from "react-router-dom";

function Pro() {
  const [product, setProduct]= useState(null);
  const{id} = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, []);

  if (!product) return <p>Loading…</p>;

  return (
    <div className="bookdiv">
      <div className="bookcontentsdiv">
        <img src={product.images?.[0]} alt={product.title} />
        <h3>{product.title}</h3>
        <p>
          Rating ({product.rating})
          <div>
            {}
            <i className="fas fa-star rated"></i>
            <i className="fas fa-star rated"></i>
            <i className="fas fa-star rated"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </p>

        <h3>₹ {product.price}</h3>
        <button>Order now</button>
      </div>
    </div>
  );
}

export default Pro;
