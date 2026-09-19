import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, Mail, MapPin, Briefcase, Clock, Layers } from "lucide-react";
import { offices } from "../data/offices";
import { brandPin } from "../lib/brandPin";
import Seo from "../components/Seo";
 
const footprintStats = [
  { icon: Briefcase, label: "Projects Delivered", value: "200+" },
  { icon: Clock, label: "Years of Experience", value: "20" },
  { icon: Layers, label: "Key Sectors", value: "12+" },
  { icon: MapPin, label: "Countries with a Presence", value: "5" },
];
 
export default function WhereWeWork() {
  const officesWithCoords = offices.filter(
    (office) => office.lat !== undefined && office.lng !== undefined
  );
 
  // Center roughly on the East Africa region so all five pins are
  // visible on load without needing to pan.
  const mapCenter: [number, number] = [-0.2, 35.5];
 
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title="Where We Work"
        description="Breinscope operates across Kenya, Somalia, Rwanda, and South Sudan — from our continental hub in Nairobi to offices and partner entities across the region."
        path="/where-we-work"
      />
      {/* ================= HERO ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
            Where We Work
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Our Regional Footprint
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-sky">
            From our continental hub in Nairobi, Breinscope operates across
            East and Central Africa through a network of regional offices
            and partner entities.
          </p>
        </div>
      </section>
 
      {/* ================= FOOTPRINT STATS ================= */}
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 sm:grid-cols-4">
          {footprintStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border-t-4 border-brand-amber bg-white p-5 text-center shadow-md"
              >
                <Icon className="mx-auto h-6 w-6 text-brand-blue" strokeWidth={1.75} />
                <p className="mt-2 font-heading text-2xl font-semibold text-brand-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-brand-charcoal/70">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>
 
      {/* ================= INTERACTIVE MAP ================= */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
            Our Offices Across the Region
          </h2>
          <p className="mt-3 max-w-2xl text-brand-charcoal/80">
            Click or tap a pin to see office details. Pan and zoom to
            explore.
          </p>
 
          <div className="relative isolate mt-8 overflow-hidden rounded-2xl border border-brand-sky/30 shadow-xl">
            <MapContainer
              center={mapCenter}
              zoom={4}
              scrollWheelZoom={false}
              style={{ height: "480px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {officesWithCoords.map((office) => (
                <Marker
                  key={office.name}
                  position={[office.lat as number, office.lng as number]}
                  icon={brandPin}
                >
                  <Popup>
                    <div className="font-body">
                      <p className="font-heading text-sm font-semibold text-brand-navy">
                        {office.name}
                      </p>
                      <p className="mt-1 text-xs text-brand-charcoal">
                        {office.address}
                      </p>
                      {office.phones.map((phone) => (
                        <p key={phone} className="mt-1 text-xs text-brand-charcoal">
                          {phone}
                        </p>
                      ))}
                      {office.email && (
                        <p className="mt-1 text-xs text-brand-charcoal">
                          {office.email}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <p className="mt-3 text-xs text-brand-charcoal/60">
            Map data &copy; OpenStreetMap contributors.
          </p>
        </div>
      </section>
 
      {/* ================= OFFICE DETAIL CARDS ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
            Office Directory
          </h2>
          <p className="mt-3 max-w-2xl text-brand-charcoal/80">
            Full contact details for every Breinscope location.
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.name}
                className={`rounded-xl bg-white p-6 shadow-md ${
                  office.isHQ
                    ? "border-t-4 border-brand-amber"
                    : "border-t-4 border-brand-blue"
                }`}
              >
                {office.isHQ && (
                  <span className="mb-2 inline-block rounded-full bg-brand-amber/15 px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-brand-amber">
                    Headquarters
                  </span>
                )}
                <h3 className="font-heading text-base font-semibold text-brand-navy">
                  {office.name}
                </h3>
                <div className="mt-3 flex gap-2 text-sm text-brand-charcoal/80">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-blue" />
                  <span>{office.address}</span>
                </div>
                {office.phones.map((phone) => (
                  <div
                    key={phone}
                    className="mt-2 flex items-center gap-2 text-sm text-brand-charcoal/80"
                  >
                    <Phone className="h-4 w-4 flex-none text-brand-blue" />
                    <span>{phone}</span>
                  </div>
                ))}
                {office.email && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-brand-charcoal/80">
                    <Mail className="h-4 w-4 flex-none text-brand-blue" />
                    <span>{office.email}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= CTA BAND ================= */}
      <section className="bg-brand-amber">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Find the office nearest you
            </h2>
            <p className="mt-2 text-brand-navy/80">
              Not sure who to reach? Send us a message and we'll route it
              to the right team.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-navy/90"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}