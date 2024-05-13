import React from 'react'

const CardItem = ({title,content,image}) => {
    return (
        <>
            <div className="bg-transparent backdrop-blur-2xl rounded-lg overflow-hidden shadow-lg ring-2 ring-[#22364E] ring-opacity-40 ">
                <div className="relative">
                    <img className="w-full object-cover h-60 hover:scale-105 duration-200" src={image} alt="Planned Development" />
                </div>
                <div className="p-4">
                    <h3 className="poppins-medium text-lg mb-2 text-[#22364E]">{title}</h3>
                    <p className="text-gray-900 poppins-light text-sm mb-4">{content}</p>
                </div>
            </div>
        </>
    )
}

export default CardItem