import React, { useState } from 'react';
import axios from 'axios';

function AddItems() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    axios.post('https://dummyjson.com/products/add', {
      title,
      description:body
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Post Form Data</h2>
      <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Body" onChange={e => setBody(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default AddItems;