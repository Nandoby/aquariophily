import { LinksProps } from "@/types/links-props";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  links: LinksProps[];
  title?: string;
};

const Aside = ({ links, title }: Props) => {
  const pathname = usePathname();
  const [openDetails, setOpenDetails] = useState<string[]>([]);

  // Fonction récursive pour trouver l'URL et ouvrir les parents correspondants
  const checkMatchingLinks = (links: LinksProps[], parents: string[] = []) => {
    for (const link of links) {
      if (link.subLinks) {
        for (const sublink of link.subLinks) {
          // Si un sous-lien correspond au pathname
          const matchingLink = sublink.links.find(
            (sublinkItem) => sublinkItem.url === pathname
          );
          if (matchingLink) {
            // Ajoute tous les parents à openDetails
            setOpenDetails([...parents, sublink.firstTitle]);
            return;
          } else {
            // Recherche récursive dans les sous-menu imbriqués
            checkMatchingLinks(sublink.links, [...parents, sublink.firstTitle]);
          }
        }
      }
    }
  };

  useEffect(() => {
    checkMatchingLinks(links);
  }, [pathname, links]);

  const MenuItem = ({ link }: { link: LinksProps }) => {
    return (
      <li>
        {/* Vérifie si le lien a des sous-liens */}
        {link.subLinks ? (
          // Si l'élément contient des sous-liens, on génère <details> avec <summary>
          link.subLinks.map((sublink, index) => (
            <details
              key={index}
              open={openDetails.includes(sublink.firstTitle)}
            >
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
