import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { checkTokenExpiry, isValidJwt } from "../utils/checkTokenExpiry";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem("token");
    const userStorage = localStorage.getItem("user");

    if(token && isValidJwt(token)) {
        if (checkTokenExpiry(token)) {
            setUser(null);
        } else {
            setUser({
                token: token,
                user: JSON.parse(userStorage),
            });
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}; 