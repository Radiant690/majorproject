import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isCurrentRoute = (route: string) => {
    return router.pathname === route;
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a>
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Research and Development Cell Logo"
                />
              </a>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/" legacyBehavior>
              <a
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isCurrentRoute("/") ? "text-primary-600" : "text-gray-700"
                } hover:text-primary-600 focus:outline-none focus:text-primary-600`}>
                Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior >
              <a
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isCurrentRoute("/about")
                    ? "text-primary-600"
                    : "text-gray-700"
                } hover:text-primary-600 focus:outline-none focus:text-primary-600`}>
                About
              </a>
            </Link>
            <Link href="/research" legacyBehavior >
              <a
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isCurrentRoute("/research")
                    ? "text-primary-600"
                    : "text-gray-700"
                } hover:text-primary-600 focus:outline-none focus:text-primary-600`}>
                Research
              </a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isCurrentRoute("/projects")
                    ? "text-primary-600"
                    : "text-gray-700"
                } hover:text-primary-600 focus:outline-none focus:text-primary-600`}>
                Projects
              </a>
            </Link>
            <Link href="/team">
              <a
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isCurrentRoute("/team") ? "text-primary-600" : "text-gray-700"
                } hover:text-primary-600 focus:outline-none focus:text-primary-600`}>
                Team
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isCurrentRoute("/contact")
                    ? "text-primary-600"
                    : "text-gray-700"
                } hover:text-primary-600 focus:outline-none focus:text-primary-600`}>
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
