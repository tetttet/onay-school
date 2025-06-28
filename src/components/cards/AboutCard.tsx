// components/LatestPostCard.tsx

import Image from "next/image";

interface AboutCardProps {
  date: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export default function AboutCard({
  date,
  title,
  description,
  category,
  imageUrl,
}: AboutCardProps) {
  return (
    <div className="rounded-xl p-6 flex items-center gap-6 shadow-sm">
      <div className="flex-1 space-y-4">
        <p className="text-xs text-gray-400 uppercase">{date}</p>
        <h2 className="text-2xl font-semibold leading-snug text-white">
          {title}
        </h2>
        <p className="text-gray-400">{description}</p>
        <span className="inline-block bg-indigo-800 text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
        <div>
          <a
            href="#"
            className="text-indigo-400 font-semibold flex items-center gap-1 hover:underline"
          >
            Read more <span>→</span>
          </a>
        </div>
      </div>
      <div className="relative w-1/3 h-32 lg:h-72 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt="Post image"
          fill
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
}
