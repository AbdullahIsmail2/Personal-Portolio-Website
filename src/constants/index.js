import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	git,
	perfumeproj,
	chatapp,
	snake,
	webpic
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Communication",
		text: "Effective verbal and written communication",
		icon: web,
	},
	{
		title: "Problem-Solving",
		text: "Analytical and creative approach to challenges",
		icon: mobile,
	},
	{
		title: "Adaptability",
		text: "Quick learner and open to new technologies",
		icon: backend,
	},
	{
		title: "Attention to Detail",
		text: "Ensuring high-quality code and user interfaces",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	// {
	//   name: "TypeScript",
	//   icon: typescript,
	// },
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Git",
		icon: git,
	},
];

const experiences = [
	{
		title: "Education",
		company_name: "",
		icon: '',
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: 'tesla',
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: 'shopify',
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: 'meta',
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Real-Time Chat App",
		description:
			"I engineered a dynamic real-time chat application using HTML, CSS, and React.js, powered by Firebase and ChatEngine. This platform enables seamless communication with real-time updates, facilitating instant messaging, file attachments, and image sharing. ",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "rest api",
				color: "green-text-gradient",
			},
			{
				name: "realtime",
				color: "pink-text-gradient",
			},
		],
		image: chatapp,
		source_code_link: "https://github.com/AbdullahIsmail2/Real-Time-ChatApp",
		web_tag: 'https://www.mychatapp.co.uk/'
	
	},
	{
		name: "Arome d'Ayman",
		description:
			"I developed a sleek e-commerce platform for my friend Ayman's side business, featuring modern design and seamless functionality. Using React.js and tailwind CSS, the site offers users an engaging browsing experience, showcasing Ayman's fragrances with elegant visuals and mobile-friendly design..",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "responsive",
				color: "pink-text-gradient",
			},
		],
		image: perfumeproj,
		source_code_link: "https://github.com/abdullahismail2/perfume-project",
		web_tag: 'https://arome-d-ayman.co.uk/'
	},
	{
		name: "Classical Snake Game",
		description:
			"I crafted a classic Snake Game using HTML, CSS, and JavaScript, with intuitive controls and dynamic gameplay, players navigate the snake through a grid, consuming food to grow longer while avoiding collisions. The game features responsive design, CSS animations, and JavaScript logic for smooth interactivity and scoring",
		tags: [
			{
				name: "problems-solving",
				color: "blue-text-gradient",
			},
			{
				name: "algorithmic thinking",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: snake,
		source_code_link: "https://github.com/AbdullahIsmail2/snake-game",
		web_tag: 'https://classicalsnakegame.netlify.app/'
	}
];

export { services, technologies, experiences, testimonials, projects };
