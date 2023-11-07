//pages/projects.js

import RootLayout from '../app/layout'
import {FaCss3Alt, FaHtml5, FaNode, FaReact, FaSass, FaStripe} from "react-icons/fa";
import {SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiTypescript, SiStrapi} from "react-icons/si";

export default function Projects() {
    return (
        <RootLayout>
            <div>
                <section className="w-full min-h-screen bg-lighter-blue flex flex-col justify-center py-10">
                    <div className="mx-auto px-4 pl-40" style={{ maxWidth: "110rem" }}>
                        <div className="p-12 bg-white shadow-2xl rounded-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 my-20 items-center">
                                <div className="col-span-full lg:col-span-4">
                                    <h4 className="text-3xl mb-8 font-semibold text-center text-blue-950">Social Media Platform</h4>
                                    <p className="mb-6 text-lg leading-relaxed">
                                        This project represents a social media platform built using modern tools and technologies. Users can effortlessly share their thoughts, dive into discussions, and connect with the digital community.
                                        Give it a spin <a href="https://community-mern-m1oznhhgs-ianh8899.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline font-bold"> here</a>
                                    </p>
                                    <h5 className="mb-4 font-semibold text-lg">Key Technical Features:</h5>
                                    <ul className="mb-6 list-disc pl-5 space-y-2 text-lg">
                                        <li>Frontend: The application's frontend is crafted with Next.js, optimizing for faster page loads and enhanced SEO. TypeScript brings a layer of type safety, ensuring a robust application with fewer runtime errors.</li>
                                        <li>Backend: Express.js, running within the Node.js environment, seamlessly manages server-side operations, routing, and data handling.</li>
                                        <li>User Authentication: With Clerk's integration, users experience a secure and streamlined authentication process, letting them confidently engage with the platform's offerings.</li>
                                        <li>Database: MongoDB, a NoSQL database, is at the core of data management, ensuring efficient storage and retrieval of user content.</li>
                                    </ul>
                                    <div className="mt-8">
                                        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
                                            <SiTypescript size="40" color={"#3178C6"} className="my-2"/>
                                            <SiMongodb size="40" color={"#4DB33D"} className="my-2"/>
                                            <SiExpress size="40" color={"#000000"} className="my-2"/>
                                            <SiNextdotjs size="40" color={"#000000"} className="my-2"/>
                                            <FaNode size="40" color={"#539E43"} className="my-2"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full md:col-span-3 flex justify-center">
                                    <a href="https://community-mern-m1oznhhgs-ianh8899.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <div className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-lg">
                                            <img src="/community-mern.png" alt="stripe picture" className="w-full object-contain"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full min-h-screen bg-lighter-blue flex flex-col justify-center py-10">
                    <div className="mx-auto px-4 pl-40" style={{ maxWidth: "110rem" }}>
                        <div className="p-12 bg-white shadow-2xl rounded-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 my-20 items-center">
                                <div className="col-span-full lg:col-span-4">
                                    <h4 className="text-3xl mb-8 font-semibold text-center text-blue-950">Clothing Store eCommerce App</h4>
                                    <p className="mb-6 text-lg leading-relaxed">
                                        This project serves as a demonstration of a full-stack e-Commerce platform. While currently just an example, the underlying architecture and technical integration showcase a cohesive blend of frontend and backend technologies.
                                        Try it out <a href="http://ecommerce2569896.co.uk/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline font-bold"> here</a>
                                    </p>
                                    <h5 className="mb-4 font-semibold text-lg">Key Technical Features:</h5>
                                    <ul className="mb-6 list-disc pl-5 space-y-2 text-lg">
                                        <li>Frontend: The interface is built with React, ensuring a dynamic and interactive user experience. Styling is enhanced by the use of Sass, allowing for a more organized and maintainable CSS structure.</li>
                                        <li>Backend: Strapi, a Node.js based headless CMS, powers the backend. It's hosted on an Ubuntu VPS via Hostinger, providing a reliable and efficient data management system.</li>
                                        <li>Payments: While only in test mode, the integration of Stripe demonstrates the potential for handling secure transactions. It underscores the feasibility of expanding this project into a fully operational e-Commerce platform.</li>
                                    </ul>
                                    <div className="mt-8">
                                        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
                                            <FaReact size="40" color={"#61DBFB"} className="my-2"/>
                                            <FaSass size="40" color={"#CC6699"} className="my-2"/>
                                            <FaStripe size="40" color={"#008CDD"} className="my-2"/>
                                            <SiStrapi size="40" color={"#2E7EEA"} className="my-2"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full md:col-span-3 flex justify-center">
                                    <a href="http://ecommerce2569896.co.uk/" target="_blank" rel="noopener noreferrer">
                                        <div className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-lg">
                                            <img src="/eCommerce%20Image.jpg" alt="stripe picture" className="w-full object-contain"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full min-h-screen bg-gray-50 flex flex-col justify-center py-10">
                    <div className="mx-auto px-4 pl-40" style={{ maxWidth: "110rem" }}>
                        <div className="p-12 bg-white shadow-2xl rounded-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-center">
                                <div className="col-span-full md:col-span-3 flex justify-center">
                                    <a href="https://github.com/ianh8899/rfq-app" target="_blank" rel="noopener noreferrer">
                                        <div className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-lg">
                                            <img src="/rfqApp%20screenshot.png" alt="RFQ app image" className="w-full object-contain"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-full lg:col-span-4">
                                    <h4 className="text-3xl mb-8 font-semibold text-center text-blue-950">Request for Quotation Manager - MERN Application</h4>
                                    <p className="mb-6 text-lg leading-relaxed">
                                        The RFQ MERN Application streamlines the procurement process, enabling seamless interaction between buyers and suppliers. Instead of wading through cumbersome enterprise platforms, users will find a simple, efficient solution tailored to small organizations.
                                        View on <a href="https://github.com/ianh8899/rfq-app" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline"> GitHub</a>
                                    </p>
                                    <h5 className="mb-4 font-semibold text-lg">Key Technical Features:</h5>
                                    <ul className="mb-6 list-disc pl-5 space-y-2 text-lg">
                                        <li>3-tier Architecture:
                                            <ul className="list-disc pl-5 space-y-2 text-lg">
                                                <li>Frontend: Built with React.js, ensuring a responsive and interactive user experience.</li>
                                                <li>Backend: Utilizes Express.js and Node.js, offering efficient data handling and server-side capabilities.</li>
                                                <li>Database: MongoDB, ensuring scalability, flexibility, and fast access to data.</li>
                                            </ul>
                                        </li>
                                        <li>Next.js Integration: Offers enhanced performance with server-side rendering and enabling the creation of dynamic RFQ pages.</li>
                                        <li>Functionalities:
                                            <ul className="list-disc pl-5 space-y-2 text-lg">
                                                <li>Secure user authentication mechanism using JWT.</li>
                                                <li>Comprehensive RFQ management system to handle requests, updates, and deletions.</li>
                                                <li>Efficient response management to keep track of RFQ replies from vendors.</li>
                                                <li>Personalized dashboard, giving users an overview of active RFQs and their corresponding responses.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="mt-8">
                                        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
                                            <SiMongodb size="40" color={"#4DB33D"} className="my-2"/>
                                            <SiExpress size="40" color={"#000000"} className="my-2"/>
                                            <SiNextdotjs size="40" color={"#000000"} className="my-2"/>
                                            <FaNode size="40" color={"#539E43"} className="my-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full min-h-screen bg-lighter-blue flex flex-col justify-center py-10">
                    <div className="mx-auto px-4 pl-40" style={{ maxWidth: "110rem" }}>
                        <div className="p-12 bg-white shadow-2xl rounded-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 my-20 items-center">
                                <div className="col-span-full lg:col-span-4">
                                    <h4 className="text-3xl mb-8 font-semibold text-center text-blue-950">HyperionDev Portfolio</h4>
                                    <p className="mb-6 text-lg leading-relaxed">
                                        The HyperionDev bootcamp in partnership with the University of Edinburgh immersed me in the essentials of Full Stack Web Development. It provided a holistic understanding of both front-end and back-end development processes, equipping me with the technical know-how and best practices to build responsive and secure web applications.
                                    </p>
                                    <h5 className="mb-4 font-semibold text-lg">Learning Highlights:</h5>
                                    <ul className="mb-6 list-disc pl-5 space-y-2 text-lg">
                                        <li>Web Fundamentals: Established a strong foundation in JavaScript, CSS, and HTML, ensuring a clear understanding of web development building blocks.</li>
                                        <li>Front-End Mastery: Delved into the intricacies of front-end development using CSS, React, and Bootstrap. Gained expertise in crafting responsive and visually appealing UI elements.</li>
                                        <li>Back-End Proficiency: Learned backend development with Express and MongoDB. Acquired hands-on experience in data handling and user management.</li>
                                        <li>Security Protocols: Implemented robust user validation and authentication mechanisms. Utilizing JSON Web Tokens to secure web applications.</li>
                                        <li>API Integration: Worked with various APIs, seamlessly integrating external data into web applications to enhance functionality.</li>
                                        <li>Frameworks and Libraries: Benefited from specialized sessions on React and Next.js, broadening my toolkit for modern web application development.</li>
                                    </ul>
                                    <p>Overall I was ranked 1st out of more than 100+ students, see my portfolio <a href="http://ecommerce2569896.co.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline font-bold"> here</a> </p>
                                    <div className="mt-8">
                                        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
                                            <SiJavascript size="40" color={"#f8c41b"} className="my-2"/>
                                            <FaHtml5 size="40" color={"#E34F26"} className="my-2"/>
                                            <FaCss3Alt size="40" color={"#1572B6"} className="my-2"/>
                                            <FaReact size="40" color={"#2E7EEA"} className="my-2"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full md:col-span-3 flex justify-center">
                                    <a href="https://www.hyperiondev.com/portfolio/139412/" target="_blank" rel="noopener noreferrer">
                                        <div className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-lg">
                                            <img src="/Hyperiondev-logo.jpg" alt="bootcamp picture" className="w-full object-contain"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </RootLayout>
    )
}
