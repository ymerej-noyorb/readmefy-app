import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({
	children,
	redirectTo = "/login",
	isAuthenticatedRoute = false,
}) => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticatedRoute && user) {
			navigate("/dashboard");
		} else if (!isAuthenticatedRoute && !user) {
			navigate(redirectTo);
		}
	}, [user, navigate, isAuthenticatedRoute, redirectTo]);

	return <>{children}</>;
};

export default ProtectedRoute;
