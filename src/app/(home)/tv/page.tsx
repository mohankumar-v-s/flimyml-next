import React from "react"
import MoviesCollectionList from "@/components/movies-collection-list";

async function getTVDetails() {
    const apiKey = process.env.TMDB_MOVIE_API_KEY;
    const baseUrl = `https://api.themoviedb.org/3`;

    const endpoints = {
        netflix: `${baseUrl}/discover/tv?with_watch_providers=8&sort_by=popularity.desc&watch_region=IN&api_key=${apiKey}`,
        jioHotstar: `${baseUrl}/discover/tv?with_watch_providers=2336&sort_by=popularity.desc&watch_region=IN&api_key=${apiKey}`,
        amazonPrime: `${baseUrl}/discover/tv?with_watch_providers=119&sort_by=popularity.desc&watch_region=IN&api_key=${apiKey}`,
        discovery: `${baseUrl}/discover/tv?include_adult=false&with_watch_providers=510&sort_by=popularity.desc&watch_region=IN&api_key=${apiKey}`,
        aha: `${baseUrl}/discover/tv?&with_watch_providers=2053&sort_by=popularity.desc&watch_region=IN&api_key=${apiKey}`,
    };

    const results = await Promise.allSettled([
        fetch(endpoints.netflix),
        fetch(endpoints.jioHotstar),
        fetch(endpoints.amazonPrime),
        fetch(endpoints.discovery),
        fetch(endpoints.aha),
    ]);

    const toJson = async (res: PromiseSettledResult<Response>) =>
        res.status === "fulfilled" ? await res.value.json() : null;

    return {
        netflix: await toJson(results[0]),
        jioHotstar: await toJson(results[1]),
        amazonPrime: await toJson(results[2]),
        discovery: await toJson(results[3]),
        aha: await toJson(results[4]),
    };
}

export default async function TV() {
    const home = await getTVDetails()

    console.log(home?.discovery?.results)

    return (
        <div className="pt-4 pl-2 pb-12 text-white bg-black">
            <MoviesCollectionList
                collectionName="Netfilx Shows"
                collectionType='tv'
                collectionList={home?.netflix?.results}
            />
            <MoviesCollectionList
                collectionName="JioHotstar Shows"
                collectionType='tv'
                collectionList={home?.jioHotstar?.results}
            />
            <MoviesCollectionList
                collectionName="Amazon Prime Shows"
                collectionType='tv'
                collectionList={home?.amazonPrime?.results}
            />
            <MoviesCollectionList
                collectionName="Discovery+ Shows"
                collectionType='tv'
                collectionList={home?.discovery?.results}
            />
            <MoviesCollectionList
                collectionName="Lionsgate Play"
                collectionType='tv'
                collectionList={home?.aha?.results}
            />
        </div >
    );
}
