import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { providerItems } from "../../data/providerItems";

export default function Toast({ provider, error, message }) {
	const [progress, setProgress] = useState(100);
	const [isVisible, setIsVisible] = useState(true);

	const providerItem = providerItems.find(
		(item) => item.name.toLowerCase() === provider.toLowerCase()
	);

	useEffect(() => {
		const duration = 3000; // 3 secondes
		const interval = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress <= 0) {
					clearInterval(interval);
					setIsVisible(false);
				}
				return prevProgress - 100 / (duration / 100);
			});
		}, 100);

		return () => clearInterval(interval);
	}, []);

	if (!isVisible) return null;

	return (
		<div
			className={`max-w-md w-full z-50 pointer-events-none transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div
				className="relative w-full p-4 bg-red-900 text-white rounded-lg shadow-lg pointer-events-auto transition-all duration-300 transform"
				style={{ transform: isVisible ? "translateY(0)" : "translateY(-20px)" }}
			>
				<div
					className="absolute top-0 left-0 w-full h-1 bg-red-600 transition-all duration-300 rounded-tl-lg rounded-tr-lg"
					style={{ width: `${progress}%` }}
				></div>
				<div className="flex items-center gap-3 text-red-500">
					{providerItem?.logo ? (
						<img
							src={providerItem.logo}
							alt={`${providerItem.name} Logo`}
							className="h-6 w-6"
						/>
					) : providerItem?.icon ? (
						<providerItem.icon className="h-6 w-6" />
					) : (
						<ExclamationTriangleIcon className="h-6 w-6" />
					)}
					<div>
						<p>
							<span className="font-bold">Error : </span>
							{message}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
