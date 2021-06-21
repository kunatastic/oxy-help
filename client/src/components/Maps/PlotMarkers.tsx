import React, { useState } from "react";
import UserLocationMarker from "./UserLocationMarker";
import MyMarker from "./MyMarker";
import { LatLngExpression } from "leaflet";
import ZoomContext from "../../contexts/ZoomContext";

const PlotMarkers = () => {
  // const [position, setPosition] = useState<undefined | LatLngExpression>();

  const allPosition: LatLngExpression[] = [
    [29.96233, 79.80404],
    [26.11499, 70.76891],
    [26.80592, 71.53548],
    [29.50523, 71.31991],
    [29.66089, 78.70158],
    [29.93368, 73.55608],
    [31.56122, 78.14496],
    [33.34253, 72.5319],
    [26.11327, 70.77715],
    [33.36671, 72.54344],
  ];

  var zoom = ZoomContext();
  const blueOptions = { color: "blue" };

  return (
    <>
      <UserLocationMarker />
      {allPosition.map((pos, key) => (
        <MyMarker
          pathOptions={blueOptions}
          position={pos}
          msg={"Hello"}
          zoomLevel={zoom}
          key={key}
        />
      ))}
    </>
  );
};

export default PlotMarkers;
