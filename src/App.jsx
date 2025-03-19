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
} from "./utils/layout";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import LoginCallback from "./components/auth/LoginCallback";
import PublicRoutes from "./components/auth/PublicRoutes";
import { route } from "./utils/path";

const AppContent = () => {
	const { pathname } = useLocation();
	const containerClasses = getContainerClasses(pathname);
	const mainClasses = getMainClasses(pathname);
	const showSidebar = isBannedPage(pathname);
	const showFooter = isBannedPage(pathname);
	const showHeader = isBannedPage(pathname) || !isNotFoundPage(pathname);
	const showBreadcrumbs = isBannedPage(pathname);

	return (
		<>
			{showHeader && <Header isFixed={true} />}
			<main className={containerClasses}>
				{showSidebar && <Sidebar isDisplayed={true} />}
				<div className={mainClasses}>
					{showBreadcrumbs && <Breadcrumbs isDisplayed={true} />}
					<Routes>
						<Route index element={<Home />} />
						<Route element={<PrivateRoutes />}>
							<Route path={`${route.dashboard}/*`} element={<Dashboard />} />
						</Route>
						<Route element={<PublicRoutes />}>
							<Route path={route.login} element={<Login />} />
						</Route>
						<Route path={route.callback} element={<LoginCallback />} />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</div>
			</main>
			{showFooter && <Footer isDisplayed={true} />}
		</>
	);
};

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<AppContent />
			</Router>
		</AuthProvider>
	);
}
