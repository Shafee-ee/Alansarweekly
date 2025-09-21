import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getArticleById } from '../data/articles'

const Article = () => {
    const { id } = useParams();
    const article = getArticleById(id);

    if (!article) {
        return (
            <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
                <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
                <Link
                    to="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                    ← Back to Home
                </Link>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <article className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
                <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                    ← Back to Home
                </Link>
            </nav>

            {/* Article Header */}
            <header className="mb-8">
                <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
                        {article.category.replace('-', ' ')}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    {article.title}
                </h1>

                <div className="flex items-center text-gray-600 mb-6">
                    <span className="font-medium text-gray-900">{article.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed font-light">
                    {article.excerpt}
                </p>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 md:h-96 object-cover"
                />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
                <div className="text-gray-800 leading-relaxed space-y-6">
                    {article.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-lg leading-8">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        Published on {formatDate(article.date)} by {article.author}
                    </div>
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </footer>
        </article>
    )
}

export default Article
