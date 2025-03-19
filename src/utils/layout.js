import { route } from "./path";

const isPathMatch = (pathname, path) => {
	if (path === route.dashboard) return pathname.startsWith(path);
	return pathname === path;
};

export const isHomePage = (pathname) => isPathMatch(pathname, route.home);
export const isLoginPage = (pathname) => isPathMatch(pathname, route.login);
export const isNotFoundPage = (pathname) =>
	!isHomePage(pathname) &&
	!isLoginPage(pathname) &&
	!pathname.startsWith(route.dashboard);
export const isBannedPage = (pathname) =>
	!isHomePage(pathname) && !isLoginPage(pathname) && !isNotFoundPage(pathname);

export const getContainerClasses = (pathname) => {
	if (isHomePage(pathname) || isLoginPage(pathname))
		return "w-screen h-full pt-[87px]";
	if (isNotFoundPage(pathname)) return "w-screen h-full";
	return "w-screen h-screen pt-[87px]";
};

export const getMainClasses = (pathname) => {
	if (isHomePage(pathname)) return "flex-1 p-8";
	if (isLoginPage(pathname) || isNotFoundPage(pathname))
		return "max-w-7xl mx-auto w-screen min-h-[calc(100vh-(87px+103px))]";
	return "w-screen min-h-[calc(100vh-103px)] pl-[256px]";
};
