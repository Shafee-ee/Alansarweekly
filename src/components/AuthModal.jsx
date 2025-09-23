// components/AuthModal.jsx
import { useState } from "react";

const AuthModal = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">

                {/* Tabs */}
                <div className="flex justify-between mb-4">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`w-1/2 py-2 font-semibold ${isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`w-1/2 py-2 font-semibold ${!isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Form */}
                {isLogin ? (
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border px-3 py-2 rounded focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border px-3 py-2 rounded focus:outline-none"
                        />
                        <button className="w-full bg-blue-600 text-white py-2 rounded">
                            Login
                        </button>
                    </form>
                ) : (
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border px-3 py-2 rounded focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border px-3 py-2 rounded focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border px-3 py-2 rounded focus:outline-none"
                        />
                        <button className="w-full bg-green-600 text-white py-2 rounded">
                            Sign Up
                        </button>
                    </form>
                )}

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-300 py-2 rounded hover:bg-gray-400"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
