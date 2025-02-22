import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Notfound from "../components/base/Notfound";
import Footer from "../components/base/Footer";
import Hub from "../components/dashboard/Hub";
import Repository from "../components/dashboard/Repository";
import RepositoryTool from "../components/dashboard/RepositoryTool";
import { api } from "../utils/api";

export default function Dashboard() {
	const isFetched = useRef(false);
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (isFetched.current) return;
		isFetched.current = true;

		fetch(`${api.url}/auth/user`, { credentials: "include" })
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setUser(data.user);
				} else {
					navigate("/login");
				}
			})
			.catch((error) => {
				console.error("Failed to fetch user info", error);
			});
	}, []);
	return (
		<section className="pt-[88px] w-full min-h-[calc(100vh-103px)]">
			<div className="w-full min-h-[calc(100vh-(87px+88px+103px))] p-8 flex">
				<Routes>
					<Route exact path="/" element={<Hub />} />
					<Route exact path="/repository" element={<Repository />} />
					<Route exact path="/repository/tool" element={<RepositoryTool />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
			<Footer />
		</section>
	);
}
