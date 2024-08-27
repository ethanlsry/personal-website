import React from 'react';
import Project from '../Components/Project.jsx'
import Footer from '../Components/Footer.jsx'

function Home() {
    const style = { background: '#79A479', padding: '8px 0'};
    const projects = [
        { id: 1,
            src: 'https://live.staticflickr.com/65535/52935424441_1b5fa82d5b_w.jpg',
            alt: 'Photo 1',
            title: "Qiskit Entanglement Model",
            description: "Modeling an entangled Bell state using IBM's Qiskit python library.",
            ext: true,
            endpoint: "https://github.com/ethanlsry/hello_quantum_world/blob/main/Hello%2C%20Entangled%20World.ipynb"
        },
        { id: 2,
            src: 'https://live.staticflickr.com/65535/52938630414_da015e865d_b.jpg',
            alt: 'Photo 2',
            title: "Weather Dashboard",
            description: "Interactive weather information using JS, Ajax, and Mapbox's API.",
            ext: true,
            endpoint: "/weather.html",
         },
         { id: 3,
            src: 'https://live.staticflickr.com/65535/53467697377_2260b37c3c_h.jpg',
            alt: 'Photo 3',
            title: "Black Hole Raytracer",
            description: "Raytracer built on C++ and ODE integration to solve the geodesic equation for photons near the event horizon of a rotating black hole.",
            ext: true,
            endpoint: "https://github.com/ethanlsry/black-hole-raytracer",
         },
         { id: 4,
            src: 'https://live.staticflickr.com/65535/52934828742_9b24e40b1f_b.jpg',
            alt: 'Photo 4',
            title: "New Hampshire Photography",
            description: "Off-roading photography in southern New Hampshire.",
            ext: false,
            endpoint: "/digital_media"
         },
    ]


    return (
        <>
            <div id="home_top_text">
                <p>I’m Ethan, a software engineer based in New York City.</p>
                 <p>Welcome to my personal website.</p>
            </div>

            <div id="home_recent_projects_text">
                <p>Recent Projects</p>
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

export default Home;