import React from "react";
import { featureItems } from "../../data/featureItems";

export default function Features() {
	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl font-semibold mb-8">Features</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 grid-auto-rows-[300px]">
					{featureItems.map((feature, index) => (
						<div
							key={index}
							className="p-6 shadow-lg rounded-lg bg-dark-500 hover:bg-dark-600 transition"
						>
							<h3 className="text-2xl font-bold mb-2 flex items-center">
								<feature.icon className="min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] mr-4 text-orange-200" />
								{feature.title}
							</h3>
							<p className="mt-6 font-serif">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
