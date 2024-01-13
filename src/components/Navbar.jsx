import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { styles } from "../styles";
import { navLinks } from "../constants";
const Navbar = () => {
	const [active, setActive] = useState("");
	// tracks which part of the page user is on

	const [toggle, setToggle] = useState(false);
	// for menu toggling on mobile devices

	return (
		<nav className="h-20 bg-primary fixed bg-transparent z-20 top-0 left-0 right-0">
			<div
				className={`h-full w-full flex items-center justify-between max-w-7xl mx-auto relative bg-transparent ${styles.paddingX}`}
			>
				<Link
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
						<span className="hidden md:block"> | &nbsp; Personal Website</span>
					</p>
				</Link>
				<ul className="hidden w-1/2 max-w-[300px] sm:flex justify-between gap-10">
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
        { toggle && (
          <div className="absolute right-6 -bottom-[200%] w-[140px] rounded-xl h-[160px] pl-6 py-6 black-gradient z-10">
            <ul className="flex flex-col justify-between h-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  } }
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
