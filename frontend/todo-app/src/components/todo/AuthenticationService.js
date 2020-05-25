class AuthenticationService {
    registerSuccessfulLogin(userName, password) {
        console.log("AuthenticationService");
        sessionStorage.setItem("authenticatedUser", userName);
    }

    logout() {
        console.log("logout");
        sessionStorage.removeItem("authenticatedUser");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");
        return user !== null;

    }
}

export default new AuthenticationService()
