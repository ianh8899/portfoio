//pages/contact.js

import RootLayout from '../app/layout'
import {MdEmail, MdHouse, MdOutlinePhone} from 'react-icons/md'

const Contact = () => {
    return (
        <RootLayout>
            <div className="max-w-6xl mx-auto px-4 pl-40">
                <h1 className="text-4xl py-8 bg-gray-800 rounded-b-2xl text-white text-center font-bold">Contact Me</h1>
                <div className="pt-6">
                    <div className="pt-6 grid md:grid-cols-2 gap-6">
                        <ContactIcon icon={<MdEmail size="32"/>} text="ihitchman83@gmail.com"/>
                        <ContactIcon icon={<MdOutlinePhone size="32"/>} text="+44 (0)7563 342208"/>
                        <ContactIcon icon={<MdHouse size="32"/>}
                                     text="London Address: Flat 15, Tiltman Place, Finsbury Park, London N7 7EN"/>
                        <ContactIcon icon={<MdHouse size="32"/>}
                                     text="Coventry Address: 9 Deighton Grove, Coventry, CV3 3JH"/>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

const ContactIcon = ({icon, text = ''}) => (
    <div className="flex items-center space-x-4 p-3 rounded-lg">
        <div className="flex-shrink-0 h-8 w-8">
            {icon}
        </div>
        <span className="contact-info">
            {text}
        </span>
    </div>
);

export default Contact