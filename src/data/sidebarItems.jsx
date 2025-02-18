import {
	FolderIcon,
	UserIcon,
	DocumentIcon,
	PencilIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export const sidebarItems = [
	{
		title: "Repository",
		icon: FolderIcon,
		path: "/hub/repository",
		subItems: [
			{ title: "New Repository", path: "/hub/repository/tool" },
			{ title: "Manage Repositories", path: "/hub/repository" },
		],
	},
	{
		title: "Profile",
		icon: UserIcon,
		path: "/hub/profile",
		subItems: [
			{ title: "New Profile", path: "/hub/profile/tool" },
			{ title: "Manage Profiles", path: "/hub/profile" },
		],
	},
	{
		title: "Template",
		icon: DocumentIcon,
		path: "/hub/template",
		subItems: [
			{ title: "New Template", path: "/hub/template/tool" },
			{ title: "Manage Templates", path: "/hub/template" },
		],
	},
	{
		title: "Editor",
		icon: PencilIcon,
		path: "/hub/editor",
		subItems: [
			{ title: "New Editor", path: "/hub/editor/tool" },
			{ title: "Manage Editors", path: "/hub/editor" },
		],
	},
	{
		title: "Settings",
		icon: Cog6ToothIcon,
		path: "/hub/settings",
		subItems: [],
	},
];
