import React from "react";

export default function Header({ isFixed }) {
	return (
		<header className={`bg-dark-500 p-6 ${isFixed ? "fixed w-screen" : ""}`}>
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
						<li>
							<a href="/hub" className="text-white hover:underline">
								Hub
							</a>
						</li>
						<li>
							<a href="/login" className="text-white hover:underline">
								Login
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
