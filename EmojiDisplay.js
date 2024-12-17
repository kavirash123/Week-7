import React, { useState } from 'react';
import Happy from './happy.png'; 
import Like from './like.png';   
import Sad from './sad.png';     
function EmojiDisplay() {
  const [input, setInput] = useState('');  
  const [image, setImage] = useState(null);  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    
    if (value.toLowerCase() === 'happy') {
      setImage(Happy);
    } else if (value.toLowerCase() === 'like') {
      setImage(Like);
    } else if (value.toLowerCase() === 'sad') {
      setImage(Sad);
    } else {
      setImage(null); 
    }
  };
  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={handleInputChange} 
        placeholder="Type 'Happy', 'Like' or 'Sad'"
      />
      <label>
        {image && <img src={image} alt="emoji" />}
      </label>
    </div>
  );
}

export default EmojiDisplay;
