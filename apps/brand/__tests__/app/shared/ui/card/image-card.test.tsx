import ImageCard from "@/app/shared/ui/card/image-card";
import { render } from "@testing-library/react";

describe("ImageCard", () => {
    const defaultProps = {
        img: '/assets/img/purple.jpg'
    }

    it("renders an image element", () =>{
        const { container } = render(<ImageCard {...defaultProps} />);
        const imageElement = container.querySelector('img');

        expect(imageElement).toBeInTheDocument();
        expect(imageElement?.tagName.toLowerCase()).toBe('img');
    })
})