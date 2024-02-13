import {
	mobile,
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
	webpic,
	charity,
	techimg1,
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
		title: "Collaborating with Clients:",
		text: "When i was building the charity application, I actively engaged with clients to understand their needs and vision, fostering open communication and collaboration throughout the development process.",
		icon: techimg1,
	},
	{
		title: "Conducting User Testing",
		text: "When designing the perfume e-commerce website I conducted comprehensive user testing to gather insights and feedback, ensuring that products and websites are user-friendly and intuitive.",
		icon: techimg1,
	},
	{
		title: "Feedback Sessions with Clients",
		text: "With the charity website, I facilitated feedback sessions with clients to review progress, address concerns, and incorporate feedback into project iterations, ensuring alignment with client expectations.",
		icon: techimg1,
	},
	{
		title: "Working Under Pressure and Meeting Deadlines:",
		text: "When building the perfume and charity websites i had to manage my workload effectively, and map out each task in order meeting project deadlines with precision and efficiency.",
		icon: techimg1,
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

const projects = [
	{
		name: "Website for a Real charity",
		description:
			"Collaborated with the charity (Somali Parents) to redesign their website and enhance user experience.I implemented modern design principles and responsive web design techniques using React JS and tailwind CSS to ensure accessibility across devices. I integrated donation and volunteer management systems to streamline the operations of the charity. Conducted user testing and feedback sessions to iterate and improve the functionality and usability of the website.",
		tags: [
			{
				name: "user-testing",
				color: "blue-text-gradient",
			},
			{
				name: "client feedback",
				color: "green-text-gradient",
			},
			{
				name: "agile methodology",
				color: "pink-text-gradient",
			},
		],
		image: charity,
		source_code_link:
			"https://github.com/AbdullahIsmail2/SomaliParents-Redesign",
		web_tag: "https://somaliparents.co.uk/",
	},
	{
		name: "Real-Time Chat App",
		description:
			"I engineered a dynamic real-time chat application using HTML, CSS, and React.js, powered by Firebase and ChatEngine. This platform also has user sign in authenticatio. I have enabled seamless communication with real-time updates, facilitating instant messaging, file attachments, and image sharing. ",
		tags: [
			{
				name: "RESTful API",
				color: "green-text-gradient",
			},
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "realtime",
				color: "pink-text-gradient",
			},
		],
		image: chatapp,
		source_code_link: "https://github.com/AbdullahIsmail2/Real-Time-ChatApp",
		web_tag: "https://www.mychatapp.co.uk/",
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
		web_tag: "https://arome-d-ayman.co.uk/",
	},
	{
		name: "Classical Snake Game",
		description:
			"I crafted a classic Snake Game using HTML, CSS, and JavaScript, players navigate the snake through a grid, consuming food to grow longer while avoiding collisions. The game features responsive design, CSS animations, and JavaScript logic for smooth interactivity and scoring",
		tags: [
			{
				name: "problem-solving",
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
		web_tag: "https://classicalsnakegame.netlify.app/",
	},
];

export { services, technologies, projects };
