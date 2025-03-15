export const setUserLocalStorage = (user) => {
	localStorage.setItem("READMEFY_USER", JSON.stringify(user));
};

export const getUserLocalStorage = () => {
	return localStorage.getItem("READMEFY_USER");
};

export const clearUserLocalStorage = () => {
	localStorage.removeItem("READMEFY_USER");
};
