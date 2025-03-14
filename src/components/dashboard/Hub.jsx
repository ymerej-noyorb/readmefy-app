import React from "react";
export default function Hub({ user }) {
	return (
		<div>
			<h1>Welcome, {user?.provider_username} !</h1>
		</div>
	);
}
