import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow max-w-6xl mx-auto px-4 py-6 w-full">
                <Outlet /> {/* child routes (Home, KeliNodi, etc.) will render here */}
            </main>
            <Footer />
        </div>
    );
}
