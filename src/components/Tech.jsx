import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";

import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
	return (
		<section className="flex flex-col w-full">
			<h5 className={`${styles.sectionSubText} mb-4`}>Skills</h5>
			<h3 className={`${styles.sectionHeadText} mb-20`}>Technologies.</h3>
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
		</section>
	);
};

export default SectionWrapper(Tech, "");
