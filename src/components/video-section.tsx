"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import ReactPlayer from 'react-player/youtube'
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import('react-player/youtube'), {
    ssr: false,
});

interface Video {
    key: string;
    name: string;
}

export default function VideoSection({ movieVideos }: { movieVideos: Video[] }) {
    const [currentVideo, setCurrentVideo] = useState(0)

    return (
        <section className="my-12">
            <h2 className="mb-4 text-xl font-bold uppercase">Videos</h2>

            <div className="relative">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${movieVideos[currentVideo]?.key}`}
                        controls
                        width="100%"
                        height="100%"
                        className="react-player"
                    />
                </div>

                <button
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                    onClick={() => setCurrentVideo((prev) => Math.max(0, prev - 1))}
                    aria-label="Previous video"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                    onClick={() => setCurrentVideo((prev) => Math.min(movieVideos.length - 1, prev + 1))}
                    aria-label="Next video"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
                {movieVideos.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentVideo === index ? "bg-red-600" : "bg-gray-600"}`}
                        onClick={() => setCurrentVideo(index)}
                        aria-label={`Go to video ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}