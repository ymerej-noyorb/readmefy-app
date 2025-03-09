const isHomePage = (pathname) => pathname === "/";
const isLoginPage = (pathname) => pathname === "/login";

export const isNotFoundPage = (pathname) =>
	pathname !== "/" &&
	pathname !== "/login" &&
	!location.pathname.match(/\/dashboard/);

export const isBannedPage = (pathname) =>
	!(isHomePage(pathname) || isLoginPage(pathname) || isNotFoundPage(pathname));

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

export const removeParams = (params) => {
	const location = window.location;
	params.delete("provider");
	params.delete("error");
	params.delete("success");
	params.delete("message");

	window.history.replaceState(
		{},
		"",
		`${location.pathname}${params.toString()}`
	);
};
