import React from 'react';
import Project from '../Components/Project.jsx'
import Footer from '../Components/Footer.jsx'

function Home() {
    const style = { background: '#79A479', padding: '8px 0'};
    const projects = [
        { id: 1,
            src: 'https://live.staticflickr.com/65535/52935424441_1b5fa82d5b_w.jpg',
            alt: 'Photo 1',
            title: "Qiskit",
            description: "Modeling an entangled Bell state using IBM's Qiskit python library",
            ext: true,
            endpoint: "https://github.com/ethanlsry/hello_quantum_world/blob/main/Hello%2C%20Entangled%20World.ipynb"
        },
        { id: 2,
            src: 'https://live.staticflickr.com/65535/52938630414_da015e865d_b.jpg',
            alt: 'Photo 2',
            title: "Weather Widget",
            description: "Interactive weather information using JS, AJAX, and Mapbox's API",
            ext: true,
            endpoint: "/weather.html",
         },
        { id: 3,
            src: 'https://live.staticflickr.com/65535/52934828742_9b24e40b1f_b.jpg',
            alt: 'Photo 3',
            title: "NH off-roading",
            description: "Off-roading photography in southern New Hampshire.",
            ext: false,
            endpoint: "/digital_media"
         },
        { id: 4,
            src: 'https://live.staticflickr.com/65535/52938263170_d989b509c5_b.jpg',
            alt: 'Photo 4',
            title: "Personal Website",
            description: "I coded this website using ReactJS.",
            ext: true,
            endpoint: "https://github.com/ethanlsry/personal_website"
         },        
    ]


    return (
        <>
            <div id="home_top_text">
                <p>I’m Ethan, a senior at Washington University in St. Louis majoring in physics with minors in computer science
                 and French.</p>
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