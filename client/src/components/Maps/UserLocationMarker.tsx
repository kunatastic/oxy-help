import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import MyMarker from "./MyMarker";

export default function UserLocationMarker({ position, setPosition }: any) {
  const [fetch, setFetch] = useState(false);

  const map = useMapEvents({
    click() {
      if (!fetch) map.locate();
    },
    locationfound(e) {
      console.log(e);
      setFetch(true);
      setPosition(e.latlng);
      map.flyTo(e.latlng, 10);
    },
  });

  return position === null ? null : <MyMarker position={position} />;
}
