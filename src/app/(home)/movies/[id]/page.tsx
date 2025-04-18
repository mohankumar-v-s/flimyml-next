import Image from "next/image"
import React from "react"
import { Play, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import CastSection from "@/components/cast-section"
import VideoSection from "@/components/video-section"
import BackdropsSection from "@/components/backdrops-section"
import PostersSection from "@/components/posters-section"
import RecommendedSection from "@/components/recommended-section"

const IMAGE_PATH = "https://www.themoviedb.org/t/p/w440_and_h660_face";

async function getMovies(id: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_MOVIE_API_KEY}`)
    return res.json()
}

async function getCast(id: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_MOVIE_API_KEY}`)
    return res.json()
}

async function getRecommendation(id: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_MOVIE_API_KEY}`)
    return res.json()
}

async function getVideos(id: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_MOVIE_API_KEY}`)
    return res.json()
}

async function getImages(id: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_MOVIE_API_KEY}`)
    return res.json()
}

export default async function MovieDetails({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params

    const movies = await getMovies(id)
    const castDetails = await getCast(id)
    const recommendation = await getRecommendation(id)
    const videos = await getVideos(id)
    const images = await getImages(id)

    console.log(castDetails)

    return (
        <div className="bg-[#111827] h-full max-w-screen">
            <div className="min-h-screen py-12 bg-black text-white">
                <main className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="relative mt-2 flex flex-col lg:flex-row md:items-start lg:gap-8">
                        {/* Movie Poster */}
                        <div className="relative mb-6 flex-shrink-0 md:mb-0 md:w-full lg:w-1/4">
                            <Image
                                src={`${movies.poster_path ? IMAGE_PATH + movies.poster_path : "/assets/No-Image-Placeholder.png"}`}
                                alt={movies.title || "Movie Poster"}
                                width={300}
                                height={450}
                                className="rounded-lg mx-auto"
                                priority
                            />
                        </div>

                        {/* Movie Details */}
                        <div className="flex-grow">
                            <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">{movies.title}</h1>

                            <div className="my-4 sm:flex items-center gap-4">
                                <div className="flex items-center gap-1 my-2">
                                    <Clock className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-400">{movies.runtime} min</span>
                                </div>
                                {movies.genres.map((data: { id: React.Key; name: string }) => (
                                    <Button
                                        key={data.id}
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full border-green-600 bg-transparent text-green-600 hover:bg-green-600 hover:text-white mr-2"
                                    >
                                        {data.name}
                                    </Button>
                                ))}
                            </div>
                            <p className="mb-6 text-gray-300 max-w-4xl">
                                {movies.overview || "No description available."}
                            </p>

                            <Button className="mb-8 bg-green-600 hover:bg-green-700">
                                <Play className="mr-2 h-4 w-4" />
                                WATCH NOW
                            </Button>

                            <CastSection castMembers={castDetails?.cast.slice(0, 20)} />
                        </div>
                    </div>

                    {videos?.results.length > 0 && <VideoSection movieVideos={videos?.results?.slice(0, 5)} />}
                    <BackdropsSection backdropImages={images?.backdrops?.slice(0, 5)} />
                    <PostersSection posters={images?.posters?.slice(0, 5)} />
                    <RecommendedSection recommendedMovies={recommendation?.results} />
                </main>
            </div>
        </div>
    )
}