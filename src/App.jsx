import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import Breadcrumbs from "./components/base/Breadcrumbs";
import Sidebar from "./components/base/Sidebar";
import Login from "./components/base/Login";

const AppContent = () => {
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const isLoginPage = location.pathname === "/login";
	const isBannedPage = !(isHomePage || isLoginPage);

	const containerClasses =
		isHomePage || isLoginPage
			? "w-screen h-full"
			: "w-screen h-screen pt-[87px]";

	const mainClasses = isHomePage
		? "flex-1 p-8"
		: isLoginPage
		? "max-w-7xl mx-auto w-screen h-[calc(100vh-87px-103px)] pt-8"
		: "w-screen h-[calc(100vh-103px)] pl-[256px]";

	return (
		<>
			<Header isFixed={isBannedPage} />
			<div className={containerClasses}>
				<Sidebar isDisplayed={isBannedPage} />

				<main className={mainClasses}>
					<Breadcrumbs isDisplayed={isBannedPage} />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/hub/*" element={<Hub />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</main>
			</div>
			<Footer isDisplayed={isBannedPage} />
		</>
	);
};

export default function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}
