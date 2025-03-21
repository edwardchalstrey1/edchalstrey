export const info = {
  name: "Ed Chalstrey",
  brief_description:
    "Developer and research scientist.",
  role: "Research Data Scientist",
  picture: "/pic.png",
  picture_alt: "Bart Simpson",
  location: "London, UK",
  cv: "/resume.pdf",

  about: {
    description: `I'm a developer with a background in academic research, currently employed at The Alan Turing Institute in London. My career has spanned a variety of research disciplines and has given me a broad technical skillset in data science and software engineering. I'm passionate about using technology to solve complex problems and make a positive impact on society. On my website, you can find links to my software repositories, notebooks, publications and blogs, as well as episode links for The Turing Podcast which I co-host.`,
    education: [
      {
        title: "Self-Taught Developer Extraordinaire",
        date: "2000 - Present",
        location: "Springfield Elementary School of Hard Knocks",
        gpa: "4.0 (A+ in Pranks)",
        thesis: "The Art of Subverting Expectations: A Practical Guide",
      },
    ],
    experience: [
      {
        title: "Frontend Developer",
        date: "2015 - Present",
        location: "Krusty Burger Web Dev",
        description:
          "Crafted interactive web experiences using React and Redux. Often multitasked between coding and avoiding Principal Skinner.",
      },
      {
        title: "Backend Bandit",
        date: "2013 - 2015",
        location: "Comic Book Guy's Software Emporium",
        description:
          "Masterminded backend solutions using Node.js and MongoDB. Surprisingly good at debugging, considering my history of causing bugs.",
      },
      {
        title: "Junior Hacker",
        date: "2010 - 2013",
        location: "Springfield Elementary Cyber Club",
        description:
          "Pioneered early web exploits, leading the club in daring coding escapades. Was disciplined for hacking the school's grading system.",
      },
    ],

    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Prank Mastery"], // not used yet
  },

  projects: [
    {
      title: "Autoemulate",
      description:
        "ML Python package for creating fast, accurate emulators of complex simulations.",
      link: "https://www.autoemulate.com/",
      tech: ["Python", "Pytorch", "Astro.js"],
      img_alt: "Autoemulate",
      img_path: "/autoemulate.png",
    },
    {
      title: "Seshat Global History Databank",
      description:
        "Interactive maps for historical borders across time; enabling research into the evolution of human societies.",
      link: "https://seshat-db.com/core/world_map",
      tech: ["Django", "Python", "PostgreSQL", "Leaflet.js"],
      img_alt: "Seshat Global History Databank",
      img_path: "seshat.png",
    },
    {
      title: "Data Safe Haven",
      description:
        "Infrastructure-as-code tools for Trusted Research Environments, enabling researchers to work with sensitive data.",
      link: "https://data-safe-haven.readthedocs.io/",
      tech: ["Pulumi", "Powershell", "Azure", "Docker"],
      img_alt: "Data Safe Haven",
      img_path: "dsh.png",
    },
  ],

  publications: [
    {
      published_in: "Nature: Scientific Data",
      title: "Cliopatria - A geospatial database of world-wide political entities from 3400BCE to 2024CE",
      date: "2025",
      link: "https://www.nature.com/articles/s41597-025-04516-9",
    },
    {
      title: "SATRE - a Standard Architecture for Trusted Research Environments (TREs)",
      date: "2023",
      link: "https://satre-specification.readthedocs.io/",
    },
  ],

  contact: {
    email: "bart@thesimpsons.com",
    linkedin: "https://www.linkedin.com/in/bartsimpsonfake",
    github: "https://www.github.com/gio-del",
    twitter: "https://www.twitter.com/bartsimpsonfake",
  },
};
