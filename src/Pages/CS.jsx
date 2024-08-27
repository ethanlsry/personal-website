import React from 'react';

import Project from '../Components/Project.jsx'
import Footer from '../Components/Footer.jsx'

function CS() {
    const projects = [
        { id: 1,
            src: 'https://live.staticflickr.com/65535/53467697377_2260b37c3c_h.jpg',
            alt: 'Photo 1',
            title: "Black Hole Raytracer",
            description: "Raytracer built on C++ and ODE integration to solve the geodesic equation for photons near the event horizon of a rotating black hole.",
            ext: true,
            endpoint: "https://github.com/ethanlsry/black-hole-raytracer",
         },
        { id: 2,
            src: 'https://live.staticflickr.com/65535/52935424441_1b5fa82d5b_w.jpg',
            alt: 'Photo 2',
            title: "Qiskit Entanglement Model",
            description: "Modeling an entangled Bell state using IBM's Qiskit python library.",
            ext: true,
            endpoint: "https://github.com/ethanlsry/hello_quantum_world/blob/main/Hello%2C%20Entangled%20World.ipynb"
         },
         { id: 3,
            src: 'https://live.staticflickr.com/65535/52938239890_29fc3fc8c8_b.jpg',
            alt: 'Photo 3',
            title: "Personal Calendar",
            description: "Keep track of your life with this Javascript and PHP calendar.",
            ext: true,
            endpoint: "https://github.com/ethanlsry/Calendar_project"
         },
        { id: 4,
            src: 'https://live.staticflickr.com/65535/52938630414_da015e865d_b.jpg',
            alt: 'Photo 4',
            title: "Weather Dashboard",
            description: "Interactive weather information using JS, Ajax, and Mapbox's API.",
            ext: true,
            endpoint: "/weather.html",
         },
        { id: 5,
            src: 'https://live.staticflickr.com/65535/52938263170_d989b509c5_b.jpg',
            alt: 'Photo 5',
            title: "Personal Website",
            description: "I programmed this website from scratch using React..",
            ext: true,
            endpoint: "https://github.com/ethanlsry/personal_website"
         },        
    ]

    return (
        <>
        <div id="cs_top_text">
            <p>Below are some highlights from my programming portfolio:</p>
        </div>
        <div id="home_recent_projects">
            {projects.map((proj) => (
                <div key={proj.id}>
                    <Project
                        className="grid-item"
                        title={proj.title}
                        description={proj.description}
                        img_url={proj.src}
                        ext={proj.ext}
                        endpoint={proj.endpoint}
                    />
                </div>
            ))}
        </div>
        <Footer />
        </>
    );
};

export default CS;