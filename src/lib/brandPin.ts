import L from "leaflet";
 
export const brandPin = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 28px; height: 28px;
      background: #1B2A5C;
      border: 3px solid #F5A623;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 2px 6px rgba(0,0,0,0.35);
    "></div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -26],
});