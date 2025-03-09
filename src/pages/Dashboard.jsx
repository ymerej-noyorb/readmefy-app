import React from "react";
import { Routes, Route } from "react-router-dom";
import Notfound from "../components/base/Notfound";
import Footer from "../components/base/Footer";
import Hub from "../components/dashboard/Hub";
import Repository from "../components/dashboard/Repository";
import RepositoryTool from "../components/dashboard/RepositoryTool";

//TODO: Fetch an endpoint to retrieve data of user and store it somewhere

export default function Dashboard() {
	return (
		<section className="pt-[88px] w-full min-h-[calc(100vh-103px)]">
			<div className="w-full min-h-[calc(100vh-(87px+88px+103px))] p-8 flex">
				<Routes>
					<Route index element={<Hub />} />
					<Route path="/repository" element={<Repository />} />
					<Route path="/repository/tool" element={<RepositoryTool />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
			<Footer />
		</section>
	);
}
