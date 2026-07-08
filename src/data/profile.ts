/**
 * Single source of truth for all site content.
 * Update this file when the resume changes.
 */

export const identity = {
  name: "Tatiane Santos",
  fullName: "Tatiane Pereira dos Santos",
  suffix: "Ph.D.",
  role: "Quantum engineer & AI scientist",
  tagline:
    "I build machine learning and computational-physics tools that accelerate topological quantum hardware — work toward the first fault-tolerant quantum computer.",
  location: "Santa Barbara, California",
  coordinates: "34.42° N, 119.70° W",
  company: "Microsoft Station Q",
  email: "tatianepereiradossantos@gmail.com",
  social: {
    github: "https://github.com/tatianep",
    linkedin: "https://www.linkedin.com/in/tatiane-pereira-dos-santos/",
    x: "https://x.com/SantosTatianeP",
  },
  githubUsername: "tatianep",
};

/** The scientific arc, oldest → newest. Shown as a mono strip in the hero. */
export const trajectoryStrip = [
  "chaos theory",
  "quantum transport",
  "ultrafast dynamics",
  "deep learning",
  "AI at scale",
  "topological qubits",
];

export const about = {
  lead: "I'm a physicist at Microsoft Station Q, where machine learning, AI, and computational physics meet the hardest problem in computing: making qubits that keep their promises.",
  paragraphs: [
    "The shortest path from physics to quantum computing is a straight line. I didn't take it — I enjoy a challenge too much. My path started with a quantum transport Ph.D. in Brazil and at CEA Grenoble in France, and moved through computational materials research and machine learning at the University of Illinois at Urbana-Champaign. Then I traded a postdoc for data science in mobile games, and games for AI in global supply chains — each time choosing the problem I didn't yet know how to solve — before collapsing back onto quantum hardware. That range is the point: I translate fluently between physics, data, and engineering, and I'm at my best where those languages collide.",
    "Away from the lab I play Brazilian classical guitar, chip away at my French, and tinker with small data projects — a few of which live further down this page.",
  ],
  facts: [
    { label: "Currently", value: "Senior Quantum Engineer, Microsoft Station Q" },
    { label: "Based in", value: "Santa Barbara, California" },
    { label: "Languages", value: "Portuguese · Spanish · English · French" },
    { label: "Off hours", value: "Brazilian classical guitar" },
  ],
};

export interface Role {
  company: string;
  companyUrl?: string;
  role: string;
  date: string;
  location: string;
  summary: string[];
  tags: string[];
}

export const experience: Role[] = [
  {
    company: "Microsoft",
    companyUrl: "https://azure.microsoft.com/en-us/solutions/quantum-computing/",
    role: "Senior Quantum Engineer",
    date: "Dec 2024 — Present",
    location: "Station Q · Santa Barbara, CA",
    summary: [
      "Accelerating the development of topological quantum hardware with machine learning, AI, and computational physics — optimizing qubit performance and automating device development.",
    ],
    tags: ["Quantum hardware", "Machine learning", "Computational physics"],
  },
  {
    company: "ADM",
    companyUrl: "https://www.adm.com/",
    role: "Data Scientist — Artificial Intelligence",
    date: "Sep 2023 — Nov 2024",
    location: "Cincinnati, OH",
    summary: [
      "Built end-to-end ML for nutrition, supply chain, and logistics at a Fortune 50 company, with impact measured in millions of dollars.",
      "Developed AI chatbots that let technical and non-technical teams interrogate files and datasets, and taught global senior leadership how to put AI to work.",
    ],
    tags: ["LLMs", "Azure ML", "Supply chain"],
  },
  {
    company: "ADM",
    companyUrl: "https://www.adm.com/",
    role: "Data Scientist & IT Project Manager",
    date: "Oct 2022 — Sep 2023",
    location: "São Paulo, Brazil",
    summary: [
      "Key link between Brazil- and US-based teams, unlocking AI initiatives across South America.",
      "Turned web-scraped data, geo-analysis, clustering, and neural networks into sharper marketing strategy and personalized customer experiences.",
    ],
    tags: ["Neural networks", "Geo-analysis", "Clustering"],
  },
  {
    company: "Wildlife Studios",
    companyUrl: "https://wildlifestudios.com/",
    role: "Data Scientist",
    date: "Dec 2021 — Oct 2022",
    location: "São Paulo, Brazil",
    summary: [
      "Shipped weekly models for pricing, engagement, anomaly detection, recommendations, and A/B testing for mobile games at massive scale.",
      "Converted data models into decisions with revenue impact of up to 20% at reduced implementation cost.",
    ],
    tags: ["Pricing", "A/B testing", "Recommender systems"],
  },
  {
    company: "University of Illinois at Urbana-Champaign",
    companyUrl: "https://illinois.edu/",
    role: "Postdoctoral Researcher",
    date: "Jan 2019 — Nov 2021",
    location: "Urbana, IL",
    summary: [
      "Implemented novel scattering mechanisms in a C++ suite simulating NV centers in diamond, and analyzed atomic defects in 2D materials for a deep-learning study cited 100+ times.",
      "Wrote grants and papers, advised students, and lectured Materials Properties to engineering undergraduates.",
    ],
    tags: ["C++", "Deep learning", "Materials simulation"],
  },
  {
    company: "CEA",
    companyUrl: "https://www.cea.fr/",
    role: "Visiting Scientific Researcher",
    date: "Jun 2017 — Dec 2017",
    location: "Grenoble, France",
    summary: [
      "Collaborated with the developers of a quantum-dynamics Python package (100K+ downloads) on its extended release, writing HPC simulations of particle dynamics in semiconductors and 2D materials.",
    ],
    tags: ["HPC", "Python", "Quantum dynamics"],
  },
  {
    company: "Universidade Federal Fluminense",
    companyUrl: "https://www.uff.br/",
    role: "Doctoral Researcher",
    date: "Dec 2014 — Dec 2018",
    location: "Niterói, Brazil",
    summary: [
      "Built the most precise model of the Quantum Hall Effect in realistic-size samples of its time using Python and Fortran on sparse-matrix linear algebra.",
      "Graduated with the highest GPA in the department — a 99.9% score.",
    ],
    tags: ["Quantum transport", "Fortran", "Sparse solvers"],
  },
];

export interface Publication {
  year: string;
  title: string;
  venue: string;
  url: string;
  note?: string;
  abstract: string;
}

export const publications: Publication[] = [
  {
    year: "2025",
    title:
      "Distinct Lifetimes for X and Z Loop Measurements in a Majorana Tetron Device",
    venue: "arXiv · Microsoft Quantum",
    url: "https://arxiv.org/abs/2507.08795",
    note: "Topological qubit measurements",
    abstract:
      "Single-shot interferometric measurements of fermion parity on the X and Z loops of a Majorana tetron reveal two widely separated timescales — τ_X ≈ 14.5 µs and τ_Z ≈ 12.4 ms — attributed to intra-wire parity switches and external quasiparticle poisoning, respectively.",
  },
  {
    year: "2022",
    title:
      "Electron dynamics in extended systems within real-time time-dependent density-functional theory",
    venue: "MRS Communications · Springer",
    url: "https://link.springer.com/article/10.1557/s43579-022-00273-7",
    abstract:
      "A review of real-time TDDFT for electron dynamics in complex, extended systems — the computational cost of numerical propagation, absorbing boundary conditions, and the limits of describing electron–electron scattering — centered on the Qb@ll code.",
  },
  {
    year: "2021",
    title: "The 2021 ultrafast spectroscopic probes of condensed matter roadmap",
    venue: "Journal of Physics: Condensed Matter · IOP",
    url: "https://iopscience.iop.org/article/10.1088/1361-648X/abfe21",
    abstract:
      "A community roadmap surveying the state of the art in ultrafast probes of condensed matter — tracking charges, spins, and atoms from attoseconds to nanoseconds — and the experimental and theoretical challenges ahead.",
  },
  {
    year: "2020",
    title:
      "Deep Learning Enabled Strain Mapping of Single-Atom Defects in Two-Dimensional Transition Metal Dichalcogenides with Sub-Picometer Precision",
    venue: "Nano Letters · ACS",
    url: "https://pubs.acs.org/doi/10.1021/acs.nanolett.0c00269",
    note: "100+ citations",
    abstract:
      "Deep learning mines large sets of aberration-corrected STEM images to locate and classify single-atom defects in WSe₂₋₂ₓTe₂ₓ, measuring atomic spacings with up to 0.2 pm precision and revealing oscillating strain fields around Se vacancies.",
  },
  {
    year: "2019",
    title:
      "An order N numerical method to efficiently calculate the transport properties of large systems",
    venue: "Journal of Computational Physics · Elsevier",
    url: "https://doi.org/10.1016/j.jcp.2019.05.034",
    abstract:
      "A wave-function-matching formulation of Landauer-Büttiker quantum transport whose operation count scales linearly with system size, achieved by exploiting the sparsity of the central region's Hamiltonian with efficient sparse linear solvers.",
  },
];

export const education = [
  {
    degree: "Ph.D., Physics",
    school: "Universidade Federal Fluminense",
    date: "2014 — 2018",
  },
  {
    degree: "M.Sc., Physics",
    school: "Universidade Federal do ABC",
    date: "2012 — 2014",
  },
  {
    degree: "B.Sc., Physics · B.Sc., Science & Technology",
    school: "Universidade Federal do ABC",
    date: "2008 — 2012",
  },
];

export const honors = [
  {
    title: "Best graduate poster award — 1st place",
    org: "Universidade Federal Fluminense",
    year: "2018",
  },
  {
    title: "CAPES Exchange Program Scholarship",
    org: "Brazilian Federal Agency of Graduate Education",
    year: "2017",
  },
  {
    title: "“FAPERJ Grade 10” Scholarship",
    org: "Rio de Janeiro State Research Foundation",
    year: "2016",
  },
  {
    title: "Ph.D. qualification exam — approved with distinction",
    org: "Universidade Federal Fluminense",
    year: "2015",
  },
];

export const teaching = [
  {
    title: "Course Instructor — Materials Properties",
    org: "University of Illinois at Urbana-Champaign",
    year: "2020",
  },
  {
    title: "Graduate TA — Experimental Physics III",
    org: "Universidade Federal Fluminense",
    year: "2015 — 2016",
  },
  {
    title: "TA — Math, Physics, CS & Engineering programs",
    org: "Universidade Federal do ABC",
    year: "2008 — 2012",
  },
];

export const skills = [
  {
    group: "Quantum & physics",
    items: [
      "Topological qubits",
      "Quantum hardware",
      "Device design",
      "Quantum transport",
      "Condensed matter",
      "Computational physics",
      "HPC",
    ],
  },
  {
    group: "AI & machine learning",
    items: [
      "Deep learning",
      "LLMs & generative AI",
      "Computer vision",
      "Recommender systems",
      "A/B testing",
      "Forecasting",
      "Statistical modeling",
    ],
  },
  {
    group: "Engineering",
    items: [
      "Python",
      "C++",
      "Fortran",
      "SQL",
      "JavaScript",
      "Azure ML",
      "Spark",
      "Git",
    ],
  },
];
