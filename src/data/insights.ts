export interface Insight {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string; 
  body: string[];
  relatedProjectIds: string[];
}
 
export const insights: Insight[] = [
  {
    slug: "water-safety-planning-asal-kenya",
    title: "What Water Safety Planning Actually Takes in Kenya's Arid Lands",
    category: "Water and Sewerage",
    excerpt:
      "Water Safety Plans are a WHO-endorsed framework, but applying one across Kenya's arid and semi-arid counties raises questions the standard template doesn't answer.",
    date: "September 2026",
    readTime: "4 min read",
    author: "Breinscope Technical Team",
    image: "/images/insights/treatment-plant.jpg",
    body: [
      "A Water Safety Plan (WSP) is, on paper, a fairly standardized WHO framework: identify hazards along the water supply chain, assess risk, and put control measures in place. In practice, applying that framework across Kenya's arid and semi-arid lands (ASALs) surfaces a different set of questions than a WSP built for a conventional urban utility.",
      "In our recent work supporting Water Safety Plan development for a water and sanitation company operating across ASAL segments of Kenya, three issues came up repeatedly. First, source reliability itself is often the dominant risk — in many ASAL contexts, the question isn't only 'is this water safe to drink' but 'will this source still be producing water in six months.' A WSP that treats supply reliability as a footnote rather than a core hazard misses what actually keeps county water managers up at night.",
      "Second, the governance layer matters as much as the engineering. A technically sound WSP that the utility's own staff don't have the capacity or mandate to implement won't survive past the consultancy's exit. Embedding the plan into existing institutional processes — not creating a parallel document — is what determines whether it gets used.",
      "Third, funding partners increasingly want WSPs that speak the language of results-based frameworks, not just technical compliance. Aligning a WSP's structure with how a funder like the Coca-Cola Foundation or a similar partner tracks programme outcomes makes the plan more useful long after the consultancy ends, not just at handover.",
      "None of this is a criticism of the WSP framework itself — it's a reminder that a strong technical tool still needs to be adapted to the institutional and environmental realities of where it's being used.",
    ],
    relatedProjectIds: ["p60", "p56", "p48"],
  },
  {
    slug: "gender-responsive-capacity-assessments-multi-country",
    title: "Running the Same Capacity Assessment Across Five Countries — What Changes, What Doesn't",
    category: "Governance, Social & Economic Development",
    excerpt:
      "A single methodology, applied across five African countries with very different institutional contexts, teaches you where standardization helps and where it quietly breaks down.",
    date: "August 2026",
    readTime: "5 min read",
    author: "Breinscope Technical Team",
    image: "/images/insights/meeting.jpg",
    body: [
      "Multi-country capacity needs assessments promise consistency: one methodology, one set of tools, comparable results across borders. That promise is genuinely useful for a continental body trying to benchmark institutional capacity — but delivering it well requires knowing exactly where standardization helps and where it needs to bend.",
      "In a recent gender-responsive Capacity Needs Assessment spanning five countries under a continental capacity-building programme, the core assessment framework stayed constant throughout. What had to flex, repeatedly, was how gender-responsiveness itself was operationalized in each institutional context. A question that reads as neutral in one country's civil service structure can carry a very different weight in another, depending on how gender mandates are already embedded — or not — in that institution's policy environment.",
      "This is where local enumerators and country-level partners aren't a nice-to-have; they're the mechanism that keeps the assessment honest. A centrally designed instrument, administered without that local interpretive layer, risks producing five sets of numbers that look comparable but aren't actually measuring the same thing.",
      "The practical lesson for any organization commissioning multi-country assessments: budget real time for a contextualization step between instrument design and fieldwork, per country. It's tempting to treat this as overhead. It's actually where the assessment's validity is won or lost.",
    ],
    relatedProjectIds: ["p59"],
  },
  {
    slug: "climate-adaptation-strategic-planning-five-year-horizon",
    title: "Why Five-Year Climate Strategies Need a Shorter Feedback Loop",
    category: "Climate Change, Environment & NRM",
    excerpt:
      "A five-year strategic plan for climate adaptation is the right time horizon for the problem — and the wrong time horizon for how climate risk actually evolves on the ground.",
    date: "July 2026",
    readTime: "4 min read",
    author: "Breinscope Technical Team",
    image: "/images/insights/climate.jpg",
    body: [
      "Climate adaptation strategic plans are usually built on multi-year horizons, and for good reason — the underlying problem (shifting rainfall patterns, changing agricultural viability, resource competition) doesn't resolve on an annual cycle. But there's a tension worth naming: the plan's timeframe is long, while the risk environment it's responding to keeps moving underneath it.",
      "In developing a gender-transformative, inclusive strategic plan for climate change adaptation across a multi-country African context, the most useful design decision wasn't in the five-year targets themselves — it was in building a shorter internal review rhythm underneath them. A strategic plan that only gets revisited at its midterm or endline evaluation is, in practice, making five-year bets on a fast-moving variable.",
      "The other recurring theme was that 'gender-transformative' has to be built into the plan's structure, not layered on as a cross-cutting section at the end. Climate impacts are not gender-neutral in most of the communities these strategies serve, and treating gender analysis as a late addition tends to produce a document that mentions the issue without actually redesigning interventions around it.",
      "For organizations sponsoring long-horizon strategic plans, our practical recommendation is simple: build the review cadence into the plan's own governance structure at the design stage, not as an afterthought once implementation starts.",
    ],
    relatedProjectIds: ["p58"],
  },
  {
    slug: "agriculture-curriculum-development-fragile-contexts",
    title: "Building an Agriculture Curriculum for a Context That Won't Sit Still",
    category: "Education and Skill Development",
    excerpt:
      "Curriculum design assumes a reasonably stable delivery environment. In parts of Somalia, that assumption doesn't hold — and the curriculum has to be designed differently as a result.",
    date: "June 2026",
    readTime: "4 min read",
    author: "Breinscope Technical Team",
    image: "/images/insights/workshop-meeting.jpg",
    body: [
      "Most agriculture curriculum development work assumes a few things: a relatively stable cohort of learners, a physical space that will remain accessible, and a delivery timeline that won't be interrupted. In parts of Somalia, none of those assumptions can be taken for granted — and a curriculum that depends on them tends to fail quietly, not loudly.",
      "In developing an agriculture curriculum for a response-innovation programme in Somalia, the design had to account for displacement, interrupted access, and instructors who might not be the same people from one cycle to the next. That shaped some concrete choices: modular content that doesn't require every session to happen in sequence, materials that can be handed to a new instructor without extensive retraining, and an emphasis on practical, low-input agricultural techniques that don't assume consistent access to inputs or infrastructure.",
      "There's a broader point here for curriculum work in any fragile or protracted-crisis context: resilience needs to be a design criterion for the curriculum itself, not just a property of the programme delivering it. A technically excellent curriculum that only works under stable conditions isn't actually fit for purpose in the environment it was commissioned for.",
    ],
    relatedProjectIds: ["p53", "p45"],
  },
  {
    slug: "conflict-sensitive-programming-what-it-actually-requires",
    title: "Conflict Sensitivity Is a Design Discipline, Not a Training Module",
    category: "Governance, Social & Economic Development",
    excerpt:
      "Conflict-sensitivity training is common. Conflict-sensitive programme design is rarer — and it's the harder, more useful thing to actually build.",
    date: "May 2026",
    readTime: "3 min read",
    author: "Breinscope Technical Team",
    image: "/images/insights/Training.jpg",
    body: [
      "It's common for development programmes to include a conflict-sensitivity training as part of staff onboarding — a half-day session, a checklist, a reminder to 'do no harm.' That's useful, but it's a different thing from conflict-sensitive programme design, which asks a harder question: does the programme's own structure, targeting, and delivery model risk creating or deepening local tensions, independent of what any individual staff member does?",
      "In supporting conflict-sensitivity capacity building for field partners and staff, and separately in developing a conflict-resolution and entrepreneurship curriculum for youth at risk, the most valuable shift wasn't in individual behavior — it was in getting programme teams to interrogate their own targeting criteria, resource distribution mechanisms, and community engagement processes for conflict risk, before those elements were finalized rather than after something went wrong.",
      "The practical takeaway for programme designers: conflict sensitivity works best as a design-stage discipline embedded in the logframe and targeting strategy, not solely as a training delivered to staff after the programme's structure is already locked in.",
    ],
    relatedProjectIds: ["p17", "p26"],
  },
];