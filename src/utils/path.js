export const route = {
	home: "/",
	login: "/login",
	callback: "/login/callback",
	dashboard: "/dashboard",
	repository: {
		path: "/repository",
		tool: "/repository/tool",
		dashboard: {
			path: "/dashboard/repository",
			tool: "/dashboard/repository/tool",
		},
	},
	profile: {
		path: "/profile",
		tool: "/profile/tool",
		dashboard: {
			path: "/dashboard/profile",
			tool: "/dashboard/profile/tool",
		},
	},
	template: {
		path: "/template",
		tool: "/template/tool",
		dashboard: {
			path: "/dashboard/template",
			tool: "/dashboard/template/tool",
		},
	},
	editor: {
		path: "/editor",
		tool: "/editor/tool",
		dashboard: {
			path: "/dashboard/editor",
			tool: "/dashboard/editor/tool",
		},
	},
	settings: {
		path: "/settings",
		dashboard: {
			path: "/dashboard/settings",
		},
	},
};

export const removeParams = (params) => {
	const paramsToRemove = ["provider", "error", "message"];
	paramsToRemove.forEach((param) => params.delete(param));

	const updatedUrl = `${window.location.pathname}${
		params.toString() ? "?" + params.toString() : ""
	}`;
	window.history.replaceState({}, "", updatedUrl);
};
