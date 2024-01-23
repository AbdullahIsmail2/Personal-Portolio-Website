import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";

const Skills = () => {
	return (
		<div className="mt-16 text-white">
			<h3 className={`${styles.sectionHeadText} mb-12`}>Soft Skills.</h3>
			<div className="flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
};

const ServiceCard = ({ title, text, icon, index }) => {
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
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] grid grid-rows-[50%_50%] place-content-center"
				>
					{/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
					<h3
						className={`text-white text-[20px] font-bold text-center self-center ${styles.sectionSubText}`}
					>
						{title}
					</h3>
					<span className="text-center">{text}</span>
				</div>
			</motion.div>
		</Tilt>
	);
};

export default SectionWrapper(Skills, '');
