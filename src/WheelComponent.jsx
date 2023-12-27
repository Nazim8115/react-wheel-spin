import React, { useEffect } from "react";

const WheelComponent = ({ segments, segColors, size }) => {
  const centerX = 300;
  const centerY = 300;
  const PI2 = 2 * Math.PI;
  let canvasContext = null;

  useEffect(() => {
    initCanvas();
    drawWheel();
  }, []);

  const initCanvas = () => {
    let canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");
  };

  const drawSegment = (key, lastAngle, angle) => {
    const ctx = canvasContext;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = segColors[key];
    ctx.fill();
  };

  const drawWheel = () => {
    const ctx = canvasContext;
    const segmentCount = segments.length || 5;
    let lastAngle = 0;
    for (let i = 0; i < segmentCount; i++) {
      const angle = PI2 * ((i + 1) / segmentCount);
      drawSegment(i, lastAngle, angle);

      ctx.stroke();
      ctx.save();
      lastAngle = angle;
    }
  };

  return (
    <div id="wheel">
      <canvas id="canvas" width="600" height="600" />
    </div>
  );
};

export default WheelComponent;
