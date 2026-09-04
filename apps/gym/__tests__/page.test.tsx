import Page from "@/app/[lang]/page";
import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";


describe("Page", () => {

  jest.mock('../src/proxy.ts');

  async function generateAsyncValue<T>(value: T) {
    return value;
  }
  it('renders page with language', async ()=>{
     const component = await Page({
      params: generateAsyncValue({ lang: 'en' }),
      searchParams: generateAsyncValue({}),
    });
    const { container } = render(component);

    const divElement = container.querySelector("div");

    expect(divElement).toBeInTheDocument;
  })
});
