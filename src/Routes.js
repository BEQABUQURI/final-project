import { Route, Routes } from "react-router-dom"

export const GenerateRoutes = ()=> {
    return {
        <Routes>
        <Route path="/"  element ={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/regiser" element {<RegisterPage />} />
        </Routes>
    };
};