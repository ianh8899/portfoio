//pages/projects.js

import RootLayout from '../app/layout'

export default function Projects() {
    return (
        <RootLayout>
            <div className="max-w-6xl mx-auto px-4 pl-40">
                <h2 className="text-4xl py-8 bg-gray-800 rounded-b-2xl text-white text-center font-bold">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-white pt-8">
                    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md text-center">
                        <a
                            href="https://github.com/ianh8899/Shopping"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="h-64 w-full overflow-hidden">
                                <img src="../public/Screenshot stripe page.png" alt="stripe picture"
                                     className="h-full w-full object-cover"/>
                            </div>
                        </a>
                        <div className="p-4">
                            <h3 className="text-gray-300">Hangman!</h3>
                            <div>This app is a full stack eCommerce app making use of Strapi for content management and
                                Stripe for payments. Front end created using React and Sass.
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md text-center">
                        <a
                            href="https://github.com/ianh8899/iTunesSearch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="h-64 w-full overflow-hidden">
                                <img src="/iTunesSearch.png" alt="screenshot from iTunes app"
                                     className="h-full w-full object-cover"/>
                            </div>
                        </a>
                        <div className="p-4">
                            <h3 className="text-gray-300">iTunes Search and favourite</h3>
                            <div>
                                This is an iTunes search app. It allows the user to search iTunes
                                and make a list of their favourites. Making use of React and
                                Express.
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md text-center">
                        <a
                            href="https://github.com/ianh8899/rfq-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="h-64 w-full overflow-hidden">
                                <img src="/rfq.png" alt="screenshot from RFQ app"
                                     className="h-full w-full object-cover"/>
                            </div>
                        </a>
                        <div className="p-4">
                            <h3 className="text-gray-300">Quotation Management System</h3>
                            <div>
                                Full stack MERN project. This is an RFQ app which allows Buyers to manage Requests For
                                Quotations.
                                Making use of MongoDB, Express, React (Next.js) and Node.
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md text-center">
                        <a
                            href="https://www.hyperiondev.com/portfolio/139412/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="h-64 w-full overflow-hidden">
                                <img src="/Hyperiondev-logo.jpg" alt="screenshot from RFQ app"
                                     className="h-full w-full object-cover"/>
                            </div>
                        </a>
                        <div className="p-4">
                            <h3 className="text-gray-300">HyperionDev Portfolio</h3>
                            <div>
                                All of my coding projects created throughout my bootcamp.
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md text-center">
                        <a
                            href="https://github.com/ianh8899/Hangman"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="h-64 w-full overflow-hidden">
                                <img src="/hangman.png" alt="hangman picture" className="h-full w-full object-cover"/>
                            </div>
                        </a>
                        <div className="p-4">
                            <h3 className="text-gray-300">Hangman!</h3>
                            <div>This app is a recreation of hangman made using React. Play it now whilst it's hosted on
                                <a href="https://hangmanih-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                                   className="text-red-400"> Heroku</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}
