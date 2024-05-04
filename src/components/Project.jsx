import { useEffect, useState } from "react";

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const sampleProjects = [
            {
                title: "Practical Education Center Audit",
                type: { title: "Web Development" },
                image: "./ProjectPEC.png",
                content: "I've developed a website entirely on my own to streamline the process of financial report checking. Leveraging PHP and the Bootstrap framework, the website offers a user-friendly interface for efficient navigation. For the backend, I've integrated a MYSQL database to ensure secure and organized data management.",
                url: "https://pecaudit.com/"
            },
            {
                title: "Lucky Futsal",
                type: { title: "Web Development" },
                image: "./ProjectMicro.png",
                content: "Our team has developed a website to facilitate individuals interested in playing futsal in Samarinda, particularly at Lucky Futsal, to easily access relevant information such as pricing, location, and contact details of the facility's management. My role within the team primarily involved crafting the website's UI/UX.",
                url: "https://cahyousodo.github.io/Lucky-Futsal/"
            }
        ];
        setProjects(sampleProjects);
    }, []);
    return (
        <section id="projects" className="projects pt-5">
          <div>
          <h2 className="text-center mb-4">My Projects</h2>
          <div className="row justify-content-center">
            {projects && projects.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="card about border border-dark projects-card">
                    <img src={item?.image} alt="project image" className="project-img" />
                    <h5 className="text-center">{item?.title}</h5>
                    <span className="type text-center"><em>{item?.type?.title}</em></span>
                    <p className="text-justify">{item.content}</p>
                    <button onClick={() => window.open(item?.url, "_blank")} className="btn btn-sm">View</button>
                  </div>
                </div>
                
              )
            })}
            </div>
          </div>
        </section>
    );
}
