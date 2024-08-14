import React from "react";
import Shuveksha from "./assets/profile.jpeg";
import Button from "./Button";

const Hero = () => {
	return (
		<div className="flex items-center flex-col justify-center">
			<img
				src={Shuveksha}
				alt=""
				className="flex rounded-full border-lg  h-24 w-24 object-cover"
			/>
			<h1 className="text-2xl font-semibold">Hi,I'm Kim youngjoon♥</h1>
			<h2 className="text-xl font-medium">Full Stack Developer</h2>
			<p className="text-justify w-3/4 text-xl">
				I'm kim youngjoon, a fullstack developer with the goal of advancing my career
				and participating in inspiring projects. Here I present my work and my
				passion for web development.Let's shape digital solutions together and
				shape the future!
			</p>
			<div className="flex justify-center gap-4 mt-3">
				<Button button1="Contact Me" type="pink" icon="contact" />
				<Button button1="My project" type="purple" icon="github" />
			</div>
		</div>
	);
};

export default Hero;