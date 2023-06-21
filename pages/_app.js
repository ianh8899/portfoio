//app/_app.js

import RootLayout from '../app/layout'

export default function Home() {
    return (
        <RootLayout>
            <div className="max-w-6xl mx-auto px-4 pl-40">
                <h1 className="text-5xl mt-10 mb-10 font-bold text-center">Welcome to My Developer Portfolio</h1>
                <div className="mb-10">
                    Hello! I'm a seasoned procurement professional turned aspiring web
                    developer. Having worked in procurement for nearly 8 years, I've gained
                    invaluable experience in strategic planning, process improvement,
                    business development, and much more. My passion for problem-solving and
                    desire to be at the forefront of technological innovation led me to a
                    new journey in web development. I'm excited about leveraging my business
                    acumen to build efficient, user-friendly solutions.
                </div>
                <div>
                    Through this
                    combination of procurement expertise and newfound development skills, I
                    aim to bring a unique perspective to web development and create
                    applications that not only look great but also drive business growth.
                    While I'm still on my learning journey, I'm eager to apply my skills in
                    a practical setting and look forward to the opportunities and challenges
                    that lie ahead.
                </div>
            </div>
        </RootLayout>
    )
}

