import { LinksProps } from "@/types/links-props";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  links: LinksProps[];
};

const Aside = ({ links }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="p-4 absolute">
      <nav>
        <ul className="menu">
          {links.map((link, index) =>
            link.subLinks ? (
              link.subLinks.map((sublink, subIndex) => (
                <li key={subIndex}>
                  <details>
                    <summary>{sublink.firstTitle}</summary>
                    <ul>
                      {sublink.links.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            className={clsx("", {
                              "!bg-blue-500 !text-blue-50 !font-semibold": pathname === item.url,
                            })}
                            href={item.url}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))
            ) : link.url ? (
              <li>
                <Link
                  className={clsx("", {
                    "!bg-blue-500 !text-blue-50 !font-semibold": pathname === link.url,
                  })}
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;

{
  /* <ul className="menu">
          <li>
            <Link href="/aquariums/aquarium/les-aquariums">
            </Link>
          </li>
            <li>
              <details>
                <summary>{links.level2}</summary>
                <ul>
                 
                      <li key={index}>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                </ul>
              </details>
            </li>
          
        </ul> */
}
