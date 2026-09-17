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
          className="relative px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-colors duration-300 ease-in eas-out me-4 hover:scale-110 md:me-6 hover:pointer"
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FlatLinkList;
