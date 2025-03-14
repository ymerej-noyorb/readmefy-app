import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ isDisplayed }) => {
	if (!isDisplayed) return null;

	const location = useLocation();

	const getBreadcrumbItems = () => {
		const pathnames = location.pathname.split("/").filter((x) => x);
		const breadcrumbItems = [
			{ label: "Home", href: "/" },
			...pathnames.map((path, index) => {
				const href = "/" + pathnames.slice(0, index + 1).join("/");
				return { label: path.charAt(0).toUpperCase() + path.slice(1), href };
			}),
		];

		return breadcrumbItems;
	};

	const breadcrumbItems = getBreadcrumbItems();

	return (
		<nav className="bg-dark-700 fixed top-[87px] left-[256px] w-screen h-[88px]">
			<div className="text-l flex items-center p-8">
				{breadcrumbItems.map((item, index) => (
					<div key={item.href} className="flex items-center">
						<a
							href={item.href}
							className={`${
								location.pathname === item.href
									? "text-white-500 font-semibold"
									: "text-white-600"
							} hover:text-blue-500`}
						>
							{item.label}
						</a>
						{index < breadcrumbItems.length - 1 && (
							<span className="mx-2 text-white-700">{">"}</span>
						)}
					</div>
				))}
			</div>
		</nav>
	);
};

export default Breadcrumbs;
