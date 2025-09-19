import React from 'react'

const ArticleCard = () => {
    return (
        <div>
            {/*Left-Image */}
            <div>
                <img src=""
                    alt="" />
            </div>
            {/*Right -Content*/}

            <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        By {author} • {date}
                    </p>
                    <p className="text-gray-700">{excerpt}</p>
                </div>
                <button className="mt-4 self-start text-blue-600 hover:underline">
                    Read More →
                </button>
            </div>

        </div>
    )
}

export default ArticleCard