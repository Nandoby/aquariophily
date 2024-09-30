import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Aqua
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Aquariophilie</Link>
          </li>
          <li>
            <details>
              <summary>Aquarium</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link href="/aquariums/aquarium/les-aquariums">Aquarium</Link>
                </li>
                <li>
                  <Link href="/aquariums/cuve/la-cuve">Cuve</Link>
                </li>
                <li>
                  <Link href="/aquariums/eclairage/lumiere">Eclairage</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
