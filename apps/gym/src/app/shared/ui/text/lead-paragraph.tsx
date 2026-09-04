const LeadParagraph = ({ text } : { text: string }) => {
    return (
        <p className=" text-md sm:text-lg font-light max-w-2xl leading-relaxed">
            {text}
          </p>
    )
}

export default LeadParagraph;
