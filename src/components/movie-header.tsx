import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MovieHeader() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-bold">
                        Moon<span className="text-green-600">Flix</span>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-6 text-sm">
                            <li>
                                <Link href="/" className="hover:text-green-600">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link href="/movies" className="hover:text-green-600">
                                    MOVIES
                                </Link>
                            </li>
                            <li>
                                <Link href="/tv-series" className="hover:text-green-600">
                                    TV SERIES
                                </Link>
                            </li>
                            <li>
                                <Link href="/search" className="hover:text-green-600">
                                    SEARCH
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">SIGN IN</Button>
            </div>
        </header>
    )
}
