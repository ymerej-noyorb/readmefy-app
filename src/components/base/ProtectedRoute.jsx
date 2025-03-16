import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

//TODO: If user go to dashboard and he's unauhenticated, a request was sent to API before he was redirected
//TODO: When a user try to logging in, if it's a success he's redirected to dashboard, next to login, finally to dashboard
const ProtectedRoute = ({ children, isAuthenticatedRoute = false }) => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticatedRoute && user) {
			navigate("/dashboard");
		} else if (!isAuthenticatedRoute && !user) {
			navigate("/login");
		}
	}, [user, navigate, isAuthenticatedRoute]);

	return <>{children}</>;
};

export default ProtectedRoute;
