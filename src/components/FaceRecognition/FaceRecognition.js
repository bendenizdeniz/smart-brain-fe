import React, { useEffect } from "react";

import "../../style/FaceRecognition.css";

export const FaceRecognition = ({ imageUrl, coordinates }) => {
  return (
    <div>
      {imageUrl ? (
        <div className="center ma">
          <div className="absolute mt2">
            <img
              id="inputImage"
              src={imageUrl}
              alt="face-recognition-image"
              width="400px"
              height="auto"
            />
            <div
              className="bounding-box"
              style={{
                top: coordinates.topRow,
                right: coordinates.rightCol,
                bottom: coordinates.bottomRow,
                left: coordinates.leftCol,
              }}
            ></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
