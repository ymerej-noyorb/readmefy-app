import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { providerItems } from "../data/providerItems";
import Toast from "../components/base/Toast";

export default function Login() {
	const [errorMessage, setErrorMessage] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const errorParam = params.get("error");

		if (errorParam) {
			setErrorMessage(errorParam);

			params.delete("error");
			navigate(
				{ pathname: location.pathname, search: params.toString() },
				{ replace: true }
			);
		}
	}, [location]);

	return (
		<section className="flex justify-center items-center min-h-[inherit]">
			<div className="max-w-7xl mx-auto flex justify-between md:flex-row items-center gap-12">
				<div className="flex flex-col gap-6">
					<h2 className="text-5xl font-bold mb-4">Welcome Back!</h2>
					<p className="text-xl mb-4 font-serif">
						Please sign in using one of the following methods to continue.
					</p>
					<p className="text-xl mb-6 font-serif">
						By signing in, you will gain access to your personalized dashboard,
						where you can manage your settings, projects, and collaborate with
						others.
					</p>
					<p className="text-xl mb-6 font-serif">
						We care about your privacy and security. You can securely log in
						with the following methods. We do not store your password or
						sensitive information.
					</p>

					{errorMessage && <Toast message={errorMessage} />}

					<div className="flex gap-4">
						{providerItems.map((provider, index) => (
							<a
								key={index}
								href={provider.url}
								className={`flex items-center ${provider.backgroundColor} font-serif text-dark-500 text-base w-fit py-2 px-6 rounded-lg shadow-lg ${provider.hoverColor} transition`}
							>
								{provider.logo ? (
									<img
										src={provider.logo}
										alt={`${provider.name} Logo`}
										className="size-6 mr-2"
									/>
								) : (
									<provider.icon className="size-6 mr-2" />
								)}
								Sign in with {provider.name}
							</a>
						))}
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
