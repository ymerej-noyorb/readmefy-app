import { api } from "../utils/api";

export const providerItems = [
	{
		name: "GitHub",
		logo: "https://www.svgrepo.com/show/512317/github-142.svg",
		url: `${api.url}/auth/login?provider=github`,
		backgroundColor: "bg-orange-200",
		hoverColor: "hover:bg-orange-300",
	},
	{
		name: "GitLab",
		logo: "https://www.svgrepo.com/show/448226/gitlab.svg",
		url: `${api.url}/auth/login?provider=gitlab`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
	{
		name: "Discord",
		logo: "https://www.svgrepo.com/show/353655/discord-icon.svg",
		url: `${api.url}/auth/login?provider=discord`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
	{
		name: "Google",
		logo: "https://www.svgrepo.com/show/475656/google-color.svg",
		url: `${api.url}/auth/login?provider=google`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
];
