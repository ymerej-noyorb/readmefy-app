import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

export default function Toast({ message }) {
	const [progress, setProgress] = useState(100);
	const [error, setError] = useState("");
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (message) {
			switch (message) {
				case "github_auth_failed" || "invalid_token":
					setError("GitHub authentication failed.");
					break;
				case "user_not_found":
					setError("User not found, please check your GitHub account.");
					break;
				case "server_error":
					setError("An error occurred, please try again later.");
					break;
				default:
					setError("An unknown error occurred, please try again.");
			}
		}
	}, [message]);

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
		//TODO: put error message to top right corner
		<div
			className={`fixed inset-0 flex items-center justify-center z-50 pointer-events-none transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div
				className="relative max-w-md w-full p-4 bg-red-900 text-white rounded-lg shadow-lg pointer-events-auto transition-all duration-300 transform"
				style={{ transform: isVisible ? "translateY(0)" : "translateY(-20px)" }}
			>
				//TODO: add a rounded border to progression bar
				<div
					className="absolute top-0 left-0 w-full h-1 bg-red-600 transition-all duration-300"
					style={{ width: `${progress}%` }}
				></div>
				<div className="flex items-center gap-3">
					<ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
					<div>
						<p>
							<span className="font-bold">Error : </span>
							{error}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
