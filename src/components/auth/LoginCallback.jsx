import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { route } from "../../utils/path";
import {
	clearAuthLocalStorage,
	getAuthLocalStorage,
} from "../../utils/storage";
import Loading from "../base/Loading";

export default function AuthCallback() {
	const { me } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [state, setState] = useState({
		status: "Verifying authentication...",
		isLoading: true,
		isValidCallback: false,
	});

	useEffect(() => {
		const handleAuthentication = async () => {
			try {
				const params = new URLSearchParams(location.search);
				const providerParam = params.get("provider");
				const errorParam = params.get("error");
				const messageParam = params.get("message");
				const isLegitimateCallback = Boolean(
					(providerParam && (errorParam || messageParam)) ||
						getAuthLocalStorage() === "true"
				);

				if (!isLegitimateCallback) {
					navigate(route.login, { replace: true });
					return;
				}

				if (providerParam && errorParam && messageParam) {
					navigate(
						`${route.login}?provider=${providerParam}&error=${errorParam}&message=${messageParam}`,
						{ replace: true }
					);
					return;
				} else {
					try {
						await me();
						setState((prev) => ({
							...prev,
							status: "Authentication successful! Redirecting...",
							isValidCallback: true,
						}));
						clearAuthLocalStorage();
						setTimeout(() => navigate(route.dashboard), 500);
					} catch (err) {
						console.error(err);
						navigate(
							`${route.login}?provider=unknown&error=error&message=Authentication failed`,
							{ replace: true }
						);
					}
				}
			} catch (err) {
				console.error(err);
			}
		};

		handleAuthentication();
	}, [location, navigate, me]);

	if (!state.isValidCallback) return null;

	return (
		<section className="flex justify-center items-center min-h-[inherit]">
			<div className="max-w-md mx-auto text-center p-8">
				<Loading status={state.status} />
			</div>
		</section>
	);
}
