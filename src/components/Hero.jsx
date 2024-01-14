import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="mt-[120px] min-h-screen w-full  ">
			<div
				className={`flex flex-row  gap-5 ${styles.paddingX} max-w-7xl m-auto`}
			>
				<div className="flex flex-col items-center mt-2">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient"></div>
				</div>
				<div className="flex flex-col gap-4">
					<h1 className={`${styles.heroHeadText}  text-white`}>
						Hi, I'm <span className="text-[#915eff]">Abdullah</span>
					</h1>
					<h3 className={`${styles.heroSubText}`}>
						A Front-End Developer crafting modern websites{" "}
						<br className="hidden sm:block" /> with cutting-edge technologies
						and stunning UIs
					</h3>
				</div>
			</div>

      <ComputersCanvas />
		</section>
	);
};

export default Hero;
