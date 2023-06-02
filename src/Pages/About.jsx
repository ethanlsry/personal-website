import React from 'react';
import { Divider } from 'antd';

import Footer from '../Components/Footer.jsx'
import NASA_pod from '../Components/NASA_pod.jsx'



function About() {
    return (
        <>
            <div id="about_overview">
                <p id="about_overview_text">I aim to solve complex problems with a technical and thoughtful approach.</p>
                <img id="about_overview_img" src="https://live.staticflickr.com/65535/52935816300_86b2d2ba0e_k.jpg"></img>
            </div>
            <div id="about_body">
                <p>Recent projects include research in WashU's planetary Planetary Spectroscopy lab, software engineering at Blackstone, 
                as well as coursework for a major in physics and minors in computer science and French.</p>
                <p>I’m interested in computational physics, full-stack engineering, and space exploration. I also love playing pickup sports, 
                spending time in nature, and cooking.</p>

                <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}><Divider /></div>

                <p id="about_body_connect">If you’d like to connect, feel free to contact me below.</p>
                <Footer />
            </div>
            <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}><Divider /></div>
            <div id="NASA_pod">
                <p>Otherwise, enjoy NASA's picture of the day:</p>
                <NASA_pod />
            </div>
            <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}><Divider /></div>
        </>
    );
};

export default About;