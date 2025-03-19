export const route = {
	home: "/",
	login: "/login",
	callback: "/login/callback",
	dashboard: "/dashboard",
	repository: "/dashboard/repository",
	profile: "/dashboard/profile",
	template: "/dashboard/template",
	editor: "/dashboard/editor",
	settings: "/dashboard/settings",
};

export const removeParams = (params) => {
	const paramsToRemove = ["provider", "error", "message"];
	paramsToRemove.forEach((param) => params.delete(param));

	const updatedUrl = `${window.location.pathname}${
		params.toString() ? "?" + params.toString() : ""
	}`;
	window.history.replaceState({}, "", updatedUrl);
};
