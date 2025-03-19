import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { providerItems } from "../data/providerItems";
import { useAuth } from "../contexts/AuthContext";
import { setAuthLocalStorage, clearAuthLocalStorage } from "../utils/storage";
import Toast from "../components/base/Toast";
import { removeParams } from "../utils/path";

export default function Login() {
	const { login } = useAuth();
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const location = useLocation();
	const [toastState, setToastState] = useState({
		showToast: false,
		provider: null,
		error: null,
		message: null,
	});

	useEffect(() => {
		const handleAuthCallback = () => {
			const params = new URLSearchParams(location.search);
			const providerParam = params.get("provider");
			const errorParam = params.get("error");
			const messageParam = params.get("message");

			if (providerParam && errorParam && messageParam) {
				setToastState({
					showToast: true,
					provider: providerParam,
					error: errorParam,
					message: messageParam,
				});
				removeParams(params);
				clearAuthLocalStorage();
				setIsAuthenticating(false);
			}
		};

		handleAuthCallback();
	}, [location]);

	const handleLoginClick = (url) => {
		if (isAuthenticating) return;
		setIsAuthenticating(true);
		setAuthLocalStorage();
		login(url);
	};

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
					<div className="flex flex-wrap gap-4">
						{providerItems.map((provider, index) => (
							<button
								key={index}
								onClick={() =>
									!provider.disabled && handleLoginClick(provider.url)
								}
								disabled={isAuthenticating || provider.disabled}
								className={`flex items-center ${
									provider.disabled
										? "opacity-50 cursor-not-allowed"
										: "cursor-pointer"
								} ${
									provider.backgroundColor
								} font-serif text-dark-500 text-base w-fit py-2 px-6 rounded-lg shadow-lg ${
									provider.disabled ? "" : provider.hoverColor
								} transition ${
									isAuthenticating ? "opacity-50 cursor-not-allowed" : ""
								}`}
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
								{isAuthenticating
									? "Signing in..."
									: `Sign in with ${provider.name}`}
							</button>
						))}
					</div>
					{toastState.showToast && (
						<Toast
							provider={toastState.provider}
							error={toastState.error}
							message={toastState.message}
						/>
					)}
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
