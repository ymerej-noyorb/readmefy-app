export const api = {
	url:
		import.meta.env.MODE === "development"
			? "http://localhost:3000/api"
			: "https://readmefy.app/api",
};
