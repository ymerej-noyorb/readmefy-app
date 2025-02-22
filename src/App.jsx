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
import {
	getContainerClasses,
	getMainClasses,
	isBannedPage,
	isNotFoundPage,
} from "./utils/app";

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
