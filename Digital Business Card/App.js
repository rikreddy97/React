import React from "react"
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Info from "./components/Info.js"
import Intrests from "./components/Intrests.js"
export default function App(){
    return(
        <main className="main-canvas">
            <Info />
            <About />
            <Intrests />
            <Footer />
        </main>
    )
}