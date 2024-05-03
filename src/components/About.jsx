import React from "react"

export default function About() {
  return (

    <section id="about">
      <div className="mh-1000 about pb-1">
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <img src="./MosadFoto.png" alt="" className="about-img" />
        </div>
        <div className="col-md-7">
          <h2 className="text-center mb-4">About Me</h2>       
          <p className="text-justify">Hi there, I'm Mosad Cahyo Usodo, though I usually go by Cahyo. I'm deeply intrigued by the realm of full-stack web development. Presently, I'm a student majoring in Informatics at Universitas Pembangunan Nasional Veteran Jakarta.</p>          
          <p className="text-justify">In addition to my passion for full-stack web development, I also have a keen interest in exploring the intersections of technology and social impact. I believe that through innovative applications of technology, we can address pressing societal challenges and create meaningful change.</p>
          <p className="text-justify">As I progress through my studies, I'm excited to delve deeper into the world of informatics and expand my skills in web development. I'm always eager to learn new technologies and techniques, and I'm constantly seeking out opportunities to collaborate with like-minded individuals on exciting projects.</p>
          <p className="text-justify">Feel free to reach out if you'd like to connect or collaborate on anything related to web development or technology!</p>
          </div>
        </div>
      </div>
    </section>
  )
}