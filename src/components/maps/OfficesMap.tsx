import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { brandPin } from "../../lib/brandPin";
import type { Office } from "../../data/offices";

/**
 * Shared Leaflet map for every office map on the site. Always load it
 * via React.lazy() inside <ClientOnly> — it imports Leaflet, which
 * can't run during prerendering.
 */
export default function OfficesMap({
  offices,
  center,
  zoom,
  interactive = true,
  showPopups = true,
  showAttribution = true,
}: {
  offices: Office[];
  center: [number, number];
  zoom: number;
  /** false = decorative teaser: no dragging or zooming. */
  interactive?: boolean;
  showPopups?: boolean;
  showAttribution?: boolean;
}) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      dragging={interactive}
      zoomControl={interactive}
      doubleClickZoom={interactive}
      touchZoom={interactive}
      attributionControl={showAttribution}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offices
        .filter((office) => office.lat !== undefined && office.lng !== undefined)
        .map((office) => (
          <Marker
            key={office.name}
            position={[office.lat as number, office.lng as number]}
            icon={brandPin}
          >
            {showPopups && (
              <Popup>
                <div className="font-body">
                  <p className="font-heading text-sm font-semibold text-brand-navy">
                    {office.name}
                  </p>
                  <p className="mt-1 text-xs text-brand-charcoal">{office.address}</p>
                  {office.phones.map((phone) => (
                    <p key={phone} className="mt-1 text-xs text-brand-charcoal">
                      {phone}
                    </p>
                  ))}
                  {office.email && (
                    <p className="mt-1 text-xs text-brand-charcoal">{office.email}</p>
                  )}
                </div>
              </Popup>
            )}
          </Marker>
        ))}
    </MapContainer>
  );
}
