import React from "react";

export default function Loading({ status }) {
	return (
		<div className="flex flex-col items-center">
			<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
			{status && <p className="text-lg">{status}</p>}
		</div>
	);
}
