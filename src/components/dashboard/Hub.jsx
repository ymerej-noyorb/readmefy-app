import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Hub() {
	const { user } = useAuth();
	return (
		<div>
			<h1>Welcome, {user?.provider_username} !</h1>
		</div>
	);
}
