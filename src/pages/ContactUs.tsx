import { useState, type FormEvent } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import { offices } from "../data/offices";
import { brandPin } from "../lib/brandPin";
 
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkowgnz";
 
const sectorsOfInterest = [
  "Agriculture & Rural Development",
  "Climate Change, Environment & NRM",
  "Energy and Power Systems",
  "Water and Sewerage",
  "Rural and Urban Infrastructure",
  "Road and Transportation",
  "Education and Skill Development",
  "Digital Development",
  "Human Capital Consulting",
  "Global Health and WASH",
  "Governance, Social & Economic Development",
  "Other / Not sure yet",
];
 
type SubmitState = "idle" | "submitting" | "success" | "error";
 
export default function ContactUs() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const hq = offices.find((office) => office.isHQ) ?? offices[0];
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
 
    const form = event.currentTarget;
    const data = new FormData(form);
 
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
 
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
 
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title="Contact Us"
        description="Get in touch with Breinscope Consultants — offices in Nairobi, Kisumu, Mogadishu, Kigali, and Juba, ready to discuss your next project."
        path="/contact"
      />
      {/* ================= HERO ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
            Contact Us
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Start a conversation
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-sky">
            Whether it's a project, a partnership, or a general enquiry —
            our team is ready to hear from you.
          </p>
        </div>
      </section>
 
      {/* ================= FORM + MAP ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* ---------------- General enquiry form ---------------- */}
          <div className="rounded-2xl border-t-4 border-brand-amber bg-white p-8 shadow-lg">
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-brand-charcoal/70">
              Fields marked with * are required.
            </p>
 
            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-xl bg-brand-green/10 py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-brand-green" />
                <p className="max-w-xs text-sm text-brand-charcoal">
                  Thank you — your message has been sent. A member of our
                  team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-brand-navy"
                    >
                      Full name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-organization"
                      className="text-sm font-medium text-brand-navy"
                    >
                      Organization
                    </label>
                    <input
                      id="contact-organization"
                      name="organization"
                      type="text"
                      className="mt-1.5 w-full rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="Your organization"
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-brand-navy"
                    >
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="jane@organization.org"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-sm font-medium text-brand-navy"
                    >
                      Phone number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="mt-1.5 w-full rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>
 
                <div>
                  <label
                    htmlFor="contact-sector"
                    className="text-sm font-medium text-brand-navy"
                  >
                    Sector of interest
                  </label>
                  <select
                    id="contact-sector"
                    name="sector_of_interest"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="" disabled>
                      Select a sector
                    </option>
                    {sectorsOfInterest.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>
 
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-brand-navy"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full resize-none rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Tell us about your project or enquiry..."
                  />
                </div>
 
                {status === "error" && (
                  <p className="text-sm text-brand-coral">
                    Something went wrong sending your message. Please try
                    again, or reach us directly using the details alongside.
                  </p>
                )}
 
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy px-5 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-navy/90 disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
 
          {/* ---------------- Nairobi HQ map ---------------- */}
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Visit our Nairobi HQ
            </h2>
            <p className="mt-2 text-sm text-brand-charcoal/70">
              {hq.address}
            </p>
            <div className="relative isolate mt-5 overflow-hidden rounded-2xl border border-brand-sky/30 shadow-lg">
              {hq.lat !== undefined && hq.lng !== undefined && (
                <MapContainer
                  center={[hq.lat, hq.lng]}
                  zoom={14}
                  scrollWheelZoom={false}
                  style={{ height: "360px", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[hq.lat, hq.lng]} icon={brandPin}>
                    <Popup>
                      <div className="font-body">
                        <p className="font-heading text-sm font-semibold text-brand-navy">
                          {hq.name}
                        </p>
                        <p className="mt-1 text-xs text-brand-charcoal">
                          {hq.address}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>
            <p className="mt-2 text-xs text-brand-charcoal/60">
              Map data &copy; OpenStreetMap contributors.
            </p>
 
            <div className="mt-6 space-y-2 rounded-xl bg-brand-sky/15 p-5 shadow-sm">
              {hq.phones.map((phone) => (
                <div key={phone} className="flex items-center gap-2 text-sm text-brand-charcoal">
                  <Phone className="h-4 w-4 text-brand-blue" />
                  <span>{phone}</span>
                </div>
              ))}
              {hq.email && (
                <div className="flex items-center gap-2 text-sm text-brand-charcoal">
                  <Mail className="h-4 w-4 text-brand-blue" />
                  <span>{hq.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= ALL OFFICES ================= */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
            Our Offices
          </h2>
          <p className="mt-3 max-w-2xl text-brand-charcoal/80">
            With a presence across East and Central Africa, there's likely
            a Breinscope office near you.
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.name}
                className="rounded-xl border-t-4 border-brand-blue bg-white p-6 shadow-md"
              >
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
    </main>
  );
}