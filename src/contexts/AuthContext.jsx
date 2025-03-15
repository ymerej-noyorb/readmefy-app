import React, { createContext, useState, useEffect, useContext } from "react";
import {
	clearUserLocalStorage,
	getUserLocalStorage,
	setUserLocalStorage,
} from "../utils/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const storedUser = getUserLocalStorage();
		return storedUser ? JSON.parse(storedUser) : null;
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user) {
			setUserLocalStorage(user);
		} else {
			clearUserLocalStorage();
		}
	}, [user]);

	//TODO: fix API call when every components is mounted
	useEffect(() => {
		if (!user) {
			fetchUser();
		} else {
			setLoading(false);
		}
	}, []);

	const fetchUser = async () => {
		try {
			const res = await fetch("/api/user/me", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await res.json();

			if (data.success) {
				setUser(data.data.user);
			} else {
				setUser(null);
			}
		} catch (err) {
			console.error("Erreur lors de la récupération de l'utilisateur:", err);
			setUser(null);
		} finally {
			setLoading(false);
		}
	};

	const login = (providerUrl) => {
		window.location.href = providerUrl;
	};

	const logout = async () => {
		try {
			const res = await fetch("/api/auth/logout", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await res.json();

			if (data.success) {
				setUser(null);
			}
		} catch (err) {
			console.error("Erreur lors de la déconnexion:", err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider value={{ user, loading, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
