import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { route } from "../../utils/path";
import {
	ChevronDownIcon,
	RectangleGroupIcon,
	Cog6ToothIcon,
	ArrowRightOnRectangleIcon,
	ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

export default function Header({ isFixed }) {
	const { user, logout } = useAuth();
	const [userMenuOpen, setUserMenuOpen] = useState(false);

	const toggleUserMenu = () => {
		setUserMenuOpen(!userMenuOpen);
	};

	return (
		<header
			className={`bg-dark-500 p-6 h-[87px] ${
				isFixed ? "fixed w-screen z-30" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<a href="/" className="flex items-center gap-3">
					<img
						className="w-[36px]"
						src="https://i.imgur.com/uOFlcFG.png"
						alt="Readmefy Logo"
						draggable="false"
					/>
					<h1 className="text-3xl font-semibold">Readmefy</h1>
				</a>
				<nav>
					<ul className="flex gap-6 items-center">
						{user ? (
							<>
								<li>
									<a
										href={route.dashboard}
										className="flex items-center gap-2 hover:text-blue-500"
									>
										<RectangleGroupIcon className="h-5 w-5" />
										Dashboard
									</a>
								</li>
								<li className="relative">
									<div
										className="flex items-center gap-2 cursor-pointer"
										onClick={toggleUserMenu}
									>
										<img
											src={user.provider_avatar}
											alt={user.provider_username}
											className="w-8 h-8 rounded-full"
											draggable="false"
										/>
										<ChevronDownIcon
											className={`h-4 w-4 transition-transform ${
												userMenuOpen ? "rotate-180" : ""
											}`}
										/>
									</div>
									{userMenuOpen && (
										<div className="absolute right-0 mt-2 bg-dark-700 rounded-lg overflow-hidden w-44 shadow-lg z-50">
											<a
												href={route.settings}
												className="flex items-center gap-2 px-4 py-2 hover:bg-dark-800 transition-colors"
											>
												<Cog6ToothIcon className="h-4 w-4" />
												Settings
											</a>
											<button
												onClick={logout}
												className="flex items-center gap-2 w-full text-left px-4 py-2 cursor-pointer hover:bg-dark-800 transition-colors text-red-500"
											>
												<ArrowRightOnRectangleIcon className="h-4 w-4" />
												Logout
											</button>
										</div>
									)}
								</li>
							</>
						) : (
							<li>
								<a
									href={route.login}
									className="flex items-center gap-2 hover:text-blue-500"
								>
									<ArrowLeftOnRectangleIcon className="h-5 w-5" />
									Login
								</a>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}
