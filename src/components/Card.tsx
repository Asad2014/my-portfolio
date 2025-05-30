
import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  github?: string;
  vercel?: string;
}

const Card: React.FC<propsType> = ({ title, desc, img, tags, github, vercel }) => {
  return (
    <div
      className="border border-accent w-[300px] sm:w-[350px] rounded-lg overflow-hidden shadow-lg flex flex-col justify-between h-[400px]" // <- fixed height added
      data-aos="zoom-in-up"
    >
      {/* Image Section */}
      <Image
        className="w-full h-48 object-cover"
        src={img}
        width={350}
        height={200}
        alt={title}
      />

      {/* Content Section */}
      <div className="p-4 space-y-3 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-white">{desc}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((el, index) => {
            const colors = [
              'bg-red-200',
              'bg-green-200',
              'bg-blue-200',
              'bg-yellow-200',
              'bg-purple-200',
              'bg-pink-200',
              'bg-orange-200',
              'bg-teal-200',
            ];
            const colorClass = colors[index % colors.length];

            return (
              <span
                key={el}
                className={`${colorClass} text-xs px-2 py-1 rounded-full text-gray-800`}
              >
                {el}
              </span>
            );
          })}
        </div>

        {/* Links */}
        {(github || vercel) && (
          <div className="flex gap-4 pt-2 text-sm">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                GitHub
              </a>
            )}
            {vercel && (
              <a
                href={vercel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline hover:text-green-700"
              >
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
