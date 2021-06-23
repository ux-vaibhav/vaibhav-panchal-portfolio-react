import React from 'react'
import img1 from '../Images/sk1.jpg'
import img2 from '../Images/sk2.jpg'
import img3 from '../Images/sk3.jpg'
import img4 from '../Images/sk4.jpg'
import img5 from '../Images/sk5.jpg'
import img6 from '../Images/sk6.jpg'
import img7 from '../Images/sk7.jpg'
import img8 from '../Images/sk8.jpg'
import img9 from '../Images/sk9.jpg'
import img11 from '../Images/sk11.jpg'
import img12 from '../Images/sk12.jpg'
import img14 from '../Images/sk14.jpg'

export default function Hobby() {
    return (
        <section id="hobby" className="box hobby aqua-bg">
            <h2>Hobby</h2>
            <div className="sketches">
                <div className="images-wrapper">
                <img src={img4} alt="img"/>
                <img src={img3} alt="img"/>
                <img src={img1} alt="img"/>
                <img src={img14} alt="img"/>
                <img src={img9} alt="img"/>
                <img src={img5} alt="img"/>
                <img src={img12} alt="img"/>
                <img src={img6} alt="img"/>
                <img src={img7} alt="img"/>
                <img src={img8} alt="img"/>
                <img src={img11} alt="img"/>
                </div>
            </div>
        </section>
    )
}
