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
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
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
  imageLink: require("../editable-stuff/tatianesantos.jpg"),
  imageSize: 375,
  message:
    "My name is Tatiane Santos. I’m a Physics PhD and Data Scientist for the Artificial Intelligence team in a US Fortune 50 company. I'm most passionate about having an impact in society, and my goal is to pursue this passion through data. In my free time I like playing Brazilian classical acoustic guitar music and learning new languages. I also enjoy small tech/data projects, you can find out more about them here",
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
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/tatianesantos2.JPG"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/tatianesantos2.JPG"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"615"
  }
};

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
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Emotional Intelligence", value: 95 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
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
      companylogo: require('../assets/img/ADM2.png'),
      date: 'October 2022 – Present',
    },
    {
      role: 'Data Scientist',
      companylogo: require('../assets/img/Wildlife2.png'),
      date: 'December 2021 – October 2022',
    },
    {
      role: 'Reseacher',
      companylogo: require('../assets/img/Illinois2.png'),
      date: 'January 2019 – November 2021',
    },
    {
      role: 'Reseacher',
      companylogo: require('../assets/img/CEA2.png'),
      date: '2017',
    },
  ]
}

// Blog SECTION
const blog = {
  show: true
};

export { navBar, mainBody, about, repos, skills, leadership, blog, getInTouch, experiences};
