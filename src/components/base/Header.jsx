import React from "react";

export default function Header({ isFixed }) {
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
						{/* TODO: Replace with a logout if user is logged in */}
						<li>
							<a href="/login" className="text-white hover:text-blue-500">
								Login
							</a>
						</li>
						{/* TODO: Hide if user is logged out */}
						<li>
							<a href="/dashboard" className="text-white hover:text-blue-500">
								Dashboard
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
