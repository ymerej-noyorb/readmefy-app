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
		path: "/dashboard/repository",
		subItems: [
			{ title: "New Repository", path: "/dashboard/repository/tool" },
			{ title: "Manage Repositories", path: "/dashboard/repository" },
		],
	},
	{
		title: "Profile",
		icon: UserIcon,
		path: "/dashboard/profile",
		subItems: [
			{ title: "New Profile", path: "/dashboard/profile/tool" },
			{ title: "Manage Profiles", path: "/dashboard/profile" },
		],
	},
	{
		title: "Template",
		icon: DocumentIcon,
		path: "/dashboard/template",
		subItems: [
			{ title: "New Template", path: "/dashboard/template/tool" },
			{ title: "Manage Templates", path: "/dashboard/template" },
		],
	},
	{
		title: "Editor",
		icon: PencilIcon,
		path: "/dashboard/editor",
		subItems: [
			{ title: "New Editor", path: "/dashboard/editor/tool" },
			{ title: "Manage Editors", path: "/dashboard/editor" },
		],
	},
	{
		title: "Settings",
		icon: Cog6ToothIcon,
		path: "/dashboard/settings",
		subItems: [],
	},
];
