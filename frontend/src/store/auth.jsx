import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user,setUser]=useState("")
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
    //jwt authenticate to get the user data
    const userAuthentication=async()=>{
        try{

            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },  
            })
            if(response.ok){
                const data = await response.json();
                console.log("user data",data.userData);
                setUser(data.userData);
            }

        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        userAuthentication();
    },[])

    return (
        <AuthContext.Provider value={{ isLoggedIn,storetokeninLs, LogoutUser, user }}>
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
