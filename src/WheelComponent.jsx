import React, { useEffect } from "react";

const WheelComponent = ({
  segments,
  segColors,
  size,
  fontFamily = "proxima-nova",
  primaryColor,
}) => {
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
    const segText = segments[key];
    ctx.beginPath();
    ctx.save();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = "white";

    ctx.font = `bold 1em ${fontFamily}`;
    ctx.fillText(segText, size / 2 + 15, 0);
    ctx.restore();
  };

  const drawWheel = () => {
    const ctx = canvasContext;
    const segmentCount = segments.length || 5;
    let lastAngle = 0;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (let i = 0; i < segmentCount; i++) {
      const angle = PI2 * ((i + 1) / segmentCount);
      drawSegment(i, lastAngle, angle);

      ctx.stroke();
      ctx.save();
      lastAngle = angle;
    }

    // draw center circle ....
    ctx.beginPath();
    ctx.arc(centerX, centerY, 38, 0, PI2, true);
    ctx.closePath();
    ctx.fillStyle = primaryColor || "black";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.font = `bold 1.5em ${fontFamily}`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Spin", centerX, centerY + 3);
    ctx.stroke();

    // draw outer circle.....
    ctx.beginPath();
    ctx.arc(centerX, centerY, size - 7, 0, PI2, false);
    ctx.closePath();
    ctx.lineWidth = 14;
    ctx.globalAlpha = 0.7;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.restore();

    // draw needle ......
    



  };

  return (
    <div id="wheel">
      <canvas id="canvas" width="600" height="600" />
    </div>
  );
};

export default WheelComponent;
