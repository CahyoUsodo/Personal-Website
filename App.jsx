import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import SocMed from "./components/SocMed";
import Project from "./components/Project";
import Contact from "./components/Contact"

function App() {
	return (
		<>
			<Header />
			<SocMed />
			<About />
			<Project />
			<Contact />
			<Footer />
			<SpeedInsights />
		</>
	);
}

export default App;
