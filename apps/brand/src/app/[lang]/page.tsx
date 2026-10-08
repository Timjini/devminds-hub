import Content from "./content";

export default async function Page({ params }: PageProps<"/[lang]">) {
  return (
    <>
      <Content />
    </>
  )
}
