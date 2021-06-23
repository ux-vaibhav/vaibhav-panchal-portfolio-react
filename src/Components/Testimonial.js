import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:2,
    arrows:false,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ] 
    };

export default function Testimonial() {
    return (
        <section id="testimonial" className="box testimonial">
            <h2>Testimonial</h2>
            <div className="testimonial-wrapper">
             <Slider {...settings}>
                <div className="testimonial-item">
                    <div className="testimonial-icon">	<span>“</span>
                    </div>
                    <div className="content">
                        <p>In addition to being a very talented designer and illustrator, Vaibhav is extremely reliable and one of the best designers with whom I’ve worked. He has a knack for taking limited information from clients and creating several options to meet their needs. I’d highly recommend Vaibhav for any type of design work</p>
                    </div>
                    <div className="author">
                        <div className="details">
                            <h4 className="name">Jenish Rabadiya</h4>
                            <p className="desegnation">Senior Software Engineer at Tieto</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="testimonial-icon">	<span>“</span>
                    </div>
                    <div className="content">
                        <p>Vaibhav is an exceptionally creative and detail-oriented designer. During his time at Evolution I also watched him become an extremely proficient front-end web developer. He’s also a great guy to work with and a valuable member of our team.</p>
                    </div>
                    <div className="author">
                        <div className="details">
                            <h4 className="name">Bhargav Panchal</h4>
                            <p className="desegnation">Sr. Software Engineer at Cygnet Infotech Pvt. Ltd</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="testimonial-icon">	<span>“</span>
                    </div>
                    <div className="content">
                        <p>Vaibhav is highly skilled developer. He has great creativity skill. A professional and knowledgeable Developer who I would highly recommend!</p>
                    </div>
                    <div className="author">
                        <div className="details">
                            <h4 className="name">Prashant Valanda</h4>
                            <p className="desegnation">Senior Magento Certified Developer at TCS</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="testimonial-icon">	<span>“</span>
                    </div>
                    <div className="content">
                        <p>Vaibhav is a true asset to our visual design team. He always delivered superior deliverables to our clients before their deadline. He takes pride in his work and takes the appropriate amount of time to understand a customer’s requirements</p>
                    </div>
                    <div className="author">
                        <div className="details">
                            <h4 className="name">Parate Bharat</h4>
                            <p className="desegnation">Web Designer at S&P Global</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="testimonial-icon">	<span>“</span>
                    </div>
                    <div className="content">
                        <p>Vaibhav is a savvy designer with a great sense of what the client needs.I highly recommend Vaibhav as a great designer for any business venture. He has an amazing work ethic, very easy to work with, and friendly personality. He is a great asset</p>
                    </div>
                    <div className="author">
                        <div className="details">
                            <h4 className="name">Ujas Prajapati</h4>
                            <p className="desegnation">Senior Consultant at Apttus</p>
                        </div>
                    </div>
                </div>
                </Slider>
            </div>
        </section>

    )
}
