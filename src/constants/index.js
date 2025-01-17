import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.svg";
import javascript from "../assets/icons/javascript.svg";
import java from "../assets/icons/java.png";
import c1 from "../assets/icons/c1.png";
import python from "../assets/icons/python.jpeg";
import cpp1 from "../assets/icons/cpp1.png";
import matlab from "../assets/icons/matlab.jpeg";
import dsa from "../assets/icons/dsa.png";
import dbms from "../assets/icons/dbms.png";
import food from "../assets/icons/foodapp.png";
import movie from "../assets/icons/movie.png";
import rea from "../assets/icons/rea.png";
import rn from "../assets/icons/rn.png";
import mysql from "../assets/icons/mysql.png";
import mongo from "../assets/icons/mongo.png";
import bot from "../assets/icons/bot.png";
import bus from "../assets/icons/bus-school.png";
import protect from "../assets/icons/protect.png";
import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  estate,
  express,
  git,
  github,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Language",
  },
  {
    imageUrl: c1,
    name: "C",
    type: "Language",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
  {
    imageUrl: cpp1,
    name: "C++",
    type: "Language",
  },
  {
    imageUrl: matlab,
    name: "MatLab",
    type: "Backend",
  },
  {
    imageUrl: dsa,
    name: "DSA",
    type: "Frontend",
  },
  {
    imageUrl: mysql,
    name: "DBMS",
    type: "Database",
  },{
    imageUrl: rea,
    name: "REACT",
    type: "FrameWork",
  },
  {
    imageUrl: rn,
    name: "REACTNATIVE",
    type: "FrameWork",
  },
  {
    imageUrl: mongo,
    name: "MONGODB",
    type: "Database",
  },
  {
    imageUrl: rea,
    name: "REACT",
    type: "FrameWork",
  },
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: food,
    theme: "btn-back-red",
    name: "QuickBite",
    description:
      "Designed a mobile food ordering platform enabling users to explore restaurants, filter by price, place orders, and view routes on a map.",
    link: "https://github.com/GayathriVijaya/QuickBite",
  },
  {
    iconUrl: bot,
    theme: "btn-back-green",
    name: "Chat For Change",
    description:
      "An AI-powered chatbot developed to provide mental health support through real-time, interactive conversations. Using Python, Flask, and TensorFlow, the chatbot is designed to assist users by analyzing their queries and sentiment effectively.",
    link: "https://github.com/GayathriVijaya/MentalHealthAI",
  },
//   {
//     iconUrl: movie,
//     theme: "btn-back-blue",
//     name: "Movie Ticket Booking Clone",
//     description:
//       "Built a complete clone of a movie ticket booking app, allowing users to optimize searches through locations, easily find movie theaters, and book both tickets and food seamlessly.",
//     link: "",
//   },
  {
    iconUrl: protect,
    theme: "btn-back-blue",
    name: "preserveIT",
    description:
      "A mobile application designed for real-time reporting and addressing issues related to the preservation of cultural heritage. Built using React Native, Node.js, and MongoDB, the app enables users to submit alerts about heritage sites directly from their mobile devices, allowing administrators to receive and act on these reports efficiently.",
    link: "https://github.com/GayathriVijaya/PreservIT",
  },
  {
    iconUrl: bus,
    theme: "btn-back-pink",
    name: "Urban Transit Management System",
    description: "Designed is a comprehensive platform designed to streamline the management of bus schedules, driver assignments, and demand forecasting.The system features an easy-to-use front-end that enables administrators to efficiently manage and optimize transit operations.",
    link: "https://github.com/GayathriVijaya/Urban-Transit-Management-System",
  },
//   {
//     iconUrl: estate,
//     theme: "btn-back-black",
//     name: "Hotel Management System",
//     description:
//       "Designed a Hotel Management System, centralizing and automating key processes to enhance operational efficiency, optimize resource utilization, and improve guest experiences, facilitating seamless hotel functioning.",
//     link: "",
//   },
//   {
//     iconUrl: summiz,
//     theme: "btn-back-yellow",
//     name: "Educational Website",
//     description:
//       "Developed a dynamic frontend educational website featuring interactive learning modules, engaging content, and intuitive navigation to enhance the learning journey.",
//     link: "",
//   },
//   {
//     iconUrl: snapgram,
//     theme: "btn-back-pink",
//     name: "Add More",
//     description: "Add More",
//     link: "",
//   },
];
