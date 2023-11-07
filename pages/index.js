//app/index.js

import RootLayout from '../app/layout'
import {FaCss3Alt, FaHtml5, FaReact} from 'react-icons/fa'
import {SiJavascript, SiNextdotjs, SiTailwindcss} from 'react-icons/si'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
    return <RootLayout>
        <div>
            <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-10 pl-40">
                <div className="px-4 sm:px-40 w-full max-w-6xl mx-auto text-center">
                    <div className="mb-10">
                        <img
                            src="/Me.jpg"
                            alt="Your name"
                            className="rounded-full w-40 h-40 object-cover border-3 border-blue-950 mx-auto"
                            style={{border: '3px solid #000B3DFF'}}
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-blue-950 my-5">About Me</h1>
                    <div className="space-y-6 mb-10">
                        <p className="text-lg">
                            After graduating with a degree in Mechanical Engineering and becoming a Procurement Specialist,
                            I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned Full Stack Web Development.
                            I've always enjoyed problem solving and thoroughly enjoy every new challenge that web development has thrown at me.
                        </p>
                        <p className="text-lg">
                            My core stack is <span className="font-semibold text-blue-950">React, Next.js</span> and <span className="font-semibold">MongoDB</span> but I'm also becoming more familiar with TypeScript and SQL.
                        </p>
                        <p className="text-lg">
                            When I'm not coding I enjoy cooking and travelling.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-8 mt-32 gap-14">
                        {/* Icons with hover effect */}
                        <FaHtml5 size="40" color={"#E34F26"} className="transition transform hover:scale-125 my-2"/>
                        <FaCss3Alt size="40" color={"#1572B6"} className="transition transform hover:scale-125 my-2"/>
                        <SiJavascript size="40" color={"#f8c41b"} className="transition transform hover:scale-125 my-2"/>
                        <FaReact size="40" color={"#61DBFB"} className="transition transform hover:scale-125 my-2"/>
                        <SiNextdotjs size="40" color={"#000000"} className="transition transform hover:scale-125 my-2"/>
                        <SiTailwindcss size="40" color={"#38B2AC"} className="transition transform hover:scale-125 my-2"/>
                    </div>
                </div>
            </section>
            {/*
                            <p className="mb-10 body-font">
                                Hello! I'm a seasoned procurement professional turned aspiring web
                                developer. Having worked in procurement for nearly 8 years, I've gained
                                invaluable experience in strategic planning, process improvement,
                                business development, and much more. My passion for problem-solving and
                                desire to be at the forefront of technological innovation led me to a
                                new journey in web development. I'm excited about leveraging my business
                                acumen to build efficient, user-friendly solutions.
                            </p>
                            <p>
                                Through this
                                combination of procurement expertise and newfound development skills, I
                                aim to bring a unique perspective to web development and create
                                applications that not only look great but also drive business growth.
                                While I'm still on my learning journey, I'm eager to apply my skills in
                                a practical setting and look forward to the opportunities and challenges
                                that lie ahead.
                            </p>
                            */}
            <section>
                <div className="max-w-6xl mx-auto px-4 pl-40">
                    <h4 className="text-2xl font-bold text-center my-10">My Experience</h4>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#004073 5px solid'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(255, 255, 255)'}}
                            date="Oct 2023 - present"
                            iconStyle={{color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/beachshore.jpg")`,
                                    backgroundSize: 'cover',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">Beachshore Design</h3>
                            <h4 className="vertical-timeline-element-subtitle">Watford, UK</h4>
                            <p>
                                Web Developer, Front end
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#00b99d 5px solid'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(255, 255, 255)'}}
                            date="Mar 2023 - Sept 2023"
                            iconStyle={{color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/Hyperiondev-logo.jpg")`,
                                    backgroundSize: 'cover',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">HyperionDev</h3>
                            <h4 className="vertical-timeline-element-subtitle">Remote, UK</h4>
                            <p>
                                University of Edinburgh, Full stack Web Development Bootcamp
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#f16a00 5px solid'}}
                            date="Jul 2022 - Mar 2023"
                            iconStyle={{background: 'rgb(255,255,255)', color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/tevva.png")`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">Tevva</h3>
                            <h4 className="vertical-timeline-element-subtitle">Essex, UK</h4>
                            <p>
                                Senior Buyer, Electrification & Powertrain
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#001464 5px solid'}}
                            date="Feb 2021 - Jul 2022"
                            iconStyle={{background: 'rgb(255,255,255)', color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/Alstom_logo.svg")`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">Alstom</h3>
                            <h4 className="vertical-timeline-element-subtitle">Derby, UK</h4>
                            <p>
                                Commodity buyer, Electrical Hardware
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#104100 5px solid'}}
                            date="Feb 2019 - Feb 2021"
                            iconStyle={{background: 'rgb(255, 255, 255)', color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/jaguar.png")`,
                                    backgroundSize: '75%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">Jaguar Land Rover</h3>
                            <h4 className="vertical-timeline-element-subtitle">Gaydon, UK</h4>
                            <p>
                                Senior Global Strategy Buyer, Bulk Materials
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#104100 5px solid'}}
                            date="Sept 2017 - Feb 2019"
                            iconStyle={{background: 'rgb(255, 255, 255)', color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/jaguar.png")`,
                                    backgroundSize: '75%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">Jaguar Land Rover</h3>
                            <h4 className="vertical-timeline-element-subtitle">Gaydon, UK</h4>
                            <p>
                                Buyer, Lighting and Fastener Services
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#104100 5px solid'}}
                            date="Sept 2015 - Sept 2017"
                            iconStyle={{background: 'rgb(255, 255, 255)', color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/jaguar.png")`,
                                    backgroundSize: '75%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">Jaguar Land Rover</h3>
                            <h4 className="vertical-timeline-element-subtitle">Gaydon, UK</h4>
                            <p>
                                Graduate Trainee, Production Purchasing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#ff0000 5px solid'}}
                            date="Sept 2011 - Jun 2015"
                            iconStyle={{background: 'rgb(255, 255, 255)', color: '#fff'}}
                            icon={
                                <div style={{
                                    backgroundImage: `url("/UniOfLeicesterCrest.png")`,
                                    backgroundSize: '50%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Engineering, Mechanical
                                Engineering</h3>
                            <h4 className="vertical-timeline-element-subtitle">Leicester, UK</h4>
                            <p>
                                University of Leicester
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        </div>
    </RootLayout>
}
