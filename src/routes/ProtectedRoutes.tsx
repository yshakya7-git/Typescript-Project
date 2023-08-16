import { Navigate} from "react-router-dom"

interface ProtectedProps {
    children: React.ReactNode;
}

export const ProtectedRoutes = ({ children }: ProtectedProps) => {
    return children ? children : <Navigate to={"/"}/>;
};
