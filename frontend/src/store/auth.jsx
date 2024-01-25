import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const storetokeninLs = (servtoken) => {
        return localStorage.setItem("token", servtoken)
    }

    // takling the functionality
 
    let isLoggedIn = !!token;
    console.log("isLoggedIn",isLoggedIn);
    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn,storetokeninLs, LogoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}
//custom hook

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {  // this is used for check you give wrapper in main jsx correctly or not
        throw new Error("useAuth use outside of the Provider")
    }
    return authContextValue;
}
