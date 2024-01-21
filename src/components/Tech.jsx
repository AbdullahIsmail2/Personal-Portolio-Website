import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";

import { technologies } from "../constants";
import { styles } from "../styles";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
	return (
		<section className="flex flex-col mb-32 w-full ">
			<h3 className={`${styles.sectionHeadText} mb-20`}>
				Technologies & Key Skills
			</h3>
			<div className="flex flex-row flex-wrap gap-10 gap-y-20 ">
				{technologies.map((technology) => (
					<div className="w-28 h-28 " key={technology.name}>
						<BallCanvas icon={technology.icon} />
						<p className="text-center mt-6 font-semibold text-[17px]">
							{technology.name}
						</p>
					</div>
				))}
			</div>
			<div className="mt-40 text-white">
				<h3 className={`${styles.heroSubText} mb-12`}>Soft Skills</h3>
				<div className="flex flex-wrap gap-10">
					{services.map((service, index) => (
						<ServiceCard key={service.title} index={index} {...service} />
					))}
				</div>
			</div>
		</section>
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

export default SectionWrapper(Tech, '');
