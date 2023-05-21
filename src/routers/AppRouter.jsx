import { Route, Routes } from "react-router-dom"
import Layout from "../pages/user/ui"
import LoginView from "../pages/login/LoginView"
import Navigation from "../pages/admin/home/Navigation"
import ProtectedRoute from "./ProtectedRouter"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<LoginView />} />
            <Route element={<ProtectedRoute/>}>
                <Route path="/admin/beranda" element={<Navigation />} />
            </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>Oopss... page not found</p>
                    </main>
                }
            />
        </Routes>
    )
}


export default AppRouter