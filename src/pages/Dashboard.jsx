import React from "react";
import { Routes, Route } from "react-router-dom";
import Notfound from "../components/base/Notfound";
import Footer from "../components/base/Footer";
import Hub from "../components/dashboard/Hub";
import Repository from "../components/dashboard/Repository";
import RepositoryTool from "../components/dashboard/RepositoryTool";
import { route } from "../utils/path";
import Profile from "../components/dashboard/Profile";
import ProfileTool from "../components/dashboard/ProfileTool";
import Template from "../components/dashboard/Template";
import TemplateTool from "../components/dashboard/TemplateTool";
import Settings from "../components/dashboard/Settings";

export default function Dashboard() {
	return (
		<section className="pt-[88px] w-full min-h-[calc(100vh-103px)]">
			<div className="w-full min-h-[calc(100vh-(87px+88px+103px))] p-8 flex">
				<Routes>
					<Route index element={<Hub />} />
					<Route path={route.repository.path} element={<Repository />} />
					<Route path={route.repository.tool} element={<RepositoryTool />} />

					<Route path={route.profile.path} element={<Profile />} />
					<Route path={route.profile.tool} element={<ProfileTool />} />

					<Route path={route.template.path} element={<Template />} />
					<Route path={route.template.tool} element={<TemplateTool />} />

					<Route path={route.editor.path} element={<Repository />} />
					<Route path={route.editor.tool} element={<RepositoryTool />} />

					<Route path={route.settings.path} element={<Settings />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
			<Footer />
		</section>
	);
}
