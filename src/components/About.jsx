import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";
import Tech from "./Tech";

const About = () => {
	return (
		<section className=" bg-primary mb-24 px-5 flex flex-col pt-24">
			<div className="">
				<motion.div variants={textVariant()}>
					<h4 className={`${styles.sectionSubText} mb-2`}>Introduction</h4>
					<h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
				</motion.div>

				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4"
				>
					<p>
						Hello! I'm a zealous self-taught junior frontend developer with a
						keen eye for creating captivating digital experiences. My journey
						into the world of web development has been driven by an insatiable
						curiosity and a love for turning ideas into interactive and visually
						appealing realities. My toolbox extends to leveraging the power of
						frameworks like React and the efficiency of Tailwind CSS, ensuring
						that my projects are not just functional but also beautifully
						designed and responsive.
					</p>
				</motion.p>
			</div>

			{/* <Tech /> */}
		</section>
	);
};

export default SectionWrapper(About, "about");
