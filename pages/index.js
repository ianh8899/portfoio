//app/index.js

import RootLayout from '../app/layout'
import {FaCss3Alt, FaHtml5, FaReact} from 'react-icons/fa'
import {SiJavascript, SiNextdotjs, SiTailwindcss} from 'react-icons/si'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
    return <RootLayout>
        <div className="">
            <section className="w-full min-h-screen flex flex-col justify-center items-center pl-40"
                 style={{
                     backgroundImage: `url('/wallpaper.jpg')`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'
                 }}>
                <div className="bg-opacity-90 bg-black text-white p-4 border-2 border-white rounded">
                    <h1 className="sm:text-6xl lg:text-7xl font-bold text-center mb-5">HI! I'M IAN HITCHMAN</h1>
                    <h2 className="sm:text-xl lg:text-2xl text-center">Full-stack web developer in London</h2>
                </div>
            </section>
            <section className="w-full min-h-screen bg-white flex flex-col justify-center py-10">
                <div className="max-w-6xl mx-auto px-4 pl-40">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                        <h4 className="text-2xl mb-10 font-bold text-center col-span-full text-blue-950">About Me</h4>
                        <div className="col-span-full lg:col-span-2">
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
                        </div>
                        <div className="col-span-full md:col-span-1 flex justify-center lg:justify-end md:min-w-[250px]">
                            <img src="/Me.jpeg" alt="Your name" style={{
                                borderRadius: '50%',
                                width: '250px',
                                height: '250px',
                                objectFit: 'cover',
                                border: '3px solid #000B3DFF',
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 pl-40">
                    <h4 className="text-xl mt-10 mb-10 font-bold text-center text-blue-950">Technologies I have experience in</h4>
                    <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
                        <FaHtml5 size="40" color={"#E34F26"} className="my-2"/>
                        <FaCss3Alt size="40" color={"#1572B6"} className="my-2"/>
                        <SiJavascript size="40" color={"#f8c41b"} className="my-2"/>
                        <FaReact size="40" color={"#61DBFB"} className="my-2"/>
                        <SiNextdotjs size="40" color={"#000000"} className="my-2"/>
                        <SiTailwindcss size="40" color={"#38B2AC"} className="my-2"/>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-6xl mx-auto px-4 pl-40">
                    <h4 className="text-2xl font-bold text-center my-10">Timeline</h4>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{color: '#000000', borderTop: '#00b99d 5px solid'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(255, 255, 255)'}}
                            date="Mar 2023 - present"
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
