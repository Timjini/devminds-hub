import VideoComponent from "@/app/shared/ui/video/video-component";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("VideoComponent", () => {
  const defaultProps = {
    videoId: "boxingVideo",
    videoUrl: "/assets/videos/boxing1.mp4",
    customClass: "block max-h-screen w-full rounded-2xl object-cover",
    decoration: (
      <div
        data-testid="video-decoration"
        className="max-h-screen pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/95 via-black/60 to-transparent"
      />
    ),
  };

  it("renders the video element with the passed videoId and customClass", () => {
    const { container } = render(<VideoComponent {...defaultProps} />);

    const videoElement = container.querySelector(`#${defaultProps.videoId}`);
    expect(videoElement).toBeInTheDocument();
    expect(videoElement?.tagName.toLowerCase()).toBe("video");
    expect(videoElement).toHaveClass(
      "block",
      "max-h-screen",
      "w-full",
      "rounded-2xl",
      "object-cover"
    );
  });

  it("renders the source tag with correct videoUrl and video/mp4 type", () => {
    const { container } = render(<VideoComponent {...defaultProps} />);

    const sourceElement = container.querySelector(
      `#${defaultProps.videoId} source`
    );
    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute("src", defaultProps.videoUrl);
    expect(sourceElement).toHaveAttribute("type", "video/mp4");
  });

  it("renders the passed decoration element correctly", () => {
    render(<VideoComponent {...defaultProps} />);

    const decorationDiv = screen.getByTestId("video-decoration");
    expect(decorationDiv).toBeInTheDocument();
    expect(decorationDiv).toHaveClass(
      "pointer-events-none",
      "absolute",
      "inset-0",
      "rounded-2xl"
    );
  });
});