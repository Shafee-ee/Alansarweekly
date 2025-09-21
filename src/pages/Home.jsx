import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { getLatestArticles } from '../data/articles'

const Home = () => {
    const latestArticles = getLatestArticles(5);

    return (
        <div className="space-y-12 bg-gray-100 p-5">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-blue-400 to-blue-900 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Al Ansar Weekly
                </h1>
                <p className="text-xl text-black max-w-2xl mx-auto">
                    Your trusted source for Islamic knowledge, insights, and contemporary analysis
                </p>
            </section>

            {/* Latest Articles Section */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                    <div className="text-sm text-gray-500">
                        Scroll to see more →
                    </div>
                </div>

                {/* Horizontal Scrolling Carousel */}
                <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 w-max ">
                        {latestArticles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                                variant="carousel"

                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Article Section */}
            {latestArticles.length > 0 && (
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
                    <ArticleCard article={latestArticles[0]} />
                </section>
            )}

            {/* Categories Preview */}
            <section className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: 'Fiqh', path: '/fiqh', icon: '📖' },
                        { name: 'Hadees', path: '/hadees', icon: '📜' },
                        { name: 'Islamic History', path: '/islamic-history', icon: '🏛️' },
                        { name: 'Vismaya Jagattu', path: '/vismaya-jagattu', icon: '✨' },
                        { name: 'Vishleshanegalu', path: '/vishleshanegalu', icon: '🔍' },
                        { name: 'Keli Nodi', path: '/keli-nodi', icon: '👂' },
                        { name: 'Smaniyaru', path: '/smaniyaru', icon: '🎯' },
                    ].map((category) => (
                        <a
                            key={category.name}
                            href={category.path}
                            className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300 group"
                        >
                            <div className="text-3xl mb-3">{category.icon}</div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {category.name}
                            </h3>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
