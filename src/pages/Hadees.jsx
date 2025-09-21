import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { getArticlesByCategory } from '../data/articles'

const Hadees = () => {
    const hadeesArticles = getArticlesByCategory('hadees');

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <header className="text-center py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">📜 Hadees</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Prophetic traditions and their authentic preservation
                </p>
            </header>

            {/* Articles List */}
            <section>
                {hadeesArticles.length > 0 ? (
                    <div className="space-y-6">
                        {hadeesArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📜</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">No Articles Yet</h2>
                        <p className="text-gray-600">
                            Hadees articles will appear here once they are published.
                        </p>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Hadees
