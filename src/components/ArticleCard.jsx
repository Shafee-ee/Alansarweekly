import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ article, variant = 'default' }) => {
    const { id, title, image, author, date, excerpt, category } = article;

    // Format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (variant === 'carousel') {
        return (
            <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-w-[350px] max-w-[350px]'>
                <div className='h-48 overflow-hidden'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div className="p-5">
                    <div className="mb-3">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                            {category.replace('-', ' ')}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        <Link to={`/article/${id}`}>{title}</Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                        By {author} • {formatDate(date)}
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-3 mb-4">{excerpt}</p>
                    <Link
                        to={`/article/${id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6'>
            <div className='flex flex-col md:flex-row'>
                {/* Image */}
                <div className='md:w-2/5 h-64 md:h-auto overflow-hidden'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                    />
                </div>

                {/* Content */}
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                        <div className="mb-3">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                                {category.replace('-', ' ')}
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 leading-tight hover:text-blue-600 transition-colors">
                            <Link to={`/article/${id}`}>{title}</Link>
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">
                            By <span className="font-medium">{author}</span> • {formatDate(date)}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">{excerpt}</p>
                    </div>
                    <Link
                        to={`/article/${id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                        Read Full Article
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ArticleCard
