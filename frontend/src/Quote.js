import React, { useState } from 'react'
import axios from 'axios';

function Quote() {

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  function getSet() {
    axios.get('http://127.0.0.1:8000/')
      .then((response) => {
        setText(response.data.text);
        setAuthor(response.data.author);
      });
  }

  return (
    <>
      <button onClick={getSet}>Generate Quote</button>
      <h3>{text}</h3>
      <p>{'-'+ author}</p>
    </>
  )
}

export default Quote