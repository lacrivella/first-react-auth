import React, { useState } from 'react';


export default function Input() {
  const [name, updateName] = useState('');
  const [breed, updateBreed] = useState('');

  console.log(breed, name)


  return (
    <section>
      <input type="text" placeholder="doggo's name" value={name} onChange={updateName} />
      <input type="text" placeholder="doggo;s breed" value={breed} onChange={updateBreed} />
      <button onClick={() => handleSubmit(name, breed)}>Add a Dog</button>
    </section>
  );
}


