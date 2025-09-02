import { useState } from "react";

export const Card = ({ title, imageUrl, year, rating, type }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative transition-all duration-200 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-[250px] h-[375px] rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {isHovered && (
                    <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black via-black/90 to-black/60 flex flex-col justify-end p-6 transition-all duration-300">
                        <h3 className="text-white font-semibold text-xl tracking-wide mb-2 font-sans">
                            {title}
                        </h3>
                        <div className="flex items-center gap-3 text-gray-200 text-sm font-medium">
                            <span className="text-yellow-400">{year}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-yellow-400">{rating}</span>
                            <span className="text-gray-400">•</span>
                            <span className="uppercase tracking-wider text-yellow-400">
                                {type}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
