import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { useEffect } from "react";

import { AuthContext } from "../../context/AuthContext";

export const Logout = () => {
    const navigate = useNavigate();
    const { userLogoutHandler } = useContext(AuthContext);
    useEffect(() => {
        userLogoutHandler();
        navigate('/')
    })
    return null;
}