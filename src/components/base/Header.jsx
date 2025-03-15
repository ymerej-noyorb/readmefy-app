import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Header({ isFixed }) {
	const { user, logout } = useAuth();
	return (
		<header
			className={`bg-dark-500 p-6 h-[87px] ${isFixed ? "fixed w-screen" : ""}`}
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
					<ul className="flex gap-6">
						{user ? (
							<>
								<li>
									<a
										href="/dashboard"
										className="text-white hover:text-blue-500"
									>
										Dashboard
									</a>
								</li>
								<li>
									<button
										onClick={logout}
										className="text-white hover:text-red-500"
									>
										Logout
									</button>
								</li>
							</>
						) : (
							<li>
								<a href="/login" className="text-white hover:text-blue-500">
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
