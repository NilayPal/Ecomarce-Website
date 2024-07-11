import { useState,useEffect,useContext,createContext } from "react";

const AuthContext = createContext()


const AuthProvider = ({children})=>{
    cont [AuthContext,setAuth]=useState({
        user:null,
        token:""
    })
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}