import BottomBar from "@/components/BottomBar"
import NavBar from "@/components/NavBar"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <BottomBar />
        </>
    )
}