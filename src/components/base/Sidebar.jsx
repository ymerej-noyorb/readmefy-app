import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
	ChevronDownIcon,
	ChevronRightIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { sidebarItems } from "../../data/sidebarItems";

const Sidebar = ({ isDisplayed }) => {
	if (!isDisplayed) return null;

	const location = useLocation();
	const [openSections, setOpenSections] = useState({});

	useEffect(() => {
		const newOpenSections = {};
		sidebarItems.forEach((item) => {
			newOpenSections[item.path] = location.pathname.startsWith(item.path);
		});
		setOpenSections(newOpenSections);
	}, [location]);

	const toggleSection = (path) => {
		setOpenSections((prev) => ({
			...prev,
			[path]: !prev[path],
		}));
	};

	return (
		<div className="w-64 p-8 bg-dark-600 flex flex-col min-h-[calc(100vh-87px)] top-[87px] fixed">
			<h2 className="text-xl font-bold mb-6">Sources</h2>
			<ul className="space-y-6 flex-1">
				{sidebarItems.map((item) => (
					<li key={item.path}>
						<button
							onClick={() => toggleSection(item.path)}
							className="w-full text-left flex items-center hover:text-blue-500 cursor-pointer"
						>
							<item.icon className="h-5 w-5 mr-2" />
							<span className="font-semibold">{item.title}</span>
							{item.subItems.length > 0 &&
								(openSections[item.path] ? (
									<ChevronDownIcon className="h-5 w-5 ml-auto" />
								) : (
									<ChevronRightIcon className="h-5 w-5 ml-auto" />
								))}
						</button>
						{item.subItems.length > 0 && (
							<ul
								className={`pt-4 pl-4 space-y-4 ${
									openSections[item.path] ? "block" : "hidden"
								}`}
							>
								{item.subItems.map((subItem) => (
									<li key={subItem.path}>
										<Link to={subItem.path} className="hover:text-blue-500">
											{subItem.title}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>

			<hr />

			<ul className="mt-6">
				<li className="mt-auto">
					<div className="flex flex-col items-start">
						<Link
							to="/login"
							className="flex items-center justify-center bg-orange-200 text-dark-500 font-serif text-xl w-full py-2 px-6 rounded-lg shadow-lg hover:bg-orange-300 transition"
						>
							<span>Login</span>
							<ShieldCheckIcon className="size-6 ml-2" />
						</Link>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
