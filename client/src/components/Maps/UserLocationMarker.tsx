import { LatLngExpression } from "leaflet";
import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import ZoomContext from "../../contexts/ZoomContext";
import MyMarker from "./MyMarker";

const UserLocationMarker = () => {
  const [fetch, setFetch] = useState(false);
  const [position, setPosition] = useState<LatLngExpression>([0, 0]);

  const map = useMapEvents({
    click() {
      if (!fetch) map.locate();
    },
    locationfound(e) {
      console.log(e.latlng);
      setFetch(true);
      setPosition(e.latlng);
      map.flyTo(e.latlng, 5);
    },
  });

  var zoom = ZoomContext();
  const redOptions = { color: "red" };
  return (
    <MyMarker
      msg={"Hello"}
      zoomLevel={zoom}
      pathOptions={redOptions}
      position={position}
    />
  );
};

export default UserLocationMarker;
