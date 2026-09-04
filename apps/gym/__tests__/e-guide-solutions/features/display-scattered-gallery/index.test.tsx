import DisplayScatteredGallery from "@/app/e-guide-solutions/features/display-scattered-gallery";
import { render, screen } from "@testing-library/react";
import { galleryConfigsMock, tourGalleryDataMock } from "../../../../__mock__/image-gallery-data";

describe("Scattered Image Gallery", () => {
  it("renders images from array", () => {
    render(<DisplayScatteredGallery gallery={tourGalleryDataMock} configs={galleryConfigsMock} />);
    expect(screen.queryAllByRole("img").length).toBe(
      tourGalleryDataMock.length,
    );
  });

  it("return images with alt", async () => {
    const { getByAltText } = render(
      <DisplayScatteredGallery gallery={tourGalleryDataMock} configs={galleryConfigsMock} />,
    );
    const image = getByAltText("Scenic mountain tour view");
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fassets%2Fimg%2Ftour4.jpg&w=640&q=75",
    );
  });
});
