import BottomBar from "@/components/bottom-bar"
import NavBar from "@/components/nav-bar"

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