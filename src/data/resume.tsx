import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Daeyan Siddiqui",
  initials: "DS",
  url: "https://www.linkedin.com/in/daeyan-siddiqui-4b76b61b9/",
  location: "Hyderabad, Pakistan",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Explore The Technology and World.",
  summary:
    "With a strong foundation in full-stack development, I specialize in technologies like Laravel, MERN, MEAN, Next.js, and TypeScript. As a full-stack developer, I have hands-on experience in building scalable and user-friendly applications, especially focusing on authentication systems, responsive designs, and structured backend integrations using MongoDB, Express, React, and Node.js.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Tailwind-CSS",
    "Bootstrap",
    "MERN",
    "MEAN",
    "Mongo-DB",
    "MySQL",
    "Postgres",
    "Docker",
    "Kubernetes",
    "PHP",
    "Laravel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "daeyansidi826@gmail.com",
    tel: "+92 3453531573",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/daeyansid",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daeyan-siddiqui-4b76b61b9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Upwork: {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~0102ff1107db3de566",
        icon: Icons.upwork,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Monitr Technology Pvt Ltd.",
      href: "",
      badges: [],
      location: "On-Site",
      title: "Chief Technology Officer",
      logoUrl: "/monitr.png",
      start: "May 2021",
      end: "Current",
      description:
        "As the Chief Technology Officer at Monitr Technology, I lead the technology strategy and oversee product development to ensure we deliver scalable and innovative solutions. My role involves coordinating cross-functional teams, setting technical standards, and managing the architecture for robust and secure platforms that meet our clients' evolving needs. I’m responsible for ensuring our tech stack aligns with the latest industry practices, with a focus on quality, performance, and security.",
    },
    {
      company: "Upwork",
      href: "",
      badges: ["Top Rated"],
      location: "Remote",
      title: "Software Engineer / Top Rated Freelancer",
      logoUrl: "/upwork.png",
      start: "March 2021",
      end: "Current",
      description:
        "As a Top Rated freelancer on Upwork, I provide full-stack development services to clients across diverse industries. I specialize in crafting high-quality web applications using the MERN stack, Laravel, and Next.js, with a focus on user experience, responsive design, and performance optimization. My work involves building custom solutions, managing project requirements, and delivering results that exceed client expectations, contributing to my Top Rated status on the platform.",
    },
    {
      company: "TheCentroid",
      href: "https://www.upwork.com/freelancers/~0102ff1107db3de566",
      badges: [],
      location: "Remote",
      title: "Sr PHP Developer",
      logoUrl: "",
      start: "2021",
      end: "2022",
      description:
        ""
    },
  ],
  education: [
    {
      school: "SZABIST Hyderabad Campus",
      href: "https://hyd.szabist.edu.pk/",
      degree: "Bachelor's Degree in Software Engineering",
      logoUrl: "/szabist.png",
      start: "2021",
      end: "2025 (expected)",
    },
    {
      school: "FG Degree College Cantt Hyderabad",
      href: "https://www.facebook.com/fgdchyderabad/",
      degree: "Pre-Engineering",
      logoUrl: "/fg.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "Ibn-e-sina High School,",
      href: "",
      degree: "Computer Science",
      logoUrl: "/ibn.png",
      start: "2007",
      end: "2017",
    }
  ],
  projects: [
    {
      title: "Election Slip Generator",
      dates: "March 2024 - March 2024",
      active: false,
      description:
        "A PHP-based application developed for generating election slips dynamically. This system allowed administrators to input voter data and print customized election slips efficiently, optimizing the process of preparing for elections.",
      technologies: [
        "PHP",
        "Javascript",
        "MySQL",
        "Bootstrap",
      ],
    },
    {
      title: "Realtime Computer Renting System",
      dates: "June 2023 - July 2023",
      active: false,
      description:
        "Built a real-time renting system that enables users to reserve computers instantly. The system tracks availability, generates rental invoices, and supports user authentication, enhancing user experience in computer rental management.",
      technologies: [
        "PHP",
        "Javascript",
        "AJAX",
        "MySQL",
        "SWAL",
        "JS LIBS",
        "Bootstrap",
      ],
    },
    {
      title: "Online Market Place For Civil Engineers (Custom-CRM)",
      dates: "Aug 2023 - Sep 2023",
      active: false,
      description:
        "Created a custom CRM tailored for civil engineers, providing an online marketplace for services and resources. Integrated features include project tracking, client management, and real-time data visualization using JS charts.",
      technologies: [
        "PHP",
        "Javascript",
        "AJAX",
        "MySQL",
        "SWAL",
        "JS LIBS",
        "Bootstrap",
        "JS Charts",
      ],
    },
    {
      title: "Online Freelance Marketplace (Upwork Clone)",
      dates: "Oct 2023 - Nov 2023",
      active: false,
      description:
        "Developed a freelance marketplace platform inspired by Upwork, allowing clients to post jobs and freelancers to apply. Key features include project listings, proposal submissions, user authentication, and dashboard analytics with interactive charts.",
      technologies: [
        "PHP",
        "Javascript",
        "AJAX",
        "MySQL",
        "SWAL",
        "JS LIBS",
        "Bootstrap",
        "JS Charts",
      ],
    },
    {
      title: "Online Exam Application With AI Proctoring",
      dates: "Aug 2022 - Dec 2022",
      active: false,
      description:
        "A secure online examination platform with integrated AI proctoring to detect unusual behavior and ensure academic integrity. Utilized OpenCV for real-time monitoring and analysis, providing a reliable remote examination environment.",
      technologies: [
        "PHP",
        "Javascript",
        "AJAX",
        "MySQL",
        "Open CV",
        "Bootstrap",
        "jupyter",
      ],
    },
    {
      title: "School Management System (ERP)",
      dates: "Aug 2022 - Current",
      active: true,
      description:
        "A comprehensive ERP solution for schools, managing student records, attendance, scheduling, and grades. The system includes real-time reporting, interactive charts for performance analysis, and extensive administrative controls, providing a centralized platform for school operations.",
      technologies: [
        "PHP",
        "Javascript",
        "AJAX",
        "MySQL",
        "SWAL",
        "JS LIBS",
        "Bootstrap",
        "JS Charts",
      ],
    },
  ],
  certificates: [
    {
      title: "MERN Stack",
      dates: "2023",
      location: "META",
      description:
        "Completed a comprehensive MERN stack development course, covering MongoDB, Express.js, React.js, and Node.js, with a focus on building full-stack applications and optimizing for scalability.",
      image: "/meta.png",
    },
    {
      title: "Oracle ERP",
      dates: "2021",
      location: "NAVTTC",
      description:
        "Gained hands-on experience in Oracle ERP, focusing on financial management and operations, and learned to navigate the ERP platform to streamline business processes.",
      image: "/nav.png",
    },
    {
      title: "Laravel Development",
      dates: "2022",
      location: "Udemy",
      description:
        "Acquired in-depth knowledge of the Laravel PHP framework, including Eloquent ORM, routing, middleware, and RESTful APIs, allowing for efficient backend development in PHP.",
      image: "/Udemy.png",
    },
    {
      title: "Git and GitHub",
      dates: "2023",
      location: "META",
      description:
        "Developed expertise in Git version control and GitHub collaboration, learning branching, merging, pull requests, and managing repositories for team-based software projects.",
      image: "/meta.png",
    },
    {
      title: "Jr Pentester",
      dates: "2023",
      location: "tryhackme",
      description:
        "Achieved junior pentester certification, focusing on cybersecurity fundamentals, network vulnerabilities, ethical hacking, and basic penetration testing using various tools and methods.",
      image: "/tryhackme.png",
    },
  ],
  Awards: [
    {
      title: "Web Developer Of The Year 2023",
      dates: "2023",
      location: "Szabist University Hyd Campus",
      description:
        "Awarded for outstanding contributions and performance in web development, demonstrating technical skills, creativity, and commitment to excellence in project execution.",
      image: "/szabist.png",
    },
    {
      title: "Code Craft Winner (Competitive Coding)",
      dates: "2023",
      location: "Szabist University Hyd Campus",
      description:
        "Secured first place in a university-wide coding competition, showcasing problem-solving abilities, coding efficiency, and quick adaptation to complex challenges.",
      image: "/szabist.png",
    },
    {
      title: "Project Exhibition Runner-up (Python-Based Applications)",
      dates: "2023",
      location: "Szabist University Hyd Campus",
      description:
        "Achieved runner-up position in a project exhibition, presenting a Python-based application with a focus on innovation and functionality, gaining recognition for project design and impact.",
      image: "/szabist.png",
    },
    {
      title: "Code Craft Runner-Up (Competitive Coding)",
      dates: "2022",
      location: "Szabist University Hyd Campus",
      description:
        "Finished as runner-up in the competitive coding event, demonstrating strong programming skills, teamwork, and efficient problem-solving techniques in a high-pressure environment.",
      image: "/szabist.png",
    },
  ],
} as const;
