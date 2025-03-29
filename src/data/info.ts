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
    // education: [
    //   {
    //     title: "Self-Taught Developer Extraordinaire",
    //     date: "2000 - Present",
    //     location: "Springfield Elementary School of Hard Knocks",
    //     gpa: "4.0 (A+ in Pranks)",
    //     thesis: "The Art of Subverting Expectations: A Practical Guide",
    //   },
    // ],
    // experience: [
    //   {
    //     title: "Frontend Developer",
    //     date: "2015 - Present",
    //     location: "Krusty Burger Web Dev",
    //     description:
    //       "Crafted interactive web experiences using React and Redux. Often multitasked between coding and avoiding Principal Skinner.",
    //   },
    //   {
    //     title: "Backend Bandit",
    //     date: "2013 - 2015",
    //     location: "Comic Book Guy's Software Emporium",
    //     description:
    //       "Masterminded backend solutions using Node.js and MongoDB. Surprisingly good at debugging, considering my history of causing bugs.",
    //   },
    //   {
    //     title: "Junior Hacker",
    //     date: "2010 - 2013",
    //     location: "Springfield Elementary Cyber Club",
    //     description:
    //       "Pioneered early web exploits, leading the club in daring coding escapades. Was disciplined for hacking the school's grading system.",
    //   },
    // ],

    // skills: ["JavaScript", "React", "Node.js", "MongoDB", "Prank Mastery"],
  },

  projects: [
    {
      title: "Autoemulate",
      description:
        "ML Python package for creating fast, accurate emulators of complex simulations.",
      link: "https://www.autoemulate.com/",
      github_link: "https://github.com/alan-turing-institute/autoemulate",
      tech: ["Python", "Pytorch", "Astro.js"],
      img_alt: "Autoemulate",
      img_path: "/autoemulate.png",
    },
    {
      title: "Seshat Global History Databank",
      description:
        "Interactive maps for historical borders across time; enabling research into the evolution of human societies.",
      link: "https://seshat-db.com/core/world_map",
      github_link: "https://github.com/orgs/Seshat-Global-History-Databank/repositories",
      tech: ["Django", "Python", "PostgreSQL", "Leaflet.js", "REST API"],
      img_alt: "Seshat Global History Databank",
      img_path: "seshat.png",
    },
    {
      title: "Data Safe Haven",
      description:
        "Infrastructure-as-code tools for Trusted Research Environments, enabling researchers to work with sensitive data.",
      link: "https://data-safe-haven.readthedocs.io/",
      github_link: "https://github.com/alan-turing-institute/data-safe-haven",
      tech: ["Pulumi", "Powershell", "Azure", "Docker"],
      img_alt: "Data Safe Haven",
      img_path: "dsh.png",
    },
    {
      title: "Scivision",
      description:
        "A software ecosystem of interoperable tools and utilities for working with computer vision models and data.",
      link: "https://sci.vision/",
      github_link: "https://github.com/alan-turing-institute/scivision",
      tech: ["Python", "React.js", "JavaScript"],
      img_alt: "Scivision",
      img_path: "scivision.png",
    },
    {
      title: "Colouring Britain",
      description:
        "A software ecosystem of interoperable tools and utilities for working with computer vision models and data.",
      link: "https://colouringbritain.org/",
      github_link: "https://github.com/colouring-cities/colouring-core",
      tech: ["TypeScript", "React.js", "JavaScript"],
      img_alt: "Colouring Britain",
      img_path: "colouring_britain.png",
    },
    {
      title: "Solar Panel Detection (Turing Climate Action Call)",
      description:
        "Code for data wrangling to combine a number of geospatial data sources and determine the solar panel assets across the UK.",
      link: "https://www.turing.ac.uk/research/research-projects/solar-nowcasting-machine-vision",
      github_link: "https://github.com/alan-turing-institute/solar-panel-detection",
      tech: ["Python", "Jupyter", "PostgreSQL"],
      img_alt: "",
      img_path: "",
    },
    {
      title: "CHANCE Water Distribution Network Web App",
      description:
        "A web app to visualise the spread of pollution through water networks.",
      link: "https://github.com/alan-turing-institute/chance-water-distribution",
      github_link: "https://github.com/alan-turing-institute/chance-water-distribution",
      tech: ["Bokeh", "Python", "Jupyter", "Docker"],
      img_alt: "",
      img_path: "",
    },
    {
      title: "ReadabiliPy",
      description:
        "ReadabiliPy contains a Python wrapper for Mozilla's Readability.js Node.js package, as well as article extraction routines written in pure Python.",
      link: "https://github.com/alan-turing-institute/ReadabiliPy",
      github_link: "https://github.com/alan-turing-institute/ReadabiliPy",
      tech: ["Python", "HTML"],
      img_alt: "",
      img_path: "",
    },
    {
      title: "WAYS: What Aren't You Seeing",
      description:
        "Enhancing everyday visualisation practice through generative and evaluative design tools for data scientists.",
      link: "https://github.com/WarwickCIM/ways-py",
      github_link: "https://github.com/WarwickCIM/ways-py",
      tech: ["Python", "Jupyter"],
      img_alt: "",
      img_path: "",
    },
    {
      title: "The Sainsbury Lab: Bioinformatics internship project",
      description:
        "Genetic algorithm to locate phenotype-causing SNPs in backcrossed mutagenized plant genomes via choosing the correct permutation of unordered sequence contigs.",
      link: "https://github.com/edwardchalstrey1/fragmented_genome_with_snps",
      github_link: "https://github.com/edwardchalstrey1/fragmented_genome_with_snps",
      tech: ["Ruby", "R"],
      img_alt: "",
      img_path: "",
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
      published_in: "Nature: Scientific Data",
      title: "A harmonised, high-coverage, open dataset of solar photovoltaic installations in the UK",
      date: "2020",
      link: "https://www.nature.com/articles/s41597-020-00739-0",
    },
    {
      published_in: "The Alan Turing Institute Blog",
      title: "Using generative AI to write code: a guide for researchers",
      date: "2024",
      link: "https://www.turing.ac.uk/blog/using-generative-ai-write-code-guide-researchers",
    },
    {
      published_in: "PLOS Computational Biology",
      title: "Ten simple rules for working with other people's code",
      date: "2023",
      link: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011031",
    },
    {
      published_in: "SATRE Website",
      title: "SATRE - a Standard Architecture for Trusted Research Environments (TREs)",
      date: "2023",
      link: "https://satre-specification.readthedocs.io/",
    },
    {
      published_in: "arxiv: Computer Science > Cryptography and Security",
      title: "Digital identity architectures: comparing goals and vulnerabilities",
      date: "2023",
      link: "https://arxiv.org/abs/2302.09988",
    },
    {
      published_in: "The Alan Turing Institute Blog",
      title: "Openness in the digital identity context",
      date: "2021",
      link: "https://www.turing.ac.uk/programme/openness-digital-identity-context",
    },
    {
      published_in: "Birkbeck, University of London, MSc Thesis",
      title: "Open Targets Platform: Multi-Target Search. A tool for the prediction of drug efficacy based on pharmacological targets.",
      date: "2019",
      link: "masters_thesis.pdf",
    },
  ],

  contact: {
    email: "edwardchalstrey@gmail.com",
    linkedin: "https://www.linkedin.com/in/edchalstrey/",
    github: "https://github.com/edwardchalstrey1",
    twitter: "https://x.com/EChalstrey",
  },
};
