export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="container mx-auto px-14">
          <div className="flex-1">
            <a href="#" className="btn btn-ghost normal-case text-xl">
              SowrovSarkar
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Hire</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
