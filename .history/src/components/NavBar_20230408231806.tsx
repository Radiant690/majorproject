import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="public\rbmu.png" alt="Logo" />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Home
              </a>
            </Link>
            
            <Link href="/about">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                About
              </a>
            </Link>
            <Link href="/research">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Research
              </a>
            </Link>
            <Link href="/projects">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Projects
              </a>
            </Link>
            <Link href="/team">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Team
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
