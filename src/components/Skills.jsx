import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";

const Skills = () => {
	return (
		<div className="mt-16  text-white">
			<h3 className={`${styles.sectionHeadText} mb-12`}>Key Skills.</h3>
			<p className="m:text-[20px] text-[16px] text-secondary  tracking-wider mb-20">
				As an individual building projects and fostering client collobarations,
				I have honed several key skills that are essential for success in the
				field. These skills enable me to deliver high-quality work and thrive in
				fast-paced environments
			</p>
			<div className="flex flex-wrap gap-24">
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
		<Tilt className="xs:w-[250px]">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="h-[520px] xxxs:h-[470px] xxs:h-[440px]    w-[90%] green-pink-gradient rounded-[20px] shadow-card p-[1px] xs:w-[300px]"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-8 px-12 h-[518px] xxxs:h-[468px] xxs:h-[438px]  xs:[h-398px] xxs:max-xs:pt-16 flex flex-col gap-8"
				>
					{/* <img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain self-center"
					/> */}
					<h3
						className={`text-white text-[20px] font-semibold self-center xxs:max-xs:mb-4 `}
					>
						{title}
					</h3>
					<span className="">{text}</span>
				</div>
			</motion.div>
		</Tilt>
	);
};

export default SectionWrapper(Skills, "");
