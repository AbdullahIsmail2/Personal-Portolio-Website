import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

import { textVariant } from "../utils/motion";

const SingleWE = ({
	index,
	title,
	company_name,
	icon,
	iconBg,
	date,
	points,
}) => (
	<VerticalTimelineElement
		contentStyle={{ background: "#1d1836", color: "#fff" }}
		contentArrowStyle={{ borderRight: "7px solid #232651" }}
		date={date}
		iconStyle={{ background: iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={icon}
					alt={company_name}
					className="w-[60%] h-[60%] object-contain"
				/>
			</div>
		}
	>
		<h4 className="text-white text-[24px] font-bold">{title}</h4>
		<span
			className="text-secondary text-[16px] font-semibold"
			style={{ margin: 0 }}
		>
			{company_name}
		</span>
		<ul className="mt-5 list-disc ml-5 space-y-2 mb-5">
			{points.map((point, index) => (
				<li
					key={`experience-point-${index}`}
					className="text-white-100 text-[14px] pl-1 tracking-wider"
				>
					{point}
				</li>
			))}
		</ul>
		{/* <span>{date}</span> */}
	</VerticalTimelineElement>
);

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()} className="text-center mb-16">
				<h4 className={`${styles.sectionSubText} mb-2`}>
					What i have done so far
				</h4>
				<h2 className={`${styles.sectionHeadText}`}>Work experience</h2>
			</motion.div>

			<div>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<SingleWE {...experience} index />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
