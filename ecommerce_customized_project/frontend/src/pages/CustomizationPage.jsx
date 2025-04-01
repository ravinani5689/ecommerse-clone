
import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

const CustomizationPage = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="customization-page">
      <h2>Customize Your Product</h2>
      <div>
        <label>Upload Image</label>
        <input type="file" onChange={handleImageUpload} />
      </div>
      <div>
        <label>Enter Text</label>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter custom text"
        />
      </div>
      <div>
        <CanvasDraw />
      </div>
      {image && <img src={image} alt="Uploaded preview" />}
      <button>Add to Cart</button>
    </div>
  );
};

export default CustomizationPage;
    