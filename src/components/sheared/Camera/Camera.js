import React from "react";
import "./Camera";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = React.useRef(null);
  const WebcamComponent = () => <Webcam />;
  const videoConstraints = {
    width: 1280,
    height: 820,
    facingMode: "user",
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div>
      <h1 className="text-info">My camera</h1>
      <button onClick={WebcamComponent} className="btn btn-danger">
        open camera
      </button>
      <div className="camera w-25">
        <Webcam videoConstraints={videoConstraints} />;
      </div>
    </div>
  );
};

export default Camera;
