class Passport {
	static authenticateUser(token) {
		localStorage.setItem("token", token);
	}

	static isUserAuthenticated() {
		console.log("User auth checked");
		return localStorage.getItem("token") !== null;
	}

	static deauthenticateUser() {
		console.log("Deauthenticated User");
		localStorage.removeItem("token");
	}

	static getToken() {
		return localStorage.getItem("token");
	}
}

export default Passport;
