/**
 * HOWNIK.IN — FACTUAL PORTFOLIO REPOSITORY DATA
 * Howard Nikhil · Entrepreneur · Engineer · Technology Builder
 * All entries reflect authentic, verified engineering history.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Howard Nikhil",
    fullName: "J. Howard Nikhil",
    tagline: "Entrepreneur · Engineer · Technology Builder",
    centralStatement: "I build ideas into real products — from code to hardware, from CAD to fabrication.",
    location: "Tamil Nadu, India",
    email: "howardnikhil95@gmail.com",
    phone: "+91 7094149367",
    socials: {
      github: "https://github.com/howardnikhil",
      linkedin: "https://www.linkedin.com/in/howard-nikhil-b991a8269/",
      x: "https://x.com/HowNik28",
      youtube: "https://www.youtube.com/@howardnikhil",
      instagram: "https://www.instagram.com/howard_nikhil/"
    },
    education: [
      {
        institution: "PSG Institute of Technology and Applied Research, Coimbatore",
        degree: "Bachelor of Engineering — Electronics and Communication Engineering",
        period: "2024 — Present",
        details: "Undergraduate engineering focusing on embedded systems, RF communications, and physical computing."
      },
      {
        institution: "Valivalam Desikar Polytechnic College, Nagapattinam",
        degree: "Diploma in Electronics and Communication Engineering",
        period: "2021 — 2024",
        details: "Graduated with 87% aggregate. Led student innovation initiatives and hardware prototyping."
      },
      {
        institution: "St. Michael's Akademy, Karuvelankadai",
        degree: "Secondary School Leaving Certificate (SSLC)",
        period: "2020 — 2021",
        details: "Completed secondary education."
      },
      {
        institution: "Woodside School, Ooty",
        degree: "Primary & Secondary Schooling",
        period: "2011 — 2020",
        details: "Foundational schooling in the Nilgiris."
      }
    ]
  },

  primaryProjects: [
    {
      id: "aura-glasses",
      name: "AURA Glasses",
      category: "Wearable Electronics / Smart Glasses",
      status: "Hardware Prototype",
      badgeClass: "",
      description: "A wearable smart optical platform built from scratch across hardware and software. Integrates a compact prism display module, sensor fusion circuitry, and an award-winning ergonomic chassis.",
      highlights: "Winner: Autodesk Fusion 360 Mega Challenge · Best Student Innovator",
      technologies: ["Embedded C++", "Sensor Fusion", "Fusion 360", "BLE", "Wearable PCB"],
      image: "assets/images/aura-glasses.jpg",
      isSchematic: false,
      links: {
        demo: "#contact",
        demoText: "Inquire Specs"
      }
    },
    {
      id: "quadrox",
      name: "QuadroX Robotics",
      category: "Legged Robotics / Physical AI",
      status: "Robotics Platform",
      badgeClass: "",
      description: "A 4-legged autonomous quadruped platform developed for dynamic legged locomotion, balance algorithms, and physical AI experiments. Combines custom mechanical linkage with high-torque actuation.",
      highlights: "Autodesk Fusion 360 Mega Challenge Awarded Design",
      technologies: ["C++", "Kinematics", "Actuator Control", "Embedded RTOS", "CAD Design"],
      image: "assets/images/quadrox.jpg",
      isSchematic: false,
      links: {
        demo: "#experience",
        demoText: "Lab Details"
      }
    },
    {
      id: "uwb-rtls",
      name: "UWB Real-Time Location System",
      category: "Embedded Systems / RTLS",
      status: "Patent Pending",
      badgeClass: "",
      description: "An Ultra-Wideband (UWB) precision 3D indoor positioning system designed for sub-decimeter asset tracking in warehousing, industrial facilities, and robotics navigation environments.",
      highlights: "iTech Ideathon 2025 Spotlight Award Winner",
      technologies: ["UWB RF", "Decawave/Qorvo", "Trilateration", "STM32/ESP32", "Spatial Math"],
      image: "",
      isSchematic: true,
      schematicType: "uwb",
      links: {
        demo: "#contact",
        demoText: "Request Technical Brief"
      }
    },
    {
      id: "neuronrt",
      name: "HowNik NeuronRT",
      category: "Robotics Middleware",
      status: "Open Source",
      badgeClass: "project-badge-open",
      description: "A deterministic, low-overhead robotics middleware and runtime built from first principles as an alternative to ROS. Bridges real-time microcontrollers (UART/CAN/SPI) with Linux autonomy and edge AI.",
      highlights: "Custom .msgx binary wire protocol & lifecycle node architecture",
      technologies: ["C++", "Python", "Distributed Systems", "Binary Wire Protocol", "Linux Kernel"],
      image: "",
      isSchematic: true,
      schematicType: "neuronrt",
      links: {
        github: "https://github.com/howardnikhil",
        githubText: "View Architecture"
      }
    },
    {
      id: "deepfake-ai",
      name: "Deepfake Detection AI",
      category: "Artificial Intelligence / Computer Vision",
      status: "Trained Model",
      badgeClass: "",
      description: "A deep learning neural network designed to identify facial synthesis artifacts and temporal inconsistencies across digital video feeds, trained with 233,560 parameters.",
      highlights: "94.4% verification accuracy on benchmark deepfake datasets",
      technologies: ["Python", "PyTorch", "Computer Vision", "CNNs", "Edge Inference"],
      image: "",
      isSchematic: true,
      schematicType: "deepfake",
      links: {
        demo: "#contact",
        demoText: "View Research"
      }
    }
  ],

  secondaryProjects: [
    {
      id: "curio",
      name: "CURIO — Physical AI Robot",
      category: "Physical AI · Robotics · On-Device AI",
      status: "Active R&D",
      description: "Curiosity-Driven Physical AI Companion Robot designed to explore autonomous curiosity models, multimodal interaction, and embedded spatial behaviors.",
      technologies: ["Physical AI", "ROS/NeuronRT", "Embedded Linux", "Sensory Feedback"],
      links: {
        github: "https://github.com/howardnikhil/CURIO-Curiosity-Driven-Physical-AI-Companion-Robot"
      }
    },
    {
      id: "astralink",
      name: "AstraLink CubeSat Concept",
      category: "CubeSat / Space Technology",
      status: "Research Prototype",
      description: "Modular 100 × 100 × 100 mm (1U) small satellite architecture focusing on telemetry bus, power distribution management, and standardized scientific sensor payload integration.",
      technologies: ["CubeSat Systems", "Power Management", "Telemetry Bus", "Embedded RF"],
      links: {}
    },
    {
      id: "neuroflex",
      name: "NeuroFlex EMG Bionic Hand",
      category: "Assistive Bioelectronics",
      status: "PitchFest Winner",
      description: "Myoelectric bionic prosthetic hand leveraging surface EMG biosignals and adaptive edge classification for intuitive natural finger articulation.",
      technologies: ["EMG Bio-Sensors", "Edge AI", "Additive CAD", "Servo Kinematics"],
      image: "assets/images/bionic-arm.png",
      links: {}
    },
    {
      id: "robotic-arm",
      name: "6-Axis Manipulator (Mecazilla)",
      category: "Industrial Robotics",
      status: "Awarded CAD",
      description: "Precision 6-degree-of-freedom robotic manipulator designed in Autodesk Fusion 360 with harmonic joint constraints and inverse kinematics pathing.",
      technologies: ["Fusion 360", "Inverse Kinematics", "Harmonic Drives", "Motion Planning"],
      image: "assets/images/robotic-arm.jpg",
      links: {}
    },
    {
      id: "firstdayai",
      name: "FirstDayAI Platform",
      category: "AI Systems & Products",
      status: "Active Platform",
      description: "One-stop AI-powered career coaching architecture providing intelligent candidate evaluations, resume parsing, and personalized career roadmaps.",
      technologies: ["Agentic AI", "Full-Stack Web", "FastAPI", "Vector DB"],
      links: {
        external: "https://firstdayai.in"
      }
    },
    {
      id: "skipper-os",
      name: "HowNik Skipper OS",
      category: "Embedded Security Firmware",
      status: "Active Research",
      description: "Lightweight, developer-centric firmware platform engineered for hardware diagnostic tooling, sub-GHz transceiver control, and custom peripheral protocols.",
      technologies: ["C", "RTOS", "Sub-GHz RF", "Bare-Metal Firmware"],
      links: {}
    }
  ],

  experiences: {
    prominent: [
      {
        role: "Founder & CEO",
        company: "HowNik Technologies",
        period: "Jun 2025 — Present",
        type: "Engineering Venture",
        description: "My independent technology company and engineering venture where I build and experiment with advanced physical and digital systems.",
        bullets: [
          "Engineering modular CubeSat telemetry and payload communication prototypes.",
          "Architecting custom Agentic AI workflows and embedded middleware pipelines.",
          "Overseeing end-to-end product development from circuit schematics to physical fabrication."
        ],
        tags: ["Robotics", "CubeSat", "Agentic AI", "Embedded Hardware", "Product Development"]
      },
      {
        role: "Co-Founder & CTO",
        company: "Xtract AI Labs",
        period: "Jul 2025 — Present",
        type: "Product & AI",
        description: "Directing technical vision and architecture for FirstDayAI (firstdayai.in), an AI-driven career guidance and coaching platform.",
        bullets: [
          "Spearheading system architecture, backend scalability, and ML inference pipelines.",
          "Integrating LLM orchestration with evaluation algorithms for user mentoring.",
          "Translating complex user workflows into intuitive, resilient software services."
        ],
        tags: ["System Architecture", "AI Integration", "Product Engineering", "Full-Stack", "FastAPI"]
      },
      {
        role: "Founder & Robotics System Designer",
        company: "QuadroX Robotics",
        period: "Mar 2025 — Present",
        type: "Robotics Team / Lab",
        description: "Student-led robotics innovation team and personal lab exploring dynamic legged locomotion, control theory, and physical AI systems.",
        bullets: [
          "Designed 4-legged quadruped mechanical chassis and high-torque joint linkages in CAD.",
          "Developed embedded firmware for brushless motor drivers and inertial sensor feedback.",
          "Conducted balance and dynamic gait testing for semi-autonomous path traversal."
        ],
        tags: ["Legged Robotics", "Physical AI", "Motor Control", "Kinematics", "Fusion 360"]
      }
    ],
    secondary: [
      {
        role: "Entrepreneurship Club President",
        org: "PSG iTech",
        period: "Aug 2025 — Present",
        desc: "Fostered university entrepreneurship culture through hands-on technical workshops, founder roundtables, and student innovation mentorship."
      },
      {
        role: "Blockchain / Smart Contract Developer",
        org: "David Protocol & DeFi",
        period: "Feb 2025 — Jul 2025",
        desc: "Developed and reviewed Solidity smart contracts for decentralized lending, liquidity protocols, and staking mechanisms on Ethereum-compatible networks."
      },
      {
        role: "CAD & UI/UX Tutor",
        org: "G-Tec Education, Coimbatore",
        period: "Jun 2024 — Aug 2024",
        desc: "Instructed students in parametric 3D CAD modeling, Python, C++, and user interface ergonomics with project-driven engineering assignments."
      },
      {
        role: "President",
        org: "VDPC Student Innovation Club",
        period: "Oct 2022 — Apr 2024",
        desc: "Directed student engineering R&D teams, led hackathon preparation squads, and managed prototyping resources across electronics and CAD."
      },
      {
        role: "Railway Electronics Intern",
        org: "Golden Rock Workshop, Southern Railway",
        period: "Apr 2023 — Jun 2023",
        desc: "Hands-on exposure to industrial railway electronics, maintenance diagnostics, electrical safety compliance, and workshop manufacturing workflows."
      }
    ]
  },

  recognitions: [
    {
      id: "rec-student-innovator",
      title: "Best Student Innovator Award",
      org: "EDII-TN, Government of Tamil Nadu",
      period: "Nov 2023",
      badge: "State Award",
      desc: "Recognized among the Top 25 Best Innovative Ideas statewide at the Innovation and Entrepreneurship Development Programme (IEDP) Academic Hackathon.",
      image: "assets/images/cer-student-innovator.jpg"
    },
    {
      id: "rec-tnsi-grant",
      title: "₹3 Lakhs TNSI Seed Grant Finalist",
      org: "Tamil Nadu Student Innovators (TNSI) / EDII-TN",
      period: "Mar 2023",
      badge: "Grant & Merit",
      desc: "Selected for state-level final pitching for the flagship TNSI innovation support program representing HowNik Tech Systems.",
      image: "assets/images/cer-tnsi-pitch.jpg"
    },
    {
      id: "rec-fusion-360",
      title: "Autodesk Fusion 360 Mega Challenge",
      org: "Anna University CEAT, MIT Chennai",
      period: "Mar 2023",
      badge: "2nd Runner-Up",
      desc: "Awarded 2nd Runner-Up in the statewide CAD & mechanical design competition organized by the Centre for Excellence in Automobile Technology.",
      image: "assets/images/cer-fusion360-mega.jpg"
    },
    {
      id: "rec-pitchfest-2025",
      title: "PitchFest 2025 — 3rd Place with Cash Prize",
      org: "StartupTN (Sri Eshwar THIRAN 2025)",
      period: "Feb 2025",
      badge: "StartupTN Winner",
      desc: "Secured 3rd place with a cash prize for pitching the NeuroFlex assistive bioelectronics technology before startup investors and government officials.",
      image: "assets/images/cer-pitchfest-2025.jpg"
    },
    {
      id: "rec-itech-ideathon",
      title: "iTech Ideathon 2025 Spotlight Award",
      org: "PSG Institute of Technology & Launchpad",
      period: "May 2025",
      badge: "Best Innovation",
      desc: "Awarded the highest Spotlight Honor for demonstrating a working prototype of the UWB Driven Object Tracking System for indoor spaces.",
      image: "assets/images/cer-itech-ideathon.jpg"
    }
  ]
};
