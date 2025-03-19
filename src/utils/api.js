const base =
	import.meta.env.MODE === "development"
		? "http://readmefy.localhost/api"
		: "https://readmefy.app/api";

const endpoints = {
	login: "/auth/login",
	logout: "/auth/logout",
	user: "/user/me",
};

const url = {
	base: base,
	login: base + endpoints.login,
	logout: base + endpoints.logout,
	me: base + endpoints.user,
};

const request = async (
	endpoint,
	method = "GET",
	body = null,
	customHeaders = {},
	includeCredentials = true
) => {
	try {
		const fullUrl = endpoint.startsWith("http")
			? endpoint
			: `${base}${endpoint}`;

		const options = {
			method,
			headers: {
				"Content-Type": "application/json",
				...customHeaders,
			},
			credentials: includeCredentials ? "include" : "omit",
		};

		if (body && method !== "GET" && method !== "HEAD") {
			options.body = JSON.stringify(body);
		}

		const response = await fetch(fullUrl, options);
		const responseData = await response.json();

		return {
			...responseData,
			status: response.status,
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: error.message || "Internal server error",
			data: {},
			isNetworkError: true,
		};
	}
};

export const api = {
	endpoint: endpoints,
	url,
	request,
	get: (endpoint, customHeaders = {}) =>
		request(endpoint, "GET", null, customHeaders),
	post: (endpoint, body, customHeaders = {}) =>
		request(endpoint, "POST", body, customHeaders),
	put: (endpoint, body, customHeaders = {}) =>
		request(endpoint, "PUT", body, customHeaders),
	delete: (endpoint, customHeaders = {}) =>
		request(endpoint, "DELETE", null, customHeaders),
	patch: (endpoint, body, customHeaders = {}) =>
		request(endpoint, "PATCH", body, customHeaders),
};
