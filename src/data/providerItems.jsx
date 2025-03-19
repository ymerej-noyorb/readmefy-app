import { api } from "../utils/api";

export const providerItems = [
	{
		name: "GitHub",
		logo: "https://www.svgrepo.com/show/512317/github-142.svg",
		url: `${api.url.login}?provider=github`,
		backgroundColor: "bg-orange-200",
		hoverColor: "hover:bg-orange-300",
		disabled: false,
	},
	{
		name: "GitLab",
		logo: "https://www.svgrepo.com/show/448226/gitlab.svg",
		url: `${api.url.login}?provider=gitlab`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
		disabled: true,
	},
	{
		name: "Discord",
		logo: "https://www.svgrepo.com/show/353655/discord-icon.svg",
		url: `${api.url.login}?provider=discord`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
		disabled: true,
	},
	{
		name: "Google",
		logo: "https://www.svgrepo.com/show/475656/google-color.svg",
		url: `${api.url.login}?provider=google`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
		disabled: true,
	},
];
