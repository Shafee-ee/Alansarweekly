import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ArticleCard from "./ArticleCard";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <ArticleCard />
            <main className="flex-grow max-w-6xl mx-auto px-4 py-6">
                <Outlet /> {/* child routes (Home, KeliNodi, etc.) will render here */}
            </main>
            <Footer />
        </div>
    );
}
