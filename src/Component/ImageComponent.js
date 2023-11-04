import React, { useEffect, useState } from "react";
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
  const [count, setCount] = useState(0);


  const moveDiv = (fromIndex, toIndex) => {
    const updatedOrder = [...divs];
    const movedDiv = updatedOrder.splice(fromIndex, 1)[0];
    updatedOrder.splice(toIndex, 0, movedDiv);
    setDivs(updatedOrder);
  };

  //mouseEvent hover function
  const handleMouseEnter = (imageId) => {
    const updatedImages = divs.map((image) =>
      image.id === imageId ? { ...image, isCheckboxVisible: true } : image
    );
    setDivs(updatedImages);
  };

  //mouseEvent hover leave function
  const handleMouseLeave = (imageId) => {
    const updatedImages = divs.map((image) =>
      image.id === imageId && image.isSelected !== true
        ? { ...image, isCheckboxVisible: false }
        : image
    );
    setDivs(updatedImages);
  };

  // check box selected and increase selected value
  const handleCheckboxClick = (imageId) => {
    const updatedImages = divs.map((image) =>
      image.id === imageId
        ? { ...image, isCheckboxVisible: true, isSelected: !image.isSelected }
        : image
    );
    setDivs(updatedImages);
  };

  const deleteSelectedImages = () => {
    const deleteImages = divs.filter((image) => !image.isSelected);
    setDivs(deleteImages);
  };

  useEffect(() => {
    const getSelectedImageCount = () => {
      const count = divs.filter((image) => image.isSelected).length;
      setCount(count);
    };
    getSelectedImageCount();
  }, [divs]);

  return (
    <>
      <div className="header">
        {count > 0 ? (
          <>
            <div className="header__input">
              <input id="default-checkbox" type="checkbox" value="" />
              <label for="default-checkbox">
                <h2>
                  {" "}
                  <span style={{ paddingLeft: "10px" }}>{count}</span> Files
                  Selected
                </h2>
              </label>
            </div>
            <div>
              <h4
                style={{ color: "red", cursor: "pointer" }}
                onClick={deleteSelectedImages}
              >
                Delete Files
              </h4>
            </div>
          </>
        ) : (
          <div className="header__input">
            <label for="default-checkbox">
              <h2>Gallery</h2>
            </label>
          </div>
        )}
      </div>

      <div className="container">
        {/* all images show in gred format */}

        {divs.map((image, index) => (
          <div
            key={image.id}
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={() => handleMouseLeave(image.id)}
            className={`draggable-div chield__${index}`}
            onDragStart={(e) => e.dataTransfer.setData('index', index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const fromIndex = e.dataTransfer.getData('index');
              const toIndex = index;
              moveDiv(fromIndex, toIndex);
            }}
          >
            {image.isCheckboxVisible && (
              <input
                type="checkbox"
                checked={image.isSelected}
                value={image.id}
                className="checkbox"
                onChange={() => handleCheckboxClick(image.id)}
              />
            )}

            <img
              id={image.id}
              className={`images${index}`}
              src={image.imageUrl}
              alt=""
              draggable="true"
            />
          </div>
        ))}
        
        
      </div>
    </>
  );
}

export default ImageComponent;
