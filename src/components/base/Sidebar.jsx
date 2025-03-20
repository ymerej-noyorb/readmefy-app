import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
	ChevronDownIcon,
	ChevronRightIcon,
	Cog6ToothIcon,
	ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { sidebarItems } from "../../data/sidebarItems";
import { useAuth } from "../../contexts/AuthContext";
import { route } from "../../utils/path";

const Sidebar = ({ isDisplayed }) => {
	if (!isDisplayed) return null;
	const { user, logout } = useAuth();
	const location = useLocation();
	const [openSections, setOpenSections] = useState({});
	const [userMenuOpen, setUserMenuOpen] = useState(false);

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

	const toggleUserMenu = () => {
		setUserMenuOpen(!userMenuOpen);
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
					{user && (
						<div className="flex flex-col gap-2">
							<div
								className="flex items-center gap-4 bg-dark-700 p-4 rounded-lg cursor-pointer"
								onClick={toggleUserMenu}
							>
								<img
									src={user.provider_avatar}
									alt={user.provider_username}
									className="w-10 h-10 rounded-full"
									draggable="false"
								/>
								<div className="flex flex-col flex-1">
									<span className="truncate max-w-[70px]">
										{user.provider_username.length > 15
											? `${user.provider_username.substring(0, 12)}...`
											: user.provider_username}
									</span>
								</div>
								<ChevronDownIcon
									className={`h-5 w-5 transition-transform ${
										userMenuOpen ? "rotate-180" : ""
									}`}
								/>
							</div>
							{userMenuOpen && (
								<div className="bg-dark-700 rounded-lg mt-1 overflow-hidden">
									<Link
										to={route.settings.dashboard.path}
										className="flex items-center gap-2 px-4 py-3 hover:bg-dark-800 transition-colors"
									>
										<Cog6ToothIcon className="h-5 w-5" />
										Settings
									</Link>
									<button
										className="flex items-center gap-2 w-full text-left px-4 py-3 cursor-pointer hover:bg-dark-800 transition-colors text-red-500"
										onClick={logout}
									>
										<ArrowRightOnRectangleIcon className="h-5 w-5" />
										Logout
									</button>
								</div>
							)}
						</div>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
