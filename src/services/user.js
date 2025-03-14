export const getUserData = async () => {
	try {
		const response = await fetch("/api/user/me", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.message || "Failed to fetch user data");
		}
		return data.data.user;
	} catch (error) {
		console.error("Error fetching user data:", error);
		throw error;
	}
};
