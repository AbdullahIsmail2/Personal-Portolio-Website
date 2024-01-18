import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ title, icon, index }) => {
	console.log(title);
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient rounded-[20px] shadow-card p-[1px]"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<div className="w- bg-primary m-auto pt-[130px] min-h-screen px-5">
			<motion.div variants={textVariant()}>
				<h4 className={`${styles.sectionSubText} mb-2`}>Introduction</h4>
				<h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4"
			>
				Passionate self-taught junior frontend developer skilled in HTML, CSS,
				JS, Tailwind, and React. Committed to crafting engaging web experiences.
				Ready to contribute and grow in a dynamic team.
			</motion.p>

			<div className="flex flex-wrap gap-10 mt-20 text-white">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
