import React from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Hero() {
	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto flex justify-between md:flex-row items-center gap-12">
				<div className="w-full md:w-2/3 md:text-left flex flex-col gap-6">
					<h2 className="text-5xl font-bold mb-4">
						Generate Powerful READMEs in Seconds
					</h2>
					<p className="text-xl mb-6 font-serif">
						Say goodbye to boring documentation! Readmefy creates polished,
						AI-enhanced READMEs instantly-so you can focus on building, not
						writing.
					</p>
					<a
						href="/dashboard"
						className="flex items-center bg-orange-200 text-dark-500 font-serif text-xl w-fit py-2 px-6 rounded-lg shadow-lg hover:bg-orange-300 transition"
					>
						Try It Now
						<CursorArrowRaysIcon className="size-6 ml-2" />
					</a>
				</div>

				<div className="w-full md:w-1/3 flex justify-end">
					<img
						className="w-xs"
						src="https://i.imgur.com/uOFlcFG.png"
						alt="Readmefy Logo"
						draggable="false"
					/>
				</div>
			</div>
		</section>
	);
}
