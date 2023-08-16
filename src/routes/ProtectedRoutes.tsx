import { Navigate} from "react-router-dom"

interface ProtectedProps {
    isLoggedIn: object
    children: React.ReactNode
}

export const ProtectedRoutes = ({ isLoggedIn, children }: ProtectedProps) => {
    return isLoggedIn ? children : <Navigate to={"/"}/>;
};
