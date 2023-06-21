//app/layout.js

import './globals.css'
import Sidebar from "@/components/sidebar";

export default function RootLayout({children}) {
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    )
}

