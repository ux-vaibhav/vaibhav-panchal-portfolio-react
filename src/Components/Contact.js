import React from 'react'
import { ImFacebook2,ImInstagram,ImLinkedin } from "react-icons/im";
export default function Contact() {
    return (
        <section id="contact" className="contact box">
                    <h2>Contact</h2>
                    {/* <div className="media">
                        <img src={profile}/>
                    </div> */}
                <div className="align-items-center">
                <ul className="social-li">
                            <li>
                                <a className="bt-sos" href="https://www.facebook.com/vaibhav29692"><ImFacebook2/></a></li>
                            <li><a className="bt-sos" href="https://www.linkedin.com/in/panchalvaibhav/"><ImInstagram/></a></li>
                            <li><a className="bt-sos" href="https://www.instagram.com/vaibhavpanchaal/"><ImLinkedin/></a></li>
                        </ul>
                        </div>
        </section>
    )
}
