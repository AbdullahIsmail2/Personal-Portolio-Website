import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";
import Skills from "./components/Skills";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-50 bg-primary ">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
			</div>
			<About />
			<Tech />
			<Works />
			<Skills />
			<div className="relative z-0">
				<div className="relative z-[20]">
					<Contact />
				</div>
				<div className="absolute right-0 left-0 top-0 bottom-0 z-[2]">
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
