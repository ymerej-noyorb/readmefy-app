import React, { createContext, useState, useEffect, useContext } from "react";
import {
	clearUserLocalStorage,
	getUserLocalStorage,
	setUserLocalStorage,
} from "../utils/storage";
import { api } from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const storedUser = getUserLocalStorage();
		return storedUser ? JSON.parse(storedUser) : null;
	});

	useEffect(() => {
		user ? setUserLocalStorage(user) : clearUserLocalStorage();
	}, [user]);

	const me = async () => {
		try {
			const result = await api.get(api.endpoint.user);

			if (result.success) {
				setUser(result.data.user);
				return result;
			} else {
				setUser(null);
				throw new Error(result.message);
			}
		} catch (err) {
			console.error(err);
			setUser(null);
			throw err;
		}
	};

	const login = (providerUrl) => {
		window.location.href = providerUrl;
	};

	const logout = async () => {
		try {
			const result = await api.get(api.endpoint.logout);

			if (result.success) {
				setUser(null);
				return result;
			} else {
				throw new Error(result.message);
			}
		} catch (err) {
			console.error(err);
			throw err;
		}
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, me }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
