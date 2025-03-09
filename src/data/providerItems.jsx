import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { api } from "../utils/api";

export const providerItems = [
	{
		name: "GitHub",
		logo: "https://www.svgrepo.com/show/512317/github-142.svg",
		url: `${api.url}/auth/github`,
		backgroundColor: "bg-orange-200",
		hoverColor: "hover:bg-orange-300",
	},
	{
		name: "GitLab",
		logo: "https://www.svgrepo.com/show/448226/gitlab.svg",
		url: `${api.url}/auth/gitlab`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
	{
		name: "Discord",
		logo: "https://www.svgrepo.com/show/353655/discord-icon.svg",
		url: `${api.url}/auth/discord`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
	{
		name: "Google",
		logo: "https://www.svgrepo.com/show/475656/google-color.svg",
		url: `${api.url}/auth/google`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
	{
		name: "Email",
		icon: EnvelopeIcon,
		url: `${api.url}/auth/email`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
];
