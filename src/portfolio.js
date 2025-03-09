/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tarun Chikatipalli",
  title: "Hi all, I'm Tarun",
  subTitle: emoji(
    "A Bioinformatician 🚀 skilled in RNA-seq, molecular docking, and AI-driven modeling, automating pipelines and integrating multi-omics data for biomedical research."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TarunChikatipalli1",
  linkedin: "https://www.linkedin.com/in/chikatipalli-tarun/",
  gmail: "tarunchikatipalli1@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "BIOINFORMATICIAN AND DATA SCIENTIST EXPLORING BIOLOGICAL AND COMPUTATIONAL SOLUTIONS",

  skills: [
    emoji(
      "⚡ Expertise in RNA-seq analysis, molecular docking, and machine learning-driven predictive modeling."
    ),
    emoji(
      "⚡ Proficient in automating bioinformatics pipelines and integrating multi-omics data."
    ),
    emoji(
      "⚡ Skilled in applying AI for drug discovery and transforming complex biological data into insights."
    )
  ],

  // List of Technical Skills
  softwareSkills: [
    {skillName: "Single Cell RNA-seq "},
    {skillName: "Bulk RNA-seq "},
    {skillName: "NEXTFLOW"},
    {skillName: "PYTHON"},
    {skillName: "BASH"},
    {skillName: "R"},
    {skillName: "AWS"},
    {skillName: "MACHINE LEARNING"},
    {skillName: "HPC"},
    {skillName: "SHINY(R)"},
    {skillName: "STREAMLIT"},
    {skillName: "RDKIT"},
    {skillName: "DOCKER"}
  ],

  display: true // Set false to hide this section
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.png"), // Add logo to assets/images if available
      subHeader: "Master of Science in Bioinformatics",
      duration: "September 2023 – December 2025"
    },
    {
      schoolName: "Loyola Academy Degree and PG College",
      logo: require("./assets/images/loyolalogo.png"),
      subHeader: "Bachelor of Science in Biotechnology",
      duration: "June 2020 - July 2023"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Bioinformatics & NGS Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming (Python, R, Nextflow)",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern",
      company: "Ciencia Labs",
      companylogo: require("./assets/images/labLogo.png"),
      date: "January 2023 – June 2023",
      desc: "Investigated TMPRSS4, a cancer-associated gene, to identify potential small molecule inhibitors for targeted therapy.",
      descBullets: [
        "Conducted molecular docking and virtual screening of 10,000 ligands to identify potential TMPRSS4 inhibitors for cancer therapy",
        "Analyzed ligand interactions, validated top candidates, and assessed structural quality for drug development"
      ]
    },
    {
      role: "Fitness Consultant",
      company: "Northeastern University",
      companylogo: require("./assets/images/northeasternLogo.png"),
      date: "January 2025 – Present",
      descBullets: [
        "Enforced policies and safety guidelines across multiple facilities, ensuring compliance for 1,000+ patrons and 100+ employees daily.",
        "Served as the first responder in 50+ emergency situations, prioritizing patron safety and delivering prompt assistance."
      ]
    }
  ]
};

// Open Source Section - Enabled
const openSource = {
  githubUserName: "TarunChikatipalli1", // ✅ Replace with your GitHub username
  githubConvertedToken: process.env.GITHUB_TOKEN, // ✅ Replace with your GitHub token
  showGithubProfile: "true", // Show Contact profile using GitHub
  display: true // Set true to show Open Source Projects
};

// Projects Section
const projects = {
  title: "Projects",
  subtitle: "Some of the bioinformatics and AI-driven tools I've built",
  projects: [
    {
      projectName: "Interactive scRNA-seq Analysis Dashboard",
      projectDesc:
        "A Shiny app for real-time visualization and analysis of single-cell RNA sequencing (scRNA-seq) data.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/Interactive-scRNA-seq-Analysis-Dashboard"
        },
        {
          name: "Live Demo",
          url: "http://127.0.0.1:5646/"
        }
      ]
    },
    {
      projectName: "Glioma Classification & Predictive Modeling",
      projectDesc:
        "Machine learning-based classification of Glioma subtypes for precision oncology.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/Glioma-Classification-and-Predictive-Modeling"
        }
      ]
    },
    {
      projectName: "RNA-Seq Pipeline for Differential Expression",
      projectDesc:
        "An automated Bash-based RNA-seq analysis pipeline for DEG analysis.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/RNA-Seq-Pipeline-for-Differential-Gene-Expression-Bash"
        }
      ]
    },
    {
      projectName: "Bioactivity Prediction Web App",
      projectDesc:
        "A Streamlit-based web application for real-time prediction of drug bioactivity.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/Bioactivity-Prediction-Web-App"
        }
      ]
    }
  ],
  display: true // ✅ Set to true to enable this section
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the bioinformatics and AI-driven tools I've built",
  projects: [
    {
      projectName: "Interactive scRNA-seq Analysis Dashboard",
      projectDesc:
        "A Shiny app for real-time visualization and analysis of single-cell RNA sequencing (scRNA-seq) data.",
      image: require("./assets/images/project1.png"), // ✅ Add project image
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/Interactive-scRNA-seq-Analysis-Dashboard"
        },
        {
          name: "Visit Website",
          url: "http://127.0.0.1:5646/"
        }
      ]
    },
    {
      projectName: "Glioma Classification & Predictive Modeling",
      projectDesc:
        "Machine learning-based classification of Glioma subtypes for precision oncology.",
      image: require("./assets/images/project2.png"), // ✅ Add project image
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/Glioma-Classification-and-Predictive-Modeling"
        }
      ]
    },
    {
      projectName: "RNA-Seq Pipeline for Differential Expression",
      projectDesc:
        "An automated Bash-based RNA-seq analysis pipeline for DEG analysis.",
      image: require("./assets/images/project3.png"), // ✅ Add project image
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/RNA-Seq-Pipeline-for-Differential-Gene-Expression-Bash"
        }
      ]
    },
    {
      projectName: "Bioactivity Prediction Web App",
      projectDesc:
        "A Streamlit-based web application for real-time prediction of drug bioactivity.",
      image: require("./assets/images/project4.png"), // ✅ Add project image
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TarunChikatipalli1/Bioactivity-Prediction-Web-App"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, collaboration, or just say hi! My inbox is open for all.",
  email_address: "tarunchikatipalli1@gmail.com",
  display: true // Ensure this exists
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
