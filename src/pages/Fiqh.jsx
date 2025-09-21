import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { getArticlesByCategory } from '../data/articles'

const Fiqh = () => {
    const fiqhArticles = getArticlesByCategory('fiqh');

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <header className="text-center py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">📖 Fiqh</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Islamic jurisprudence and legal guidance for contemporary life
                </p>
            </header>

            {/* Articles List */}
            <section>
                {fiqhArticles.length > 0 ? (
                    <div className="space-y-6">
                        {fiqhArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📖</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">No Articles Yet</h2>
                        <p className="text-gray-600">
                            Fiqh articles will appear here once they are published.
                        </p>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Fiqh
