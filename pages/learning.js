//pages/learning.js

import RootLayout from "@/app/layout";

export default function Learning() {
    return (
        <RootLayout>
            <div className="max-w-6xl mx-auto px-4 pl-40">
                <h1 className="text-4xl py-8 bg-gray-800 rounded-b-2xl text-white text-center font-bold">Education and
                    Training</h1>
                <div className="pt-6 grid md:grid-cols-2 gap-4">
                    <div className="pt-2 bg-gray-300 rounded-2xl p-2 text-center">
                        <h2 className="p-2 font-bold">Webdev</h2>
                        <ul className="list-disc list-inside py-2">
                            <li>University of Edinburgh Full Stack Web Development Bootcamp</li>
                        </ul>
                    </div>
                    <div className="pt-2 bg-gray-400 rounded-2xl p-2 text-center">
                        <h2 className="p-2 font-bold">Procurement</h2>
                        <ul className="list-disc list-inside py-2">
                            <li>CIPS Level 6</li>
                            <li>Advanced Negotiation (Scotwork)</li>
                            <li>Game Theory & Structured Negotiation (TWS)</li>
                        </ul>
                    </div>
                    <div className="pt-2 bg-gray-400 rounded-2xl p-2 text-center">
                        <h2 className="p-2 font-bold">Education</h2>
                        <ul className="list-disc list-inside py-2">
                            <li>BEng, Mechanical Engineering - University of Leicester, Leicester, UK</li>
                        </ul>
                    </div>
                    <div className="pt-2 bg-gray-300 rounded-2xl p-2 text-center">
                        <h2 className="p-2 font-bold">Other</h2>
                        <ul className="list-disc list-inside py-2">
                            <li>Full UK driving license + towing (B+E)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}
