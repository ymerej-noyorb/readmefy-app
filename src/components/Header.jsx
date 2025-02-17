import React from "react";

export default function Header() {
	return (
		<header className="bg-dark-500 p-6">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img
						className="w-[36px]"
						src="https://i.imgur.com/uOFlcFG.png"
						alt="Readmefy Logo"
						draggable="false"
					/>
					<h1 className="text-3xl font-semibold">Readmefy</h1>
				</div>
			</div>
		</header>
	);
}
