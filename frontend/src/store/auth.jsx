import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{

    const storetokeninLs =(servtoken)=>{
        return localStorage.setItem("token",servtoken)
    }

return(
    <AuthContext.Provider value={storetokeninLs}>
    {children}
    </AuthContext.Provider>
        )
}
//custom hook

export const useAuth=()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue ){  // this is used for check you give wrapper in main jsx correctly or not
        throw new Error("useAuth use outside of the Provider")
    }
    return authContextValue ;
}
