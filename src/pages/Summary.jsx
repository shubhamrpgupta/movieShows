import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const Summary = () => {
    const [singleData, setSingleData] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        async function fetching() {
            const data = await fetch(`https://api.tvmaze.com/shows/${id}`)
                .then((res) => res.json());
            return setSingleData(data);
        }
        fetching();
    }, []);

    const { summary, image, name } = singleData;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${id}/book`)
    }

    return (
        < div
            className="flex justify-center items-center  m-auto md:my-20  relative  bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] md:flex-row flex-col"
        >
            <div
                className="relative md:w-2/5 w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"
            >
                <img
                    src={image ? image.original : "https://e7.pngegg.com/pngimages/344/673/png-clipart-empty-set-null-set-mathematical-notation-set-notation-mathematics-rim-black-and-white.png"}
                    alt="#" className="object-cover w-full h-full m-auto"
                />
            </div>
            < div className="p-6"
            >
                <h4
                    className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
                >
                    {name ? name : ""}

                </h4>
                <p
                    className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700"
                >
                    {summary ? summary.toString().replace(/(<([^>]+)>)/ig, '') : " No Information"}
                </p>
                <button
                    onClick={() => handleClick()}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                >
                    Book Tickets
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        >
                        </path>
                    </svg>
                </button>
            </div >
        </div >
    )
}


export default Summary