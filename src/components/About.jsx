import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";
import Tech from "./Tech";

const About = () => {
	return (
		<section className=" bg-primary mb-24 px-5 flex flex-col pt-24 min-h-[calc(100vh-5rem)]">
			<div className="">
				<motion.div variants={textVariant()}>
					<h4 className={`${styles.sectionSubText} mb-2`}>Introduction</h4>
					<h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
				</motion.div>

				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4"
				>
					<p className="mt-5">
						Hello! I'm a zealous self-taught junior frontend developer with a
						passion for crafting captivating digital experiences. My journey
						into web development has been fueled by curiosity and a desire to
						turn ideas into interactive realities. Leveraging frameworks like
						React and the efficiency of Tailwind CSS, I specialize in building
						functional, beautifully designed, and responsive projects.
					</p>
					<p className="mt-10 hidden sm:block">
						As a freelance developer, I've built a diverse portfolio of
						real-world projects that showcase my skills and adaptability. From
						collaborating with clients to tackling challenges head-on, I thrive
						in environments where creativity and innovation intersect.
						<span>
							Additionally, my dedication to personal projects demonstrates my
							commitment to continuous learning and growth in web development.
							I'm enthusiastic about collaborating on new endeavors and
							contributing to the creation of exceptional digital experiences.
							Let's connect and bring your ideas to life!
						</span>
					</p>
				</motion.p>
			</div>
		</section>
	);
};

export default SectionWrapper(About, "about");
