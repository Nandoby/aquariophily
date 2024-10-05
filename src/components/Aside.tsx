import { LinksProps } from "@/types/links-props";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  links: LinksProps[];
  title?: string;
};

const Aside = ({ links, title }: Props) => {
  const pathname = usePathname();

  const MenuItem = ({ link }: { link: LinksProps }) => {
    return (
      <li>
        {/* Vérifie si le lien a des sous-liens */}
        {link.subLinks ? (
          // Si l'élément contient des sous-liens, on génère <details> avec <summary>
          link.subLinks.map((sublink, index) => (
            <details key={index}>
              <summary>{sublink.firstTitle}</summary>
              <ul>
                {sublink.links.map((sublinkItem, subIndex) =>
                  sublinkItem.subLinks ? (
                    <MenuItem key={subIndex} link={sublinkItem} />
                  ) : (
                    <li key={subIndex}>
                      <Link
                        className={clsx("", {
                          active: pathname === sublinkItem.url,
                        })}
                        href={sublinkItem.url || ""}
                      >
                        {sublinkItem.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </details>
          ))
        ) : (
          // Si l'élément n'a pas de sous-lien, on génère un lien simple
          <Link
            className={clsx("", {
              active: pathname === link.url,
            })}
            href={link.url || ""}
          >
            {link.title}
          </Link>
        )}
      </li>
    );
  };

  const Menu = ({ links }: Props) => {
    return (
      <ul className="menu">
        {links.map((link, index) => (
          <MenuItem key={index} link={link} />
        ))}
      </ul>
    );
  };

  return (
    <aside className="p-4 absolute">
      <h2 className="text-lg font-semibold">{title}</h2>
      <nav>
        <Menu links={links} />
      </nav>
    </aside>
  );
};

export default Aside;
