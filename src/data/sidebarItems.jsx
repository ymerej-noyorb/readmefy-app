import {
	FolderIcon,
	UserIcon,
	DocumentIcon,
	PencilIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { route } from "../utils/path";

export const sidebarItems = [
	{
		title: "Repository",
		icon: FolderIcon,
		path: route.repository,
		subItems: [
			{ title: "New Repository", path: "/dashboard/repository/tool" },
			{ title: "Manage Repositories", path: "/dashboard/repository" },
		],
	},
	{
		title: "Profile",
		icon: UserIcon,
		path: route.profile,
		subItems: [
			{ title: "New Profile", path: "/dashboard/profile/tool" },
			{ title: "Manage Profiles", path: "/dashboard/profile" },
		],
	},
	{
		title: "Template",
		icon: DocumentIcon,
		path: route.template,
		subItems: [
			{ title: "New Template", path: "/dashboard/template/tool" },
			{ title: "Manage Templates", path: "/dashboard/template" },
		],
	},
	{
		title: "Editor",
		icon: PencilIcon,
		path: route.editor,
		subItems: [
			{ title: "New Editor", path: "/dashboard/editor/tool" },
			{ title: "Manage Editors", path: "/dashboard/editor" },
		],
	},
];
