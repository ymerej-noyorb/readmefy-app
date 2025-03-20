import {
	FolderIcon,
	UserIcon,
	DocumentIcon,
	PencilIcon,
} from "@heroicons/react/24/solid";
import { route } from "../utils/path";

export const sidebarItems = [
	{
		title: "Repository",
		icon: FolderIcon,
		path: route.repository.dashboard.path,
		subItems: [
			{ title: "New Repository", path: route.repository.dashboard.tool },
			{ title: "Manage Repositories", path: route.repository.dashboard.path },
		],
	},
	{
		title: "Profile",
		icon: UserIcon,
		path: route.profile.dashboard.path,
		subItems: [
			{ title: "New Profile", path: route.profile.dashboard.tool },
			{ title: "Manage Profiles", path: route.profile.dashboard.path },
		],
	},
	{
		title: "Template",
		icon: DocumentIcon,
		path: route.template.dashboard.path,
		subItems: [
			{ title: "New Template", path: route.template.dashboard.tool },
			{ title: "Manage Templates", path: route.template.dashboard.path },
		],
	},
	{
		title: "Editor",
		icon: PencilIcon,
		path: route.editor.dashboard.path,
		subItems: [
			{ title: "New Editor", path: route.editor.dashboard.tool },
			{ title: "Manage Editors", path: route.editor.dashboard.path },
		],
	},
];
