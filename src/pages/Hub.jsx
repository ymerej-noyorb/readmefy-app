import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/base/Footer";
import Dashboard from "../components/hub/Dashboard";
import Repository from "../components/hub/Repository";
import RepositoryTool from "../components/hub/RepositoryTool";

export default function Hub() {
	return (
		<section className="pt-[88px] w-full h-[calc(100vh-103px)]">
			<div className="w-full pt- min-h-[calc(100vh-87px-88px-103px)] p-8">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/repository" element={<Repository />} />
					<Route path="/repository/tool" element={<RepositoryTool />} />
				</Routes>
			</div>
			<Footer />
		</section>
	);
}
