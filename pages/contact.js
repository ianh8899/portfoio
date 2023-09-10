import { useState } from 'react';
import RootLayout from '../app/layout'
import {MdEmail, MdHouse, MdOutlinePhone, MdContentCopy} from 'react-icons/md'

const Contact = () => {
    return (
        <RootLayout>
            <div className="max-w-6xl mx-auto px-4 pl-40 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <ContactIcon icon={<MdEmail size="40"/>} text="ihitchman83@gmail.com"/>
                <ContactIcon icon={<MdOutlinePhone size="40"/>} text="+44 (0)7563 342208"/>
                <ContactIcon icon={<MdHouse size="40"/>} text="10D Chase Green Avenue, Enfield, Greater London, EN2 8DX"/>
            </div>
        </RootLayout>
    )
}

const ContactIcon = ({icon, text = ''}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
        });
    }

    return (
        <div className="flex flex-col p-5 bg-white shadow-lg rounded-lg w-80 h-56">
            <div className="flex-1 flex items-end justify-center mb-2">
                {icon}
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <span className="contact-info text-center mb-2">
                    {text}
                </span>
                <button onClick={copyToClipboard} title="Copy to clipboard" className={`transition-colors duration-300 p-1 rounded ${isCopied ? 'text-white bg-gray-800' : 'bg-white text-black'}`}>
                    <MdContentCopy size="20"/>
                </button>
            </div>
        </div>
    );
};

export default Contact
