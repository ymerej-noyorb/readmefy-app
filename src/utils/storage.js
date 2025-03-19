export const setUserLocalStorage = (user) => {
	localStorage.setItem("READMEFY_USER", JSON.stringify(user));
};

export const getUserLocalStorage = () => {
	return localStorage.getItem("READMEFY_USER");
};

export const clearUserLocalStorage = () => {
	localStorage.removeItem("READMEFY_USER");
};

export const setAuthLocalStorage = (user) => {
	localStorage.setItem("READMEFY_AUTH", true);
};

export const getAuthLocalStorage = () => {
	return localStorage.getItem("READMEFY_AUTH");
};

export const clearAuthLocalStorage = () => {
	localStorage.removeItem("READMEFY_AUTH");
};
