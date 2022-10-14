import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({result},ref) => {
  const BASE_URL = `https://www.themoviedb.org/t/p/w220_and_h330_face${result.backdrop_path||result.poster_path}`;

  return (
    <div ref={ref} className="p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" >
      <Image layout="responsive" src={BASE_URL} height={1920} width={1920} className="object-fill rounded-xl"/>
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-xl sm:text-2xl text-white transition-all duration-100 ease group-hover:font-bold">
          {result.title || result.name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} |`} {result.release_date || result.first_air_date} |{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
