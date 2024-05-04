import React from "react";
import "boxicons";

export default function SocMed() {
	return (
    <div className="socmed" id="socmed">
      <div className="container">
        <div className="row p-5" >
          <div className="col-xl-8 col-lg-8">
            <div className="textblock">
              <h3>Hello there! It's Me</h3>
              <h1>Mosad Cahyo Usodo</h1>
              <h3>And I'm a <span className="text-blue-500">Junior Full Stack Developer</span></h3>
              <p>Let's connect on social media!</p>
              <div className="social-media">
                <a href="https://www.linkedin.com/in/mosad-cahyo-usodo-0b219721b/" target="_blank" rel="noreferrer"><box-icon type="logo" name="linkedin-square" color="#e8e8e9"></box-icon></a>
                <a href="https://github.com/CahyoUsodo" target="_blank" rel="noreferrer"><box-icon name="github" type="logo" color="#e8e8e9"></box-icon></a>
                <a href="https://www.instagram.com/cahyo.usodo/ " target="_blank" rel="nonreferrer"><box-icon name="instagram" type="logo" color="#e8e8e9"></box-icon></a>
              </div>
              <a href="./Mosad_Cahyo_Usodo.pdf" download className="btn mt-2">Download CV</a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 pt-3">
            <img src="./Asset1.png" alt="" className="my-img" />
          </div>
        </div>
      </div>
    </div>
	)
}
