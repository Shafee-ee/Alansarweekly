import { useState } from "react";

const AdminPage = () => {
    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState({ title: "", content: "" });

    const handleAddArticle = (e) => {
        e.preventDefault();
        if (!newArticle.title || !newArticle.content) return;
        const newEntry = {
            id: Date.now(),
            ...newArticle,
        };
        setArticles([newEntry, ...articles]);
        setNewArticle({ title: "", content: "" });
    };

    const handleDeleteArticle = (id) => {
        setArticles(articles.filter((a) => a.id !== id));
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-800 text-white min-h-screen p-6">
                <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
                <ul className="space-y-4">
                    <li className="hover:text-yellow-300 cursor-pointer">Articles</li>
                    <li className="hover:text-yellow-300 cursor-pointer">Users</li>
                    <li className="hover:text-yellow-300 cursor-pointer">Settings</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-6">Manage Articles</h1>

                {/* Add Article Form */}
                <form
                    onSubmit={handleAddArticle}
                    className="bg-gray-100 p-4 rounded shadow mb-6"
                >
                    <input
                        type="text"
                        placeholder="Article Title"
                        value={newArticle.title}
                        onChange={(e) =>
                            setNewArticle({ ...newArticle, title: e.target.value })
                        }
                        className="w-full mb-3 p-2 border rounded"
                    />
                    <textarea
                        placeholder="Article Content"
                        value={newArticle.content}
                        onChange={(e) =>
                            setNewArticle({ ...newArticle, content: e.target.value })
                        }
                        className="w-full mb-3 p-2 border rounded"
                    />
                    <input type="file" />
                    <button
                        type="submit"
                        className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Article
                    </button>
                </form>

                {/* Article List */}
                <ul className="space-y-3">
                    {articles.map((article) => (
                        <li
                            key={article.id}
                            className="p-4 bg-white shadow flex justify-between items-center"
                        >
                            <div>
                                <h2 className="font-bold">{article.title}</h2>
                                <p className="text-sm text-gray-600">
                                    {article.content.substring(0, 100)}...
                                </p>
                            </div>
                            <button
                                onClick={() => handleDeleteArticle(article.id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default AdminPage;
