import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-2">
              Indian Institute of Technology Delhi
            </h2>
            <p className="text-gray-500 leading-6">
              Hauz Khas, New Delhi, Delhi 110016
            </p>
            <p className="text-gray-500 leading-6">
              011-2659-7135 | info@iitd.ac.in |{" "}
              <a
                href="https://www.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-600 transition duration-150 ease-in-out">
                www.iitd.ac.in
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              Quick Links
            </h3>
            <nav className="grid gap-2">
              <Link
                href="/departments"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Departments
                </a>
              </Link>
              <Link
                href="/centres"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Centres
                </a>
              </Link>
              <Link
                href="/schools"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Schools
                </a>
              </Link>
              <Link
                href="/centres-of-excellence"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Centres of Excellence
                </a>
              </Link>
              <Link
                href="/anti-sexual-harassment-policy"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Anti-Sexual Harassment Policy
                </a>
              </Link>
              <Link
                href="/right-to-information"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Right to Information
                </a>
              </Link>
              <Link
                href="#"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Switch to Dark Mode
                </a>
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-2">Explore</h3>
            <nav className="grid gap-2">
              <Link
                href="/rules"
                passHref={true}
                scroll={false}
                shallow={true}
                legacyBehavior>
                <a className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                  Rules
                </a>
              </Link>
              <Link
                href="/campus-life"
                passHref={true}
                scroll={false}
                shallow={true}>
                <a
                  className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out"
                  >
                  Campus Life
                </a>
              </Link>
              <Link
                href="/institute-newsletter"
                passHref={true}
                scroll={false}
                shallow={true}>
                <a
                  className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out"
                  legacyBehavior={true}>
                  Institute Newsletter
                </a>
              </Link>
              <Link
                href="/educational-programmes"
                passHref={true}
                scroll={false}
                shallow={true}>
                <a
                  className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out"
                  legacyBehavior={true}>
                  Educational Programmes
                </a>
              </Link>
              <Link
                href="/phd-seminar"
                passHref={true}
                scroll={false}
                shallow={true}>
                <a
                  className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out"
                  legacyBehavior={true}>
                  PhD Seminar
                </a>
              </Link>
              <Link
                href="/climate-action-plan"
                passHref={true}
                scroll={false}
                shallow={true}>
                <a
                  className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out"
                  legacyBehavior={true}>
                  Climate Action Plan
                </a>
              </Link>
              <Link
                href="/contact-us"
                passHref={true}
                scroll={false}
                shallow={true}>
                <a
                  className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out"
                  legacyBehavior={true}>
                  Contact Us
                </a>
              </Link>
            </nav>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Indian Institute of Technology Delhi.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
