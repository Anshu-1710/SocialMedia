import { createContext, useEffect, useState } from "react";
import Profile from "../pages/profile/Profile";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const[currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
);

    const login = () =>{
        setCurrentUser({
            id:1 , 
            name:"Anshu Shukla" , 
            profilePic:"https://www.newdirectionsforwomen.org/wp-content/uploads/2021/02/Woman-smiling-sunlight.jpg"
        })
    }

    useEffect(()=>{
         localStorage.setItem("user" , JSON.stringify(currentUser));
    },[currentUser]); 

    return (
        <AuthContext.Provider value={{currentUser, login }}>
        {children}
        </AuthContext.Provider>
    )
}