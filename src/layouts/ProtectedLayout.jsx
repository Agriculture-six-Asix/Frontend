import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedLayout() {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedLayout;