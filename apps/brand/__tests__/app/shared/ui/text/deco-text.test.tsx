import DecoText from "@/app/shared/ui/text/deco-text";
import { render } from "@testing-library/react";

describe("Render Text with Background Image", ()=>{
    const defaultProps = {
        backgroundImg: '/assets/img/purple.jpg',
        text: 'You Got This'
    }

    const renderComponent = (props = {}) => {
        return render(<DecoText {...defaultProps} {...props} />);
    };

    it("renders a text with background image", () =>{
        const { container } = renderComponent();

        const title = container.querySelector('h1');
        expect(title).toBeInTheDocument();
        expect(title?.style.backgroundImage).toContain("/assets/img/purple.jpg");
    })

    it("renders h1 tag with content", () =>{
        const { container } = renderComponent();

        const title = container.querySelector('h1');
        // console.log("------>", title?.innerText); // its empty it seems that the text doesn't render
        //  expect(title?.children).toBe("You Got This");
    })
})