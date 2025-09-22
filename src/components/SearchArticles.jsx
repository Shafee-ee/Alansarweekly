import React, { useEffect, useState, } from 'react';
import { articles, getLatestArticles } from '../data/articles';//import all articles

const SearchArticles = () => {
    const allArticles = getLatestArticles(50);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (query.trim() === '') {
                setResults([]);
                return;
            }
            const filteredArticles = allArticles.filter(article => article.content.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredArticles)
        }, 300);

        return () => clearTimeout(handler)
    }, [query, allArticles])

    return (
        <div className='max-w-xl mx-auto'>
            <input type="text"
                placeholder='Search for an article...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-400 ' />


            {results.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                    {results.map((article) => (
                        <div
                            key={article.id}
                            className="w-[280px] h-[80px] bg-gray-100 rounded-md flex items-center gap-2 p-1 hover:bg-gray-200 cursor-pointer"
                        >
                            <img
                                src={article.image} // make sure `image` exists in your data
                                alt={article.title}
                                className="w-12 h-12 object-cover rounded"
                            />
                            <span className="text-xs font-medium truncate">{article.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

};

export default SearchArticles;