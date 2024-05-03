import React, { useEffect } from "react";
import { Link } from "react-scroll";

export default function Header() {
	useEffect(() => {
		const navEl = document.querySelector(".navbar");
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 56) {
				navEl.classList.add("navbar-scrolled");
			} else if (window.scrollY < 56) {
				navEl.classList.remove("navbar-scrolled");
			}
		});
	}, []);

	useEffect(() => {
		const navbarToggler = document.querySelector(".navbar-toggler");
		const header = document.querySelector("nav");

		navbarToggler.addEventListener("click", () => {
			header.style.paddingBottom = "200px"; //
		});
	}, []);

	return (
		<nav className="navbar fixed-top shadow-sm navbar-expand-lg navbar-dark p-2">
			<div className="container-fluid">
				<a className="navbar-brand ms-5" href="#">
					<img src="./MosadLogo.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto py-0">
						<li className="nav-item">
							<Link activeClass="active" to="socmed" spy={true} smooth={true} offset={-70} duration={50} className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={50} className="nav-link">About Me</Link>
						</li>
						<li className="nav-item">
							<Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={50} className="nav-link">Projects</Link>
						</li>
						<li className="nav-item">
							<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={50} className="nav-link">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
