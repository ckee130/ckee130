import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Clinton",
  lastName: "Kee",
  name: `Clinton Kee`,
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "c.r.kee@outlook.com",
  location: "America/Chicago",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/17317417559",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/Ads/ad-1.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Scalable backend platforms, distributed systems, and AI-integrated architecture</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Case Study</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Autonurture
        </Text>
      </Row>
    ),
    href: "/work/autonurture-ai-outreach-platform",
  },
  subline: (
    <>
      10+ years shipping scalable RESTful APIs, event-driven backends, and LLM evaluation tooling in
      Python, Go, Java, TypeScript, and Node.js—across cloud-native AWS with CI/CD automation and
      structured output validation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from McKenzie, TN, USA`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Clinton is a McKenzie, TN–based senior software engineer with 10+ years across backend development,
        distributed systems, and AI-integrated platform architecture using Python, Go, Java, TypeScript,
        and Node.js. He delivers scalable RESTful APIs, event-driven backends, and LLM evaluation tooling
        across cloud-native AWS environments with CI/CD automation and structured output validation. A
        proven technical leader, he drives Agile delivery, automated testing pipelines, and cross-team
        alignment in production-grade systems. Bachelor-educated and positioned to contribute across
        backend services, platform architecture, and AI layers for high-impact software engineering work.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Backend languages",
        description: (
          <>Production backend services and APIs across polyglot service stacks.</>
        ),
        tags: [
          { name: "Python" },
          { name: "Go" },
          { name: "Java" },
          { name: "TypeScript" },
          { name: "Node.js" },
        ],
        images: [
          {
            src: "/Ads/ad-5.jpg",
            alt: "Development stack preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI and machine learning",
        description: (
          <>LLM integration, retrieval, validation, and evaluation in production workflows.</>
        ),
        tags: [
          { name: "LLM Integration" },
          { name: "Retrieval-augmented generation (RAG)" },
          { name: "Structured output validation" },
          { name: "PII detection and redaction" },
          { name: "LLM evaluation tooling" },
        ],
        images: [
          {
            src: "/Ads/ad-8.jpg",
            alt: "AI platform preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend, APIs, and databases",
        description: (
          <>RESTful design, SQL, messaging, and service-oriented architecture.</>
        ),
        tags: [
          { name: "RESTful API design" },
          { name: "SQL" },
          { name: "AWS SQS" },
          { name: "Event-driven architecture" },
          { name: "Microservices" },
        ],
        images: [
          {
            src: "/Ads/ad-9.jpg",
            alt: "Backend architecture preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud, DevOps, and testing",
        description: (
          <>Shipping reliably with containers, orchestration, pipelines, and automated gates.</>
        ),
        tags: [
          { name: "AWS" },
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "CI/CD pipelines" },
          { name: "GitHub Actions" },
        ],
        images: [
          {
            src: "/Ads/ad-1.jpg",
            alt: "Cloud and CI/CD preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Strengths",
        description: (
          <>
            Technical leadership and mentoring · Backend platform design · Distributed systems observability ·
            Agile delivery and cross-team influence · AI safety and compliance engineering · Clear technical
            communication.
          </>
        ),
        tags: [],
        images: [
          {
            src: "/Ads/ad-6.jpg",
            alt: "Collaboration and leadership preview",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Software engineering notes",
  description: `Notes on backend development, distributed systems, cloud operations, and AI-integrated platforms.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Software engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/Ads/ad-2.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-3.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
    {
      src: "/Ads/ad-4.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-5.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
    {
      src: "/Ads/ad-6.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
    {
      src: "/Ads/ad-7.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-8.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-9.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
