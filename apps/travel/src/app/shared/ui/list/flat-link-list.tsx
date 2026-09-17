import Link from "next/link";

type ListProps = {
  list: {
    href: string;
    name: string;
  }[];
};

const FlatLinkList: React.FC<ListProps> = ({ list }) => {
  console.log(list);
  return (
    <ul className="flex flex-wrap items-center justify-center text-heading gap-5">
      {list.map((link, index) => (
        <li
          key={index}
          className="relative px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-colors duration-300 hover:underline me-4 md:me-6 hover:pointer"
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FlatLinkList;
