import React from 'react'
import Resume from '../Doc/VaibhavPanchal.pdf'

export default function Home() {
    return (
        <section id="home" className="home">
            <div className="heading">
                <h2>Vaibhav Panchal</h2>
                <h1>Front End Developer</h1>
                <a href={Resume} target="_blank" rel="noreferrer" className="download">Download</a>
                <p>“Hello! I’m Web Developer with over <span>7 years of experience.</span> Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including <span>HTML5, CSS3, JavaScript” </span>
                </p>
            </div>
        </section>
    )
}
