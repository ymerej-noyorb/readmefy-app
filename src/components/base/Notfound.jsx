import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function NotFound() {
	return (
		<div className="w-full flex justify-center items-center gap-12">
			<div className="w-full md:w-1/3 flex justify-end">
				<img
					className="w-xs"
					src="https://i.imgur.com/uOFlcFG.png"
					alt="Readmefy Logo"
					draggable="false"
				/>
			</div>
			<div className="flex flex-col gap-6">
				<h1 className="text-6xl font-bold text-red-500">404</h1>
				<p className="text-xl font-serif">
					Oops! The page you're looking for doesn't exist.
				</p>
				<a
					href="/dashboard"
					className="flex bg-orange-200 text-dark-500 font-serif text-xl w-fit py-2 px-6 rounded-lg shadow-lg hover:bg-orange-300 transition"
				>
					Go to dashboard
					<HomeIcon className="size-6 ml-2" />
				</a>
			</div>
		</div>
	);
}
