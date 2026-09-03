import Link from "next/link"

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  return (
    <div>
      <Link href="/pages">
        Go to page
      </Link>
      {lang}
    </div>
  )
}
