import type { Faq } from "../lib/schema";

// ---------------------------------------------------------------------
// Home page FAQ.
//
// Written for answer engines as much as for people: each answer opens
// with a direct one-sentence answer, then supporting detail. Every fact
// here is already stated elsewhere on the site (About, Expertise, Where
// We Work, Clients); keep it that way, and update the answers if those
// facts change. The same list feeds the visible FAQ section and the
// FAQPage JSON-LD, so the two can never drift apart.
// ---------------------------------------------------------------------

export const homeFaqs: Faq[] = [
  {
    question: "What does a development consultancy do?",
    answer:
      "A development consultancy provides independent technical expertise to governments, donors, and NGOs to design, deliver, and assess development programmes. At Breinscope, that covers the full project cycle: needs assessments and baseline surveys, feasibility and impact studies, strategic planning, capacity building and training, and monitoring, evaluation, and learning (MEL).",
  },
  {
    question: "What sectors does Breinscope Consultants work in?",
    answer:
      "Breinscope works across 11 sectors: Agriculture & Rural Development; Climate Change, Environment & Natural Resource Management; Energy and Power Systems; Water and Sewerage; Rural and Urban Infrastructure; Road and Transportation; Education and Skills Development; Digital Development; Human Capital Consulting; Global Health and WASH; and Governance, Social & Economic Development.",
  },
  {
    question: "Which countries does Breinscope operate in?",
    answer:
      "Breinscope is headquartered in Nairobi, Kenya, with a branch office in Kisumu and offices in Mogadishu (Somalia), Kigali (Rwanda), and Juba (South Sudan, through a partner entity). From this East African base the firm also delivers multi-country assignments elsewhere in Africa, such as capacity assessments across Lesotho, Namibia, Senegal, Côte d'Ivoire, and Rwanda.",
  },
  {
    question: "Who are Breinscope's clients?",
    answer:
      "Breinscope serves bilateral and multilateral development agencies, national and county governments, international and local NGOs, foundations, and private-sector organizations. Clients and partners include the World Bank, USAID, UNICEF, UNDP, the African Development Bank, GIZ, KfW, IFAD, CARE Kenya, Save the Children, and World Vision.",
  },
  {
    question: "How long has Breinscope been in business?",
    answer:
      "Breinscope was first registered in Kenya in 2002 and became a limited liability company on 27 June 2007. Over more than 20 years, the firm has delivered 200+ projects across East and Central Africa.",
  },
  {
    question: "What is monitoring, evaluation, and learning (MEL), and why does it matter?",
    answer:
      "Monitoring, evaluation, and learning (MEL) is the system a programme uses to track progress, measure results against its targets, and feed lessons back into decisions. Monitoring is continuous tracking of activities and outputs; evaluation is a periodic, independent assessment of outcomes and impact, such as a baseline, mid-term, or end-line evaluation. Funders increasingly require strong MEL, and Breinscope builds it into its work in every sector.",
  },
  {
    question: "Does Breinscope work in fragile and conflict-affected settings?",
    answer:
      "Yes. Breinscope has offices in Somalia and South Sudan and long experience in Kenya's arid and semi-arid lands (ASALs). Peace and conflict management is one of the firm's core areas, and its teams apply conflict-sensitive approaches to programme design, assessments, and evaluations in fragile contexts.",
  },
  {
    question: "How does Breinscope ensure the quality of its work?",
    answer:
      "Every Breinscope engagement is backed by a Quality Management System that follows ISO 9001 principles. The firm combines experienced in-house management and consultants with data analytics, agile project management, and digital tools, and works with reputable local and international consultancy partners when an assignment needs added depth.",
  },
  {
    question: "Does Breinscope integrate gender and social inclusion into its projects?",
    answer:
      "Yes. Inclusivity and equity are core Breinscope values: the firm builds gender and youth inclusion, and the participation of marginalized communities, into its programmes. Recent examples include gender-responsive capacity needs assessments across five African countries and a gender-transformative, inclusive 2024–2029 strategic plan for Inclusive Climate Change Adaptation for a Sustainable Africa (ICCASA).",
  },
  {
    question: "How can I engage Breinscope for a project, tender, or partnership?",
    answer:
      "Contact Breinscope through the contact form at breinscope.co.ke/contact, by email at info@breinscope.co.ke, or by phone on +254 729 325577. The team responds to direct enquiries, requests for proposals (RFPs), expressions of interest (EOIs), and teaming or joint-venture partnership requests.",
  },
];
