import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Notfound from "../components/base/Notfound";
import Footer from "../components/base/Footer";
import Hub from "../components/dashboard/Hub";
import Repository from "../components/dashboard/Repository";
import RepositoryTool from "../components/dashboard/RepositoryTool";
import ProtectedRoute from "../components/base/ProtectedRoute";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
	const { user, fetchUser } = useAuth();

	useEffect(() => {
		if (!user) {
			fetchUser();
		}
	}, []);

	return (
		<section className="pt-[88px] w-full min-h-[calc(100vh-103px)]">
			<div className="w-full min-h-[calc(100vh-(87px+88px+103px))] p-8 flex">
				<Routes>
					<Route
						index
						element={
							<ProtectedRoute isAuthenticatedRoute={false}>
								<Hub />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/repository"
						element={
							<ProtectedRoute isAuthenticatedRoute={false}>
								<Repository />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/repository/tool"
						element={
							<ProtectedRoute isAuthenticatedRoute={false}>
								<RepositoryTool />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
			<Footer />
		</section>
	);
}
