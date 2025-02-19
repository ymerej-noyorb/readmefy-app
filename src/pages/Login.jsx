import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Login() {
	const api = "http://localhost:3000";

	return (
		<section className="flex justify-center items-center min-h-[inherit]">
			<div className="max-w-7xl mx-auto flex justify-between md:flex-row items-center gap-12">
				<div className="flex flex-col gap-6">
					<h2 className="text-5xl font-bold mb-4">Welcome Back!</h2>
					<p className="text-xl mb-4  font-serif">
						Please sign in using one of the following methods to continue.
					</p>
					<p className="text-xl mb-6  font-serif">
						By signing in, you will gain access to your personalized dashboard,
						where you can manage your settings, projects, and collaborate with
						others.
					</p>
					<p className="text-xl mb-6  font-serif">
						We care about your privacy and security. You can securely log in
						with the following methods. We do not store your password or
						sensitive information.
					</p>
					<div className="flex gap-4">
						<a
							href={`${api}/api/auth/github`}
							className="flex items-center bg-orange-200 font-serif text-dark-500 text-base w-fit py-2 px-6 rounded-lg shadow-lg hover:bg-orange-300 transition"
						>
							<img
								src="https://www.svgrepo.com/show/512317/github-142.svg"
								alt="GitHub Logo"
								className="size-6 mr-2"
							/>
							Sign in with GitHub
						</a>
						<a
							href={`${api}/api/auth/gitlab`}
							className="flex items-center bg-white-200 font-serif text-dark-500 text-base w-fit py-2 px-6 rounded-lg shadow-lg hover:bg-white-300 transition"
						>
							<img
								src="https://www.svgrepo.com/show/448226/gitlab.svg"
								alt="GitLab Logo"
								className="size-6 mr-2"
							/>
							Sign in with GitLab
						</a>
						<a
							href={`${api}/api/auth/google`}
							className="flex items-center bg-white-200 font-serif text-dark-500 text-base w-fit py-2 px-6 rounded-lg shadow-lg hover:bg-white-300 transition"
						>
							<img
								src="https://www.svgrepo.com/show/475656/google-color.svg"
								alt="Google Logo"
								className="size-6 mr-2"
							/>
							Sign in with Google
						</a>
						<a
							href={`${api}/api/auth/email`}
							className="flex items-center bg-white-200 font-serif text-dark-500 text-base w-fit py-2 px-6 rounded-lg shadow-lg hover:bg-white-300 transition"
						>
							<EnvelopeIcon className="size-6 mr-2" />
							Sign in with Email
						</a>
					</div>
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
