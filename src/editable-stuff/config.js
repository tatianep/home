// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Tatiane",
  middleName: "",
  lastName: "Santos, PhD",
  message: " Researcher | Data Scientist | AI Engineer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/tatianep",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tatiane-pereira-dos-santos/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/SantosTatianeP",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/tatianesantos3.jpg"),
  imageSize: 375,
  message:
    "My name is Tatiane Santos. I'm a Physics PhD and Data Scientist on the Artificial Intelligence team at a US Fortune 50 company. I am passionate about making an impact in society, and my goal is to develop my skill set so I'm ready when opportunities arise! In my free time, I enjoy playing Brazilian classical acoustic guitar music and learning new languages. I also like working on small to medium data projects, which you can learn more about here.",
  resume: "https://docs.google.com/document/d/1mm9zCV_uMFJPMB-KjE_pwG0j2_o92bBrCG4HQh0WoO8/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "tatianep", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
// const leadership = {
//   show: true,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     {
//       img: require("../editable-stuff/tatianesantos2.JPG"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     {
//       img: require("../editable-stuff/tatianesantos2.JPG"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"615"
//   }
// };

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python/SQL", value: 90 },
    { name: "Machine Learning", value: 75 },
    { name: "Artificial Intelligence/Geerative AI/LLMs", value: 85 },
    { name: "Parallel Programming", value: 75 },
    { name: "JavaScript/React/CSS", value: 45 },
    { name: "Business Forecasting", value: 80 },
    { name: "Statistical Analysis", value: 95 },
    { name: "Microsoft Azure", value: 65 },
  ],
  softSkills: [
    { name: "Communication of Technical Content", value: 95 },
    { name: "Team Collaboration", value: 100 },
    { name: "Time Management", value: 85 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Emotional Intelligence", value: 90 },
    { name: "Analytical Thinking", value: 90 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "tatianepereiradossantos@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Scientist - AI Engineer',// Here Add Company Name
      companylogo: require('../assets/img/ADM.png'),
      date: 'October 2022 – Present',
      companyName: 'ADM',
      companyUrl: 'https://www.adm.com/en-us/about-adm/our-company/'
    },
    {
      role: 'Data Scientist',
      companylogo: require('../assets/img/Wildlife.png'),
      date: 'December 2021 – October 2022',
      companyName: 'Wildlife Studios',
      companyUrl: 'https://wildlifestudios.com/'

    },
    {
      role: 'Reseacher',
      companylogo: require('../assets/img/Illinois.png'),
      date: 'January 2019 – November 2021',
      companyName: 'University of Illinois at Urbana-Champaign',
      companyUrl: 'https://illinois.edu/'
    },
    {
      role: 'Reseacher',
      companylogo: require('../assets/img/CEA.png'),
      date: '2017',
      companyName: 'French Alternative Energies and Atomic Energy Commission',
      companyUrl: 'https://www.cea.fr'
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
  {
    school: 'Fluminense Federal University',
    degree: 'Ph.D.',
    field: 'Condensed Matter Physics',
    date: '2014 - 2018',
    schoolLogo: require('../assets/img/UFF.png'),
    schoolUrl: 'https://www.uff.br/'
  },
  {
    school: 'ABC Federal University',
    degree: 'M.Sc., B.Sc. and B.Eng.',
    field: 'Physics',
    date: '2008 - 2014',
    schoolLogo: require('../assets/img/UFABC2.png'),
    schoolUrl: 'https://www.ufabc.edu.br/'
  }
  ]
}

// Blog SECTION
const blog = {
  show: true
};

// Publications SECTION
const publications = {
  show: true,
  publications: [
    {
      title: "Electron dynamics in extended systems within real-time time-dependent density-functional-theory",
      description: "Due to a beneficial balance of computational cost and accuracy, real-time time-dependent density-functional theory has emerged as a promising first-principles framework to describe electron real-time dynamics. Here we discuss recent implementations around this approach, in particular in the context of complex, extended systems. Results include an analysis of the computational cost associated with numerical propagation and when using absorbing boundary conditions. We extensively explore the shortcomings for describing electron–electron scattering in real time and compare to many-body perturbation theory. Modern improvements of the description of exchange and correlation are reviewed. In this work, we specifically focus on the Qb@ll code, which we have mainly used for these types of simulations over the last years, and we conclude by pointing to further progress needed going forward.",
      authors: "Alina Kononov, Cheng-Wei Lee, Tatiane Pereira dos Santos, Brian Robinson, Yifan Yao, Yi Yao, Xavier Andrade, Andrew David Baczewski, Emil Constantinescu, Alfredo A. Correa, Yosuke Kanai, Normand Modine & André Schleife",
      link: "https://link.springer.com/article/10.1557/s43579-022-00273-7",
      link_title: "MRS communications, 2022. Springer"
    },
    {
      title: "The 2021 ultrafast spectroscopic probes of condensed matter roadmap",
      description: "In the 60 years since the invention of the laser, the scientific community has developed numerous fields of research based on these bright, coherent light sources, including the areas of imaging, spectroscopy, materials processing and communications. Ultrafast spectroscopy and imaging techniques are at the forefront of research into the light–matter interaction at the shortest times accessible to experiments, ranging from a few attoseconds to nanoseconds. Light pulses provide a crucial probe of the dynamical motion of charges, spins, and atoms on picosecond, femtosecond, and down to attosecond timescales, none of which are accessible even with the fastest electronic devices. Furthermore, strong light pulses can drive materials into unusual phases, with exotic properties. In this roadmap we describe the current state-of-the-art in experimental and theoretical studies of condensed matter using ultrafast probes. In each contribution, the authors also use their extensive knowledge to highlight challenges and predict future trends.",
      authors: "J Lloyd-Hughes, P M Oppeneer, T Pereira dos Santos, A Schleife, S Meng, M A Sentef, M Ruggenthaler, A Rubio, I Radu, M Murnane, X Shi, H Kapteyn, B Stadtmüller, K M Dani, F H da Jornada, E Prinz, M Aeschlimann, R L Milot, M Burdanova, J Boland, T Cocker and F Hegmann",
      link: "https://iopscience.iop.org/article/10.1088/1361-648X/abfe21",
      link_title: "Journal of Physics: Condensed Matter, 2021. IOP Publishing"
    },
    {
      title: "Deep Learning Enabled Strain Mapping of Single-Atom Defects in Two-Dimensional Transition Metal Dichalcogenides with Sub-Picometer Precision",
      description: "Two-dimensional (2D) materials offer an ideal platform to study the strain fields induced by individual atomic defects, yet challenges associated with radiation damage have so far limited electron microscopy methods to probe these atomic-scale strain fields. Here, we demonstrate an approach to probe single-atom defects with sub-picometer precision in a monolayer 2D transition metal dichalcogenide, WSe2–2xTe2x. We utilize deep learning to mine large data sets of aberration-corrected scanning transmission electron microscopy images to locate and classify point defects. By combining hundreds of images of nominally identical defects, we generate high signal-to-noise class averages which allow us to measure 2D atomic spacings with up to 0.2 pm precision. Our methods reveal that Se vacancies introduce complex, oscillating strain fields in the WSe2–2xTe2x lattice that correspond to alternating rings of lattice expansion and contraction. These results indicate the potential impact of computer vision for the development of high-precision electron microscopy methods for beam-sensitive materials.",
      authors: "Chia-Hao Lee, Abid Khan, Di Luo, Tatiane P. Santos, Chuqiao Shi, Blanka E. Janicek, Sangmin Kang, Wenjuan Zhu, Nahil A. Sobh, André Schleife, Bryan K. Clark, and Pinshane Y. Huang",
      link: "https://pubs.acs.org/doi/10.1021/acs.nanolett.0c00269",
      link_title: "Nano Letters, 2020. ACS Publications"
    },
    {
      title: "An order N numerical method to efficiently calculate the transport properties of large systems: An algorithm optimized for sparse linear solvers",
      description: "We present a self-contained description of the wave-function matching (WFM) method to calculate electronic quantum transport properties of nanostructures using the Landauer-Büttiker approach. The method is based on a partition of the system between a central region (“conductor”) containing sites and an asymptotic region (“leads”) characterized by open channels. The two subsystems are linearly coupled and solved simultaneously using an efficient sparse linear solver. Invoking the sparsity of the Hamiltonian matrix representation of the central region, we show that the number of operations required by the WFM method in conductance calculations scales linearly with the number of sites, faster than previously claimed.",
      link: "https://doi.org/10.1016/j.jcp.2019.05.034",
      link_title: "Journal of Computational Physics, 2019. Elsevier"
    }
    // Add more publications as needed
  ]
};

// Awards SECTION
const awards = {
  show: true,
  awards: [
    {
      title: "Best graduate poster award",
      place: "1st Place",
      institution: "Universidade Federal Fluminense, Brazil - 2018"
    },
    {
      title: "CAPES Exchange Program Scholarship",
      place: "1st Place",
      institution: "Brazilian Federal Agency of Graduate Education, Brazil - 2017"
    },
    {
      title: "“FAPERJ Grade 10” Scholarship",
      place: "1st Place",
      institution: "Carlos Chagas Filho Foundation for Research Support of the State of Rio de Janeiro, Brazil - 2016"
    },
    {
      title: "Approved with distinction in Ph.D. Qualification Exam",
      place: "1st Place",
      institution: "Universidade Federal Fluminense, Brazil - 2015"
    }
    // Add more awards as needed
  ]
};

export { navBar, mainBody, about, repos, skills, publications, awards, getInTouch, experiences, education};

// export { navBar, mainBody, about, repos, skills, leadership, blog, getInTouch, experiences};
