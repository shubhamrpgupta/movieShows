import React from 'react'
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {

    const { id, image, name, genres, summary } = data.show;
    let newSummary = summary.toString().replace(/(<([^>]+)>)/ig, '');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${id}/summary`)
    }

    return (
        <div
            className="m-auto md:m-4 md:p-4 my-5 max-w-sm rounded overflow-hidden shadow-lg"
        >
            <img
                className="object-cover h-4/6 w-full"
                src={image ? image.original : "https://e7.pngegg.com/pngimages/344/673/png-clipart-empty-set-null-set-mathematical-notation-set-notation-mathematics-rim-black-and-white.png"}
                alt={id}
            />

            <div className="px-6 py-2">
                <div
                    className="px-6 py-2 font-bold text-xl mb-2"
                >
                    {name}
                </div>
                <div className="px-6 py-2">
                    {
                        genres.map((i) => (
                            <span
                                key={i}
                                className="inline-block px-6 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                                #{i}
                            </span>
                        ))
                    }
                </div>
                <p className="px-6 py-2 text-gray-700 text-base">
                    {
                        newSummary.substring(0, 30)
                    }
                </p>
                <button
                    onClick={() => handleClick()}
                    className="flex items-center gap-2 px-6 py-2 my-5  font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                >
                    Read More
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        >
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Card