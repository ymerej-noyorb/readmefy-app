export const api = {
	url:
		import.meta.env.MODE === "development"
			? "http://readmefy.localhost/api"
			: "https://readmefy.app/api",
};
