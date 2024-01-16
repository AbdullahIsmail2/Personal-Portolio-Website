import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="min-h-screen w-full relative flex items-center justify-start border-3 border-red-600">
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915EFF]">Abdullah</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						A Front-End Developer crafting modern websites{" "}
						<br className="hidden sm:block" /> with cutting-edge technologies
						and stunning UIs
					</p>
				</div>
			</div>

			<ComputersCanvas />

      <div className="absolute w-full bottom-32 xs:bottom-10 flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
		</section>
	);
};

export default Hero;
