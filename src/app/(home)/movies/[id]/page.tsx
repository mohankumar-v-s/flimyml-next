import { Heart, Star } from "lucide-react"
import Image from "next/image"
import React from "react"

export default async function MovieDetails({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";
    const NO_IMAGE_URL = "/assets/No-Image-Placeholder.png";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_MOVIE_API_KEY}`, {
        headers: {
            Accept: 'application/json',
        },
        next: { revalidate: 60 },
    })
    const movies = await data.json()
    console.log(movies)
    return (
        <div className="bg-[#111827] h-full">
            {/* <div>
                My Post: {id}
            </div> */}
            <div className="flex items-center flex-col">
                <Image
                    src={
                        movies.poster_path
                            ? `${IMAGE_PATH}${movies.poster_path}`
                            : `${NO_IMAGE_URL}`
                    }
                    alt="poster"
                    width={440}
                    height={660}
                    className="rounded w-36"
                />

                <div className="text-white  flex flex-col">
                    <p className="text-3xl py-3 text-left">
                        {movies.original_title}
                    </p>

                    <div className="flex space-x-2 text-xs text-blue-500 pb-2">
                        {/* <p>{movieDetails}</p> */}
                        {movies?.genres?.map((each: { id: React.Key; name: string }) => (
                            <React.Fragment key={each.id}>
                                <p>{each.name}</p>
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="text-xs">{movies.release_date}</p>
                    <p className="text-justify">{movies.overview}</p>
                    <div className="mt-2 flex justify-center rounded">
                        {movies.vote_average ? (
                            <div className="flex flex-col items-center space-x-1 hover:bg-gray-800 rounded p-1">
                                <Star className="text-yellow-400" />
                                <p className="text-white">
                                    <span className="font-bold">
                                        {Math.round(movies.vote_average)}
                                    </span>
                                    /10
                                </p>
                                {/* <span className="before:content-[''] text-gray-500">
                    {formatVoteCount(movieDetails.vote_count)}
                  </span> */}
                            </div>
                        ) : null}
                        <div className="p-2 ml-2 rounded flex flex-col space-x-1 items-center hover:bg-gray-800">
                            <Heart />
                            <span>Like</span>
                        </div>
                        {/* <div className="p-2 ml-2 rounded flex flex-col space-x-1 items-center hover:bg-gray-800">
                            <RWebShare
                                data={{
                                    text: movies.original_title,
                                    url: currentPath,
                                    title: "Filmyml",
                                }}
                                onClick={() => console.log("shared successfully!")}
                            >
                                <button className="flex flex-col items-center">
                                    <Share />
                                    <p>Share</p>
                                </button>
                            </RWebShare>
                        </div> */}
                        <div className="p-2 ml-2 rounded flex flex-col space-x-1 items-center hover:bg-gray-800">
                            {/* <Comment /> */}
                            <span>Comment</span>
                        </div>
                    </div>
                    <p className="text-2xl">Cast</p>
                </div>
            </div>
        </div>
    )
}