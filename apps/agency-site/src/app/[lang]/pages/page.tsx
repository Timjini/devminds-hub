import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  return (<div><h1>{dict.welcome.title}</h1></div>);
}
