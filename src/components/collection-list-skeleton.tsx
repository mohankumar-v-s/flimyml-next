import { Skeleton } from "@/components/ui/skeleton";

export default function CollectionListSkeleton() {
    return (
        <div className="min-h-screen bg-black text-white pt-8 w-full">
            <div className="flex flex-col justify-center">
                <Skeleton className="h-8 w-48 mt-4 bg-gray-800" />
                <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="min-w-[160px] m-3 text-center">
                            <Skeleton className="w-full h-[250px] min-h-[250px] rounded bg-gray-800" />
                            <Skeleton className="mt-2 h-4 w-28 mx-auto bg-gray-800" />
                            {/* <Skeleton className="mt-1 h-3 w-20 mx-auto bg-gray-800" /> */}
                        </div>
                    ))}
                </div>
                <Skeleton className="h-8 w-48 mt-4 bg-gray-800" />
                <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="min-w-[160px] m-3 text-center">
                            <Skeleton className="w-full h-[250px] min-h-[250px] rounded bg-gray-800" />
                            <Skeleton className="mt-2 h-4 w-28 mx-auto bg-gray-800" />
                            {/* <Skeleton className="mt-1 h-3 w-20 mx-auto bg-gray-800" /> */}
                        </div>
                    ))}
                </div>
                <Skeleton className="h-8 w-48 mt-4 bg-gray-800" />
                <div className="flex w-[96vw] overflow-x-scroll no-scrollbar">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="min-w-[160px] m-3 text-center">
                            <Skeleton className="w-full h-[250px] min-h-[250px] rounded bg-gray-800" />
                            <Skeleton className="mt-2 h-4 w-28 mx-auto bg-gray-800" />
                            {/* <Skeleton className="mt-1 h-3 w-20 mx-auto bg-gray-800" /> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
