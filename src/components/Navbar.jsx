import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { github, linkedin } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	// tracks which part of the page user is on

	const [toggle, setToggle] = useState(false);
	// for menu toggling on mobile devices

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 80) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		// Attach the event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]); // Now, the effect will re-run whenever 'scrolled' changes

	return (
		<nav
			className={`h-20 ${
				scrolled ? "bg-primary" : "bg-transparent"
			}  fixed z-50 top-0 left-0 right-0 `}
		>
			<div
				className={`h-full w-full flex items-center justify-between max-w-7xl mx-auto relative bg-transparent ${styles.paddingX}`}
			>
				{/* <Link
					to={"/"}
					className="flex gap-2 items-center"
					onClick={() => {
						window.scrollTo(0, 0);
						setActive("");
					}}
				>
					<img src={Logo} className="h-9 w-9 object-contain" alt="logo" />
					<p className="font-bold flex-grow flex cursor-pointer text-[18px]">
						Abdullah &nbsp;{" "}
						<span className="hidden lg:block"> | &nbsp; Personal Website</span>
					</p>
				</Link> */}
				<div className="h-full flex items-center justify-center gap-4 xs:gap-6">
					<img
						src={github}
						className="h-[35%] xs:h-1/2 cursor-pointer"
						onClick={() =>
							window.open("https://github.com/abdullahismail2", "_blank")
						}
					/>
					<img
						src={linkedin}
						className="h-[30%] xs:h-[40%] cursor-pointer"
						onClick={() =>
							window.open(
								"https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
								"_blank"
							)
						}
					/>
				</div>

				<ul className="hidden w-1/3 max-w-[300px] sm:flex justify-between gap-5 md:gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							onClick={() => setActive(link.title)}
							className={`${
								active === link.id ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
				<img
					src={toggle ? Close : Menu}
					alt="menu"
					className={`${
						toggle ? "h-[20px]" : "h-[15px]"
					} cursor-pointer sm:hidden`}
					// change the styles based on if menu or close img is shown
					onClick={() => setToggle(!toggle)}
				/>
				{toggle && (
					<div className="absolute right-6 -bottom-[200%] w-[140px] rounded-xl h-[160px] pl-6 py-6 black-gradient z-10">
						<ul className="flex flex-col justify-between h-full">
							{navLinks.map((link) => (
								<li
									key={link.id}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
									className={`${
										active === link.id ? "text-white" : "text-secondary"
									} font-poppins text-[16px] font-medium cursor-pointer`}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
