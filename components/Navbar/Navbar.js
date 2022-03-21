import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="container mx-auto px-14">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              SowrovSarkar
            </Link>
          </div>
          <div className="flex-none navbar-start ">
            <ul className="menu menu-horizontal p-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="#cta">Hire</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
