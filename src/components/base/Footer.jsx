import React from "react";

export default function Footer({ isDisplayed }) {
	if (isDisplayed) return null;

	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-dark-500 py-8">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img
						className="w-[36px]"
						src="https://i.imgur.com/uOFlcFG.png"
						alt="Readmefy Logo"
						draggable="false"
					/>
					<p className="text-sm">
						© {currentYear} Readmefy - All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
