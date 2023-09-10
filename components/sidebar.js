//components/sidebar.js

import {FaGithub, FaHome, FaLinkedin, FaProjectDiagram, FaFilePdf} from 'react-icons/fa'
import {IoIosContact} from 'react-icons/io'
import {MdOutlineWorkOutline} from 'react-icons/md'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-36 m-0 flex flex-col bg-gray-900 shadow-lg
        bg-primary text-white text-secondary">
            <SideBarIcon icon={<FaHome size="50"/>} link="/" text="Home" extraClasses="home-icon"/>
            <Divider/>
            {/*<SideBarIcon icon={<MdOutlineWorkOutline size="32"/>} link="/experience" text="Experience"/>*/}
            <SideBarIcon icon={<FaProjectDiagram size="32"/>} link="/projects" text="Portfolio"/>
            <SideBarIcon icon={<IoIosContact size="32"/>} link="/contact" text="Contact"/>
            <SideBarIcon icon={<FaLinkedin size="32"/>} link="https://www.linkedin.com/in/ian-hitchman-94a1a512a/"
                         text="LinkedIn" isExternal={true}/>
            <SideBarIcon icon={<FaGithub size="32"/>} link="https://github.com/ianh8899" text="GitHub"
                         isExternal={true}/>
            <SideBarIcon icon={<FaFilePdf size="32"/>} link="/IanHitchman.pdf" text="Download My CV"
                         isExternal={true}/>
        </div>
    )
};

const SideBarIcon = ({icon, link, text, extraClasses = '', isExternal = false}) => {
    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className={`sidebar-icon group ${extraClasses}`}>
                    {icon}
                    <span className="sidebar-tooltip group-hover:scale-125">
                    {text}
                    </span>
                </div>
            </a>
        );
    } else {
        return (
            <Link href={link}>
                <div className={`sidebar-icon group ${extraClasses}`}>
                    {icon}
                    <span className="sidebar-tooltip group-hover:scale-125">
                        {text}
                    </span>
                </div>
            </Link>
        );
    }
};

const Divider = () => <hr className="sidebar-hr"/>;

export default Sidebar
