interface CharacterProps {
    name: string,
    img: string,
}

export default function Character({ name, img }: CharacterProps) {
    return (
        <>
            <div className="w-auto h-auto flex-row gap-4 bg-zinc-800 rounded-md p-4">
                <div className="h-88 w-full">
                    <img src={img} className="rounded-sm w-full h-64 object-cover" />
                </div>
                <i className="text-xl text-stone-300">
                    {name}
                </i>
            </div>
        </>
    );
}