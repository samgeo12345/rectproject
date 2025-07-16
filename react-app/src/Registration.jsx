import React, { useState } from 'react';
import axios from 'axios';

function AddItems() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Age, setAge] = useState('');
  const [Phone, setPhone] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [BloodGroup,setBloodGroup] = useState('');

  const handleSubmit = () => {
    axios.post('https://dummyjson.com/users', {
      Name,
      Email,
      Age,
      Phone,
      BirthDate,
      BloodGroup
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Post Form Data</h2>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default AddItems;