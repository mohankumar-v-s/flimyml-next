import React from "react"
import MoviesCollectionList from "@/components/movies-collection-list";

async function getHomeDetails() {
    const apiKey = process.env.TMDB_MOVIE_API_KEY;
    const baseUrl = `https://api.themoviedb.org/3`;

    const endpoints = {
        action: `${baseUrl}/discover/movie?with_genres=28&api_key=${apiKey}`,
        sciFi: `${baseUrl}/discover/movie?with_genres=878&api_key=${apiKey}`,
        comedy: `${baseUrl}/discover/movie?with_genres=35&api_key=${apiKey}`,
        animation: `${baseUrl}/discover/movie?with_genres=16&api_key=${apiKey}`,
        drama: `${baseUrl}/discover/movie?with_genres=18&api_key=${apiKey}`,
        fantasy: `${baseUrl}/discover/movie?with_genres=14&api_key=${apiKey}`,
    };

    const results = await Promise.allSettled([
        fetch(endpoints.action),
        fetch(endpoints.sciFi),
        fetch(endpoints.comedy),
        fetch(endpoints.animation),
        fetch(endpoints.drama),
        fetch(endpoints.fantasy),
    ]);

    const toJson = async (res: PromiseSettledResult<Response>) =>
        res.status === "fulfilled" ? await res.value.json() : null;

    return {
        action: await toJson(results[0]),
        sciFi: await toJson(results[1]),
        comedy: await toJson(results[2]),
        animation: await toJson(results[3]),
        drama: await toJson(results[4]),
        fantasy: await toJson(results[5]),
    };
}

export default async function Movies() {
    const home = await getHomeDetails()

    console.log(home?.sciFi?.results)

    return (
        <div className="pt-4 pl-2 pb-12 text-white bg-black">
            <MoviesCollectionList
                collectionName="Action Movies"
                collectionType='movie'
                collectionList={home?.action?.results}
            />
            <MoviesCollectionList
                collectionName="Sci-Fi Movies"
                collectionType='movie'
                collectionList={home?.sciFi?.results}
            />
            <MoviesCollectionList
                collectionName="Comedy Movies"
                collectionType='movie'
                collectionList={home?.comedy?.results}
            />
            <MoviesCollectionList
                collectionName="Animation Movies"
                collectionType='movie'
                collectionList={home?.animation?.results}
            />
            <MoviesCollectionList
                collectionName="Drama Movies"
                collectionType='movie'
                collectionList={home?.drama?.results}
            />
            <MoviesCollectionList
                collectionName="Fantasy Movies"
                collectionType='movie'
                collectionList={home?.fantasy?.results}
            />
        </div >
    );
}
