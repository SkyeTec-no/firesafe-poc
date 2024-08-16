import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar no-animation">
      <div className="flex-1 ml-6">
        <Link href="/">
          <img
            src="/images/logos/Firesafe-black.png"
            alt="Firesafe logo"
            className="h-12"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
          >
            <li>
              <Link href="/admin" className="">
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
