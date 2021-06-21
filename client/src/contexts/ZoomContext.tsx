import { useState } from "react";
import { useMapEvents } from "react-leaflet";

const ZoomContext: () => number = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(0);

  const map = useMapEvents({
    move: () => setZoomLevel(map.getZoom()),
  });

  return zoomLevel;
};

export default ZoomContext;
