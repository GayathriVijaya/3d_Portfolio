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
    typescript
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
        imageUrl: dbms,
        name: "DBMS",
        type: "Database",
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
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: food,
        theme: 'btn-back-red',
        name: 'Food-Delivery App',
        description: 'Designed and built a mobile app for ordering food with an efficient delivery system. This app also includes a new feature for filtering by price range, enhancing the user experience.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Blog Website',
        description:'Developed a blog website where users can create, edit, and enjoy others blogs. The site includes separate controls for administrators and users, providing a robust and versatile platform for content management.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-blue',
        name: 'Movie Ticket Booking Clone',
        description:  'Built a complete clone of a movie ticket booking app, allowing users to optimize searches through locations, easily find movie theaters, and book both tickets and food seamlessly.',
         link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Library Management System',
        description: 'Add More',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Hotel Management System',
        description: 'Designed a Hotel Management System, centralizing and automating key processes to enhance operational efficiency, optimize resource utilization, and improve guest experiences, facilitating seamless hotel functioning.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Educational Website',
        description:'Developed a dynamic frontend educational website featuring interactive learning modules, engaging content, and intuitive navigation to enhance the learning journey.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Add More',
        description: 'Add More',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
];