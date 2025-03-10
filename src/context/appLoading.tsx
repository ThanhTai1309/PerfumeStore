import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLoading } from "./useLoading";
import HomePage from "../pages/home";
import Navbar from "../components/layout/navbar/navbar";

const AppLoading = () => {
    const { loading, setLoading } = useLoading();

    useEffect(() => {
        setLoading(true); // Bật trạng thái loading khi trang web load lần đầu
        setTimeout(() => {
            setLoading(false); // Tắt loading sau 2 giây
        }, 2000);
    }, [setLoading]);

    if (loading) return null; // Ẩn toàn bộ nội dung khi loading

    return (
        <>
            <Navbar /> {/* Chỉ hiển thị Navbar khi loading = false */}
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
};

export default AppLoading;
