
export const storeToken = (token: string) => sessionStorage.setItem("access_token", token);

export const getToken = () => sessionStorage.getItem("access_token");

export const saveLoggedInUser = (userName: string, role: string) => {
    sessionStorage.setItem("authenticatedUser", userName);
    sessionStorage.setItem("role", role);
};

export const isUserLoggedIn = () => {
    return sessionStorage.getItem("authenticatedUser");
};

export const logout = () => {
    sessionStorage.clear();
}