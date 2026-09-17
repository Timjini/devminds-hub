
const HighlightedHeader = ({ title }: { title: string }) => {

    const titleArr = title.split("|") || [];

    return (
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
            {titleArr[0]}{" "}
            <span className="text-brand-primary">{titleArr[1]}</span>{" "}
            {titleArr[3]}
        </h1>
    )
}

export default HighlightedHeader;
