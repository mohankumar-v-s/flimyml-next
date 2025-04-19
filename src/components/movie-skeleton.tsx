import { Skeleton } from "@/components/ui/skeleton"

export default function MovieSkeleton() {
    return (
        <div className="min-h-screen bg-black text-white pt-4">
            <main className="container mx-auto px-4">
                <div className="relative mt-4 flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="relative mb-6 flex-shrink-0 md:mb-0 md:w-1/3 lg:w-1/4">
                        <Skeleton className="aspect-[2/3] w-full rounded-lg bg-gray-800" />
                    </div>

                    <div className="flex-grow">
                        <Skeleton className="mb-4 h-10 w-3/4 bg-gray-800" />

                        <div className="mb-4 flex items-center gap-4">
                            <Skeleton className="h-6 w-20 rounded-full bg-gray-800" />
                            <Skeleton className="h-6 w-20 rounded-full bg-gray-800" />
                            <Skeleton className="h-6 w-20 rounded-full bg-gray-800" />
                        </div>

                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full bg-gray-800" />
                            <Skeleton className="h-4 w-full bg-gray-800" />
                            <Skeleton className="h-4 w-3/4 bg-gray-800" />
                        </div>

                        <Skeleton className="mt-6 h-10 w-32 rounded bg-gray-800" />

                        <div className="mt-12 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                            <Skeleton className="mb-4 h-6 w-24 bg-gray-800" />
                            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className="flex-shrink-0 text-center">
                                        <Skeleton className="mx-auto h-40 w-36 rounded bg-gray-800" />
                                        <Skeleton className="mx-auto mt-2 h-4 w-28 bg-gray-800" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-12">
                    <Skeleton className="mb-4 h-6 w-24 bg-gray-800" />
                    <Skeleton className="aspect-video w-full rounded-lg bg-gray-800" />
                    <div className="mt-4 flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Skeleton key={i} className="h-2 w-2 rounded-full bg-gray-800" />
                        ))}
                    </div>
                </div>

                <div className="my-12">
                    <Skeleton className="mb-4 h-6 w-32 bg-gray-800" />
                    <Skeleton className="aspect-video w-full rounded-lg bg-gray-800" />
                    <div className="mt-4 flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Skeleton key={i} className="h-2 w-2 rounded-full bg-gray-800" />
                        ))}
                    </div>
                </div>

                <div className="my-12">
                    <Skeleton className="mb-4 h-6 w-28 bg-gray-800" />
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Skeleton key={i} className="aspect-[2/3] w-full rounded-lg bg-gray-800" />
                        ))}
                    </div>
                </div>

                <div className="my-12">
                    <Skeleton className="mb-4 h-6 w-48 bg-gray-800" />
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="group">
                                <Skeleton className="aspect-[2/3] w-full rounded-lg bg-gray-800" />
                                <Skeleton className="mt-2 h-4 w-3/4 bg-gray-800" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="mt-16 border-t border-gray-800 py-6">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <Skeleton className="h-6 w-24 bg-gray-800" />
                    <div className="flex gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-4 w-16 bg-gray-800" />
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}
