import React from "react";
import {
	BoltIcon,
	SwatchIcon,
	UserIcon,
	LockClosedIcon,
	SparklesIcon,
	UsersIcon,
	ShareIcon,
	BellAlertIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
	return (
		<section id="features" className="py-16 bg-dark-500">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl font-semibold mb-8">Features</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 grid-auto-rows-[300px]">
					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold mb-2 flex items-center">
							<BoltIcon className="size-[52px] mr-4 text-orange-200" />
							Instantly Generate Pro READMEs
						</h3>
						<p className="mt-6  font-serif">
							Just drop your public repository URL, and Readmefy will craft a
							sleek, professional README in seconds-effortless and impactful.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<UsersIcon className="size-[52px] mr-4 text-orange-200" />
							Real-Time Collaboration
						</h3>
						<p className="mt-6 font-serif">
							Work together on a README in real time. Invite teammates and edit
							collaboratively.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<ShareIcon className="size-[52px] mr-4 text-orange-200" />
							Share & Export
						</h3>
						<p className="mt-6 font-serif">
							Generate a shareable link or export your README as a Markdown file
							with a single click.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<ClipboardDocumentIcon className="size-[52px] mr-4 text-orange-200" />
							README Templates
						</h3>
						<p className="mt-6 font-serif">
							Choose from a variety of templates to quickly get started with a
							high-quality README.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<SparklesIcon className="size-[52px] mr-4 text-orange-200" />
							AI-Optimized for Perfection
						</h3>
						<p className="mt-6 font-serif">
							Take your README to the next level with AI-powered
							enhancements-improving clarity, structure, and engagement
							instantly.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<LockClosedIcon className="size-[52px] mr-4 text-orange-200" />
							Securely Generate Private READMEs
						</h3>
						<p className="mt-6 font-serif">
							Install Readmefy via npm and generate professional READMEs
							directly from your local repository.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<BellAlertIcon className="size-[52px] mr-4 text-orange-200" />
							Auto-Update with GitHub Actions
						</h3>
						<p className="mt-6 font-serif">
							Keep your README up to date automatically with a GitHub Actions
							workflow.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<UserIcon className="size-[52px] mr-4 text-orange-200" />
							Smart GitHub Profile README
						</h3>
						<p className="mt-6 font-serif">
							Provide your GitHub profile URL, and let Readmefy analyze your
							public data to craft a personalized README that truly represents
							you.
						</p>
					</div>

					<div className="p-6 shadow-lg rounded-lg bg-dark-900 hover:bg-dark-800 transition">
						<h3 className="text-2xl font-bold flex items-center">
							<SwatchIcon className="size-[52px] mr-4 text-orange-200" />
							Full Customization, Total Control
						</h3>
						<p className="mt-6 font-serif">
							Use Readmefy's intuitive editor to build a README from
							scratch-tailor it to your exact needs with ease.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
