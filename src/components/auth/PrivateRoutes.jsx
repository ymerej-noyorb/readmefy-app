import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { route } from "../../utils/path";

const PrivateRoutes = () => {
	const { user } = useAuth();
	const location = useLocation();

	return user ? (
		<Outlet />
	) : (
		<Navigate to={route.login} state={{ from: location }} replace />
	);
};

export default PrivateRoutes;
