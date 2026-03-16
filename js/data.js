export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  //{ id: "results", label: "Results" },
  //{ id: "posts", label: "Posts" },
  { id: "contact", label: "Contact" }
];

export const PROFILE = {
  name: "Diego Dinamarca",
  title: "Diego Dinamarca",
  heroSubtitle: "Hydrologist · Geospatial Analyst · Researcher",
  introTitle: "Welcome to my site!",
  heroIntro:
    "I build scientific, technical, and data-driven workflows that connect hydrology, remote sensing, spatial modelling, and environmental insight. This space brings together my profile, selected work, and research-oriented reflections in a clean, personal portfolio format.",
  signature: "— Diego",
  about:
    "I work at the intersection of hydrology, geospatial analysis, environmental modelling, and technical communication. My professional interests include spatial data workflows, remote sensing, soil and water processes, modelling support, and the clear communication of complex scientific results.",
  interests: [
    "Hydrological modelling",
    "Remote sensing",
    "GIS and spatial analysis",
    "Environmental data science",
    "Scientific programming",
    "Research communication"
  ],
  strengths: [
    "Translating complex technical work into clear visual and written outputs",
    "Building reproducible geospatial and environmental analysis workflows",
    "Combining scientific depth with practical implementation and communication"
  ],
  heroMeta: [
    { label: "Location", value: "Utrecht, Netherlands" },
    { label: "Focus", value: "Hydrology & GIS" },
    { label: "Format", value: "Research + Portfolio" }
  ],
  miniStats: [
    { value: "6+", label: "Years of technical and academic experience" },
    { value: "20+", label: "Projects, scripts, and modelling workflows" },
    { value: "Ongoing", label: "Posts, insights, and project summaries" }
  ],
  images: {
    heroCover: "assets/images/hero_cover.jpg",
    profile: "assets/images/profile_picture.jpeg"
  },
  contact: [
    { label: "Email", value: "diegodinamarca@email.com", href: "mailto:diegodinamarca@email.com" },
    { label: "LinkedIn", value: "linkedin.com/in/diegodinamarca", href: "#" },
    { label: "GitHub", value: "github.com/diegodinamarca", href: "#" }
  ]
};

export const EXPERIENCE = [
  {
    type: "Education",
    title: "MSc in Earth Surface and Water",
    subtitle: "Hydrology track",
    organization: "Utrecht University",
    period: "2025 – Present",
    description:
      "Graduate training focused on hydrology, environmental processes, modelling, and scientific analysis with an emphasis on technically rigorous and applied research.",
    tags: ["Hydrology", "Environmental Modelling", "Research"]
  },
  {
    type: "Research",
    title: "Hydrological and geospatial research workflows",
    subtitle: "Soil, water, and environmental systems",
    organization: "Independent / Academic projects",
    period: "Recent years",
    description:
      "Development of reproducible workflows for soil moisture analysis, evapotranspiration interpretation, terrain preprocessing, geospatial scripting, and model-oriented data handling.",
    tags: ["R", "Python", "GIS", "Remote Sensing"]
  },
  {
    type: "Professional",
    title: "Geospatial analysis and cartographic support",
    subtitle: "Spatial data, mapping, and technical deliverables",
    organization: "Consulting / Applied work",
    period: "Previous experience",
    description:
      "Creation of maps, spatial analysis products, data processing pipelines, and technical content for applied environmental and territorial projects.",
    tags: ["Cartography", "Spatial Analysis", "Technical Reporting"]
  }
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "Hydrological model preprocessing pipeline",
    summary:
      "A modular workflow for preparing terrain, soil, and forcing data for hydrological modelling environments.",
    imageLabel: "Terrain, rasters, and preprocessing",
    tags: ["R", "Hydrology", "DEM", "Automation"],
    details:
      "This project focuses on reproducible preprocessing for hydrological modelling. It includes DEM conditioning, resampling, raster standardization, helper utilities, and a clear project structure designed for maintainability."
  },
  {
    id: "project-2",
    title: "Soil moisture and evapotranspiration analysis",
    summary:
      "Comparative analysis of model configurations to understand soil moisture variability and plant-water dynamics.",
    imageLabel: "Soil water and ET relationships",
    tags: ["Soil Moisture", "ET", "Statistics", "Research"],
    details:
      "The analysis explores relationships between evapotranspiration and soil moisture across multiple model configurations, highlighting thresholds, variability patterns, and implications for process interpretation."
  },
  {
    id: "project-3",
    title: "Personal research and portfolio platform",
    summary:
      "A structured website to present professional experience while publishing project summaries, ideas, and insights.",
    imageLabel: "Portfolio and publishing platform",
    tags: ["HTML", "CSS", "JavaScript", "UI"],
    details:
      "This website acts both as a curriculum page and an expandable publishing platform. It is designed to support future additions through data-driven rendering and reusable components."
  }
];

export const HIGHLIGHTS = [
  {
    value: "Multi-domain",
    label: "Experience with structured modelling and geospatial workflows"
  },
  {
    value: "Reproducible",
    label: "Code architecture centered on maintainability and DRY design"
  },
  {
    value: "Research-led",
    label: "Strong emphasis on analysis, interpretation, and scientific clarity"
  },
  {
    value: "Scalable",
    label: "Content-ready structure for future projects and written posts"
  }
];

export const POSTS = [
  {
    id: "post-1",
    title: "What makes a hydrological workflow reproducible?",
    date: "2026-03-01",
    category: "Workflow",
    excerpt:
      "A reflection on file structure, modular code, helper functions, and why reproducibility matters in environmental modelling projects.",
    content:
      "This post discusses the practical meaning of reproducibility in hydrology and geospatial analysis, including code organization, shared constants, naming rules, and the benefits of separating orchestration from implementation."
  },
  {
    id: "post-2",
    title: "Interpreting soil moisture variability across layers",
    date: "2026-02-18",
    category: "Research Note",
    excerpt:
      "Short notes on how variability patterns can differ by soil layer and what that means for process interpretation.",
    content:
      "This note explores how coefficient of variation patterns can change with depth, how thresholds affect interpretation, and how soil hydraulic parameterization can shape model behavior."
  },
  {
    id: "post-3",
    title: "Why project summaries are useful beyond documentation",
    date: "2026-01-29",
    category: "Opinion",
    excerpt:
      "A brief argument for writing compact summaries of technical work, not just to document tasks but to clarify thinking and communicate value.",
    content:
      "Project summaries help make work visible, transferable, and interpretable. They also support personal reflection, portfolio building, and communication with collaborators or employers."
  },
  {
    id: "post-4",
    title: "Turning research outputs into visual stories",
    date: "2025-12-10",
    category: "Insight",
    excerpt:
      "A note on how plots, maps, metrics, and concise interpretation can turn raw technical outputs into compelling communication.",
    content:
      "Good visual storytelling requires more than graphs. It needs hierarchy, context, annotations, and a strong connection between evidence and message."
  }
];