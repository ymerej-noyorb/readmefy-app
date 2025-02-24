import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Notfound from "../components/base/Notfound";
import Footer from "../components/base/Footer";
import Hub from "../components/dashboard/Hub";
import Repository from "../components/dashboard/Repository";
import RepositoryTool from "../components/dashboard/RepositoryTool";
import { api } from "../utils/api";

export default function Dashboard() {
	const navigate = useNavigate();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const successParam = params.get("success");

		if (successParam) {
			params.delete("success");
			navigate(
				{ pathname: location.pathname, search: params.toString() },
				{ replace: true }
			);

			fetch(`${api.url}/auth/me`, { credentials: "include" })
				.then((res) => res.json())
				.then((data) => {
					if (data.authenticated) {
						//TODO: fix [object Object]
						localStorage.setItem("READMEFY_USER", data.user);
					} else {
						navigate("/login");
					}
				})
				.catch((error) => {
					console.error("Failed to fetch user info", error);
				});
		}
	}, []);
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
