import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const providerItems = [
	{
		name: "GitHub",
		logo: "https://www.svgrepo.com/show/512317/github-142.svg",
		url: `http://localhost:3000/api/auth/github`,
		backgroundColor: "bg-orange-200",
		hoverColor: "hover:bg-orange-300",
	},
	{
		name: "GitLab",
		logo: "https://www.svgrepo.com/show/448226/gitlab.svg",
		url: `http://localhost:3000/api/auth/gitlab`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
	{
		name: "Google",
		logo: "https://www.svgrepo.com/show/475656/google-color.svg",
		url: `http://localhost:3000/api/auth/google`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
	{
		name: "Email",
		icon: EnvelopeIcon,
		url: `http://localhost:3000/api/auth/email`,
		backgroundColor: "bg-white-200",
		hoverColor: "hover:bg-white-300",
	},
];
