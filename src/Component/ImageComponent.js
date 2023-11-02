import React, { useState } from "react";
import "../Css/imageComponent.css";

// image import from images folder

import image1 from "../images/image-1.webp";
import image2 from "../images/image-2.webp";
import image3 from "../images/image-3.webp";
import image4 from "../images/image-4.webp";
import image5 from "../images/image-5.webp";
import image6 from "../images/image-6.webp";
import image7 from "../images/image-7.webp";
import image8 from "../images/image-8.webp";
import image9 from "../images/image-9.webp";
import image10 from "../images/image-10.jpeg";
import image11 from "../images/image-11.jpeg";

//const images = Array.from({ length: 11 }, (_, i) => `../images/image-${i + 1}.webp`);

// images initialization
const initialDivs = [
  { id: 1, imageUrl: image1 },
  { id: 2, imageUrl: image2 },
  { id: 3, imageUrl: image3 },
  { id: 4, imageUrl: image4 },
  { id: 5, imageUrl: image5 },
  { id: 6, imageUrl: image6 },
  { id: 7, imageUrl: image7 },
  { id: 8, imageUrl: image8 },
  { id: 9, imageUrl: image9 },
  { id: 10, imageUrl: image10 },
  { id: 11, imageUrl: image11 },
];

function ImageComponent() {
  const [divs, setDivs] = useState(initialDivs); // images store in divs array
  
  


  return (
    <div className="container">
      {/* all images show in gred format */}

      {divs.map((div, index) => (
        <div className={`draggable-div chield__${index}`}> 
          <img
            className={`images${index}`}
            src={div.imageUrl}
            alt=""
            draggable="true"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageComponent;
