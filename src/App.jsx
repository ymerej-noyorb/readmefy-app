import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import Breadcrumbs from "./components/base/Breadcrumbs";
import Sidebar from "./components/base/Sidebar";

const isHomePage = (pathname) => pathname === "/";
const isLoginPage = (pathname) => pathname === "/login";
const isNotFoundPage = (pathname) =>
	pathname !== "/" &&
	pathname !== "/login" &&
	!location.pathname.match(/\/dashboard/);
const isBannedPage = (pathname) =>
	!(isHomePage(pathname) || isLoginPage(pathname) || isNotFoundPage(pathname));

const getContainerClasses = (pathname) => {
	if (isHomePage(pathname) || isLoginPage(pathname))
		return "w-screen h-full pt-[87px]";
	if (isNotFoundPage(pathname)) return "w-screen h-full";
	return "w-screen h-screen pt-[87px]";
};

const getMainClasses = (pathname) => {
	if (isHomePage(pathname)) return "flex-1 p-8";
	if (isLoginPage(pathname) || isNotFoundPage(pathname))
		return "max-w-7xl mx-auto w-screen min-h-[calc(100vh-(87px+103px))]";
	return "w-screen min-h-[calc(100vh-103px)] pl-[256px]";
};

const AppContent = () => {
	const location = useLocation();
	const { pathname } = location;

	const containerClasses = getContainerClasses(pathname);
	const mainClasses = getMainClasses(pathname);

	return (
		<>
			<Header isFixed={isBannedPage(pathname) || !isNotFoundPage(pathname)} />
			<main className={containerClasses}>
				<Sidebar isDisplayed={isBannedPage(pathname)} />
				<div className={mainClasses}>
					<Breadcrumbs isDisplayed={isBannedPage(pathname)} />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/dashboard/*" element={<Dashboard />} />
						<Route exact path="/login" element={<Login />} />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</div>
			</main>
			<Footer isDisplayed={isBannedPage(pathname)} />
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
