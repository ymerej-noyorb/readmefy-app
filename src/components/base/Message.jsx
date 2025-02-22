import React, { useEffect, useState } from "react";
import { providerItems } from "../../data/providerItems";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function Message({ data }) {
	const [success, setSuccess] = useState(false);
	const [provider, setProvider] = useState("Server");
	const [type, setType] = useState("error_server");
	const [message, setMessage] = useState("Internal server error");

	useEffect(() => {
		if (data) {
			setSuccess(data.success);
			setProvider(data.provider);
			setType(data.type);
			setMessage(data.message);
		}
	}, [data]);

	const currentProvider = providerItems.find((item) => item.name === provider);
	const currentProviderLogo = currentProvider?.logo;

	return (
		<span
			key={type}
			className={`flex items-center ${
				success ? "bg-green-900 text-green-500" : "bg-red-900 text-red-500"
			} font-serif text-base w-fit py-2 px-6 rounded-lg shadow-lg animate-bounce`}
		>
			{currentProvider ? (
				<img
					src={currentProviderLogo}
					alt={`${provider} Logo`}
					className="size-6 mr-2"
				/>
			) : (
				<ExclamationCircleIcon className="size-6 mr-2" />
			)}

			{message}
		</span>
	);
}
