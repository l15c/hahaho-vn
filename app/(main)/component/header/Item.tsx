import useActiveLink from "@/hooks/useActiveLink";
import Link from "next/link";
type Props = {
  title: string;
  href: string;
  menu?: MenuItem[];
};

type MenuItem = { label: string; href: string };

export default function Item({ title, href, menu }: Props) {
  const { active } = useActiveLink(href);
  return (
    <div className="group relative">
      <Link href={href}>
        <p
          className={`items-center py-2 uppercase ${
            active ? "font-bold text-primary" : ""
          }`}
        >
          {title}
        </p>
      </Link>
      {menu && (
        <ul
          className="
            menu invisible absolute left-0 w-max translate-y-1 bg-base-100 shadow-[0_0_10px_rgba(0,0,0,0.3)] opacity-0 transition duration-200 ease-in group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
        >
          {menu.map((menu) => (
            <MenuItem key={menu.href} {...menu} />
          ))}
        </ul>
      )}
    </div>
  );
}

function MenuItem({ href, label }: MenuItem) {
  const { active } = useActiveLink(href);
  return (
    <li className={`${active ? "bordered" : ""}`}>
    <Link href={href} >
      {label}
    </Link>
    </li>
  );
}
