import React from "react";

type HeroProps ={
    section: React.ReactNode;
    title?: React.ReactNode;
}

const ClassicHero: React.FC<HeroProps> = ({
    section,
    title
}) => {
    return (
        <div className="">
            {section}
            {title}
        </div>
    )
}

export default ClassicHero;
