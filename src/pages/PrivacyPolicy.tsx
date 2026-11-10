import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
 
export default function PrivacyPolicy() {
  return (
    <main className="bg-white py-20 font-body text-brand-charcoal">
      <Seo
        title="Privacy Policy"
        description="How Breinscope Consultants collects, uses, and protects information submitted through breinscope.co.ke."
        path="/privacy-policy"
        jsonLd={breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy" }])}
      />
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
          Legal
        </p>
        <h1 className="mt-3 font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-brand-charcoal/60">
          Effective date: [ Insert date ] · Last updated: [ Insert date ]
        </p>
 
        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              1. Who We Are
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              Breinscope Consultants Limited ("Breinscope," "we," "us," or
              "our") is a Kenyan-owned consultancy firm headquartered in
              Nairobi, Kenya, with offices in Kisumu (Kenya), Mogadishu
              (Somalia), and Kigali (Rwanda), and a partner presence in
              Juba (South Sudan). This policy explains how we collect,
              use, and protect personal information when you visit
              breinscope.co.ke or contact us through the website.
            </p>
          </section>
 
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              2. Information We Collect
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              We collect information you provide directly to us, and
              limited information collected automatically:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-charcoal/85">
              <li>
                <span className="font-semibold text-brand-navy">
                  Contact and enquiry form submissions:
                </span>{" "}
                name, email address, phone number, organization, sector of
                interest, and any message you submit through our contact
                forms.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">
                  Usage and analytics data:
                </span>{" "}
                pages visited, time on page, and general device/browser
                information, collected automatically via Google Analytics.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">
                  Location context:
                </span>{" "}
                where our Contact and Where We Work pages display maps
                (via Google Maps / OpenStreetMap), no personal location
                data about you is collected by us through those map
                embeds.
              </li>
            </ul>
          </section>
 
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-charcoal/85">
              <li>To respond to enquiries submitted through our contact forms.</li>
              <li>To understand how visitors use our website, so we can improve it.</li>
              <li>To maintain records of client and partner communications.</li>
              <li>To comply with applicable legal and regulatory obligations.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              We do not sell personal information to third parties.
            </p>
          </section>
 
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              4. Third-Party Services We Use
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              Our website relies on the following third-party services,
              each with their own privacy practices:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-charcoal/85">
              <li>
                <span className="font-semibold text-brand-navy">Formspree</span> —
                processes and delivers contact form submissions to our team.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">Google Analytics</span> —
                provides aggregated website usage statistics.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">
                  Google Maps / OpenStreetMap
                </span>{" "}
                — displays interactive maps of our office locations.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">WhatsApp</span> —
                if you choose to contact us via our WhatsApp click-to-chat
                link, that conversation is subject to WhatsApp's own
                privacy policy, not this one.
              </li>
            </ul>
          </section>
 
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              5. Data Retention
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              We retain contact form submissions for as long as necessary
              to respond to your enquiry and maintain appropriate business
              records, after which they are deleted or anonymized. [ This
              section should specify an actual retention period once
              confirmed with Breinscope. ]
            </p>
          </section>
 
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              6. Your Rights
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              Depending on applicable law, you may have the right to
              request access to, correction of, or deletion of your
              personal information held by us. To make such a request,
              contact us using the details below.
            </p>
          </section>
 
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              7. Contact Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              For questions about this Privacy Policy or how your
              information is handled, contact us at{" "}
              <span className="font-semibold text-brand-navy">
                info@breinscope.co.ke
              </span>{" "}
              or through our{" "}
              <Link to="/contact" className="text-brand-blue hover:text-brand-navy">
                Contact page
              </Link>
              .
            </p>
          </section>
 
          <section>
            <h2 className="font-heading text-lg font-semibold text-brand-navy">
              8. Changes to This Policy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated "last updated"
              date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}