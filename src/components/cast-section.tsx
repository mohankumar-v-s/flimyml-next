import Image from "next/image"

interface CastMember {
    name: string;
    character: string;
    profile_path: string;
}

interface CastSectionProps {
    castMembers: CastMember[];
}

export default function CastSection({ castMembers }: CastSectionProps) {
    return (
        <div className="mb-12 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h2 className="mb-4 text-xl font-bold uppercase">Cast</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                {castMembers.map((member, index) => (
                    <div key={index} className="flex-shrink-0 text-center bg-white rounded">
                        <div className="relative h-40 w-36 overflow-hidden rounded-t">
                            <Image
                                src={member.profile_path
                                    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${member.profile_path}`
                                    : "/assets/No-Image-Placeholder.png"}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="my-1 text-sm font-medium text-black truncate max-w-36">{member.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
